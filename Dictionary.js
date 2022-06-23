console.log("Hello");

let input = document.querySelector(".input");
let searchBtn = document.querySelector(".button");
let defBox = document.querySelector(".def");

searchBtn.addEventListener("click", function(e){
  e.preventDefault();
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
}
