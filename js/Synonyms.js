console.log("Hello");

let input = document.querySelector(".input");
let searchBtn = document.querySelector(".button");
let defTextField = document.querySelectorAll(".def");

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
  const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${thesaurusAPI}`);
  const data = await response.json();
  console.log(data);

  //Empty result
  if (data.length === 0) {
    alert("Please try again");
    return;
  }

  data[0].meta.syns[0].forEach((item, i) => {
    defTextField[0].innerHTML += "- " + item + "<br>";
  });
}
