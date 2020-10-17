const green   = "limegreen";
const neutral = "bisque"
let grey    = "grey"

 const words = ["the", "be", "to", "of", "and", "a", "in", "that", "have", "I", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at"];
let mins = 0;
 const gWPM = (words.length / 5) / mins;
//const words = ["the"];

displayWords(words);

let text = document.querySelectorAll("span");
let i = 0;
let textLenght = text.length - 1;

highlightText(text, i, grey);

document.addEventListener("keypress", (event) => {
    let text = document.querySelectorAll("span");
    let textLenght = text.length -1;
    let key = getChar(text, i);

    if (event.key === key) {
      grey = "grey"
      highlightText(text, i, green);
      i++;
  
      if (i === textLenght) {
        
      i = restart();
      reset();
      } 
      } else {
        grey = "red"
        highlightText(text, i, grey);
      
      
    }
     highlightText(text, i, grey);
  });

function highlightText(text, i, color) {
  text[i].style.backgroundColor = color;
}

function getChar(text, i) {
  let key = text[i].innerText;
  return key;
}

function unhighlightText(text, i) {
  text[i].style.backgroundColor = "bisque";
}

function restart() {
  
  let node = document.getElementById("type-area");
  while(node.firstChild) {
    node.removeChild(node.lastChild);
  }
  let i = 0;
  return i;
}

function reset () {
  displayWords(words);
  let text = document.querySelectorAll("span");
  let i = 0;
  
  highlightText(text, i, grey);
}

function displayWords(words) {

    words.forEach(element => {

      let chars = element.split("");
      console.log(chars);

      chars.forEach(character => {

        let newChar = document.createElement("span");
        newChar.innerHTML = character;
        document.getElementById("type-area").appendChild(newChar);
      });
    
    let space = document.createElement("span");
    space.innerHTML = " ";
    document.getElementById("type-area").appendChild(space);
  });
}