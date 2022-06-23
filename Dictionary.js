console.log("Hello");

let input = document.querySelector(".input");
let searchBtn = document.querySelector(".button");
let defBox = document.querySelectorAll(".def");

searchBtn.addEventListener("click", function(e){
  e.preventDefault();

  //clear defBox
  defBox.forEach((item, i) => {
    item.value = "";
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

  //Result Found
/*  let definition1 = data[0].meanings[0].definitions[0].definition;

  if (!(data[0].meanings[4] === undefined)) {
    let definition2 = data[0].meanings[4].definitions[0].definition;
    defBox[1].value += JSON.stringify(definition2);
  }

  defBox[0].value += JSON.stringify(definition1);
*/
  data.forEach((item, i) => {
    const partOfSpeech = item.meanings[0].partOfSpeech;
    const definition = item.meanings[0].definitions[0].definition;
    defBox[i].value = "(" + partOfSpeech + ")" + "\n" + definition;
  });

  data[0].meanings.forEach((item, i) => {
    const partOfSpeech = item.partOfSpeech;
    const definition = item.definitions[0].definition;
    defBox[i].value = "(" + partOfSpeech + ")" + "\n" + definition;
  });
}
