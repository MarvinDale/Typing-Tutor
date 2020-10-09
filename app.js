window.addEventListener("DOMContentLoaded", () => {
  const numOfChars = 80;

  createSpan(numOfChars);
  let text = document.querySelectorAll("span");
  let i = 0;
  let textLenght = text.length;

  highlightText(text, i);

  document.addEventListener("keypress", (event) => {
    let key = getChar(text, i);

    if (event.key === key) {
      unhighlightText(text, i);
      i++;
      if (i === textLenght) i = restart();
      highlightText(text, i);
    }
  });
});

function highlightText(text, i) {
  text[i].style.backgroundColor = "grey";
}

function getChar(text, i) {
  let key = text[i].innerText;
  return key;
}

function unhighlightText(text, i) {
  text[i].style.backgroundColor = "white";
}

function restart() {
  let i = 0;
  return i;
}

function generateChar() {
  //generate number between 96 and 122 inclusive
  let num = Math.ceil(Math.random() * (122 - 96) + 96);

  word = String.fromCharCode(num);

  return word;
}

function createSpan(numOfWords) {
  for (i = 0; i < numOfWords; i++) {
    let word = generateChar();
    let newSpan = document.createElement("span");
    newSpan.innerHTML = word;
    document.getElementById("type-area").appendChild(newSpan);

    if (7 < Math.floor(Math.random() * 10 + 1)) {
      let space = document.createElement("span");
      space.innerHTML = "_";
      document.getElementById("type-area").appendChild(space);
    }
  }
}
