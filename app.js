const green   = "limegreen";
const neutral = "bisque"
let grey    = "grey"

const numOfChars = 80;
createSpan(numOfChars);

let text = document.querySelectorAll("span");
let i = 0;
let textLenght = text.length;

highlightText(text, i, grey);

document.addEventListener("keypress", (event) => {
    let text = document.querySelectorAll("span");
    let textLenght = text.length;
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
  createSpan(numOfChars);
  let text = document.querySelectorAll("span");
  let i = 0;
  highlightText(text, i);
}

function generateChar() {
  //generate number between 96 and 122 inclusive
  let num = Math.ceil(Math.random() * (122 - 96) + 96);

  word = String.fromCharCode(num);

  return word;
}

function createSpan(numOfChars) {
  for (let i = 0; i < numOfChars; i++) {
    let word = generateChar();
    let newSpan = document.createElement("span");
    newSpan.innerHTML = word;
    document.getElementById("type-area").appendChild(newSpan);

    if (7 < Math.floor(Math.random() * 10 + 1) &&  i < numOfChars - 1) {
      let space = document.createElement("span");
      space.innerHTML = " ";
      document.getElementById("type-area").appendChild(space);
    }
  }
}
