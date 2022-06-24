console.log("Hello");

let input = document.querySelector(".input");
let searchBtn = document.querySelector(".button");
let defTextField = document.querySelectorAll(".def");
let audio = document.querySelector(".audio");

searchBtn.addEventListener("click", function(e){
  e.preventDefault();

  //clear defTextField
  defTextField.forEach((item, i) => {
    item.innerHTML = "";
  });

  let word = input.value;
  if (word === "") {
    alert("Word required");
    return;
  }
  getData(word);
});

async function getData(word){
  const audioResponse = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  const audioData = await audioResponse.json();
  console.log(audioData);

  audioData[0].phonetics.forEach((item, i) => {
    if (!(item.audio === "")) {
      audio.src = item.audio;
      return;
    }
  });

  const response = await fetch(`https://api.tracau.vn/WBBcwnwQpV89/s/${word}/en`);
  const data = await response.json();
  console.log(data);

  //Empty result
  if (data.title === 'No Definitions Found') {
    alert(data.message);
    return;
  }

  for (var i = 0; i < 5; i++) {
    const vieDefinition = data.sentences[i].fields.vi;
    defTextField[i].innerHTML += "- " + vieDefinition;
  }
}
