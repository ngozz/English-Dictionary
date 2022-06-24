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
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  const data = await response.json();
  console.log(data);

  //Empty result
  if (data.title === 'No Definitions Found') {
    alert(data.message);
    return;
  }

  //Print out definition
  data.forEach((item, i) => {
    const partOfSpeech = item.meanings[0].partOfSpeech;
    const definition = item.meanings[0].definitions[0].definition;
    defTextField[i].innerHTML = "(" + partOfSpeech + ")" + "\n" + definition;
  });

  data[0].meanings.forEach((item, i) => {
    const partOfSpeech = item.partOfSpeech;
    const definition = item.definitions[0].definition;
    defTextField[i].innerHTML = "(" + partOfSpeech + ")" + "\n" + definition;
  });

  data[0].phonetics.forEach((item, i) => {
    if (!(item.audio === "")) {
      audio.src = item.audio;
      return;
    }
  });
}
