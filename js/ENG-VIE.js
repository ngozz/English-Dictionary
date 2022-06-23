console.log("Hello");

let input = document.querySelector(".input");
let searchBtn = document.querySelector(".button");
let defBox = document.querySelectorAll(".def");

searchBtn.addEventListener("click", function(e){
  e.preventDefault();

  //clear defBox
  defBox.forEach((item, i) => {
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
  const response = await fetch(`https://api.tracau.vn/WBBcwnwQpV89/s/${word}/en`);
  const data = await response.json();
  console.log(data);

  //Empty result
  if (data.title === 'No Definitions Found') {
    alert(data.message);
    return;
  }

  data.sentences.forEach((item, i) => {
    const vieDefinition = item.fields.vi;
    defBox[i].innerHTML += "- " + vieDefinition;
  });
}
