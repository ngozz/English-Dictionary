console.log("Hello");
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
  const response = await fetch(`https://api.tracau.vn/WBBcwnwQpV89/s/${word}/vi`);
  const data = await response.json();
  console.log(data);

  for (var i = 0; i < 5; i++) {
    const engDefinition = data.sentences[i].fields.en;
    defTextField[i].innerHTML += "- " + engDefinition;
  }
}
