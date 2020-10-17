const green   = "limegreen";
let grey    = "grey"

const words = ["the", "be", "to", "of", "and", "a", "in", "that", "have", "I", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at"];

//const words = ["the"];

let mins = 0;
 //gross wpm formula (words.length / 5) / mins;

 let totalChars = displayWords(words);
 console.log("Total Chars " + totalChars);

let text = document.querySelectorAll(".typeable");

let i = 0;
let textLenght = text.length - 1;

highlightText(text, i, grey);

document.addEventListener("keypress", (event) => {

    if(i === 0){
      
      let startTime = startTimer();
    }

    let text = document.querySelectorAll(".typeable");
    let textLenght = text.length -1;
    let key = getChar(text, i);

    if (event.key === key) {
      grey = "grey"
      highlightText(text, i, green);
      i++;
  
      if (i === textLenght) {

      let gWPM = getWpm(startTime, totalChars);
      document.querySelector(".wpm").innerHTML = gWPM.toPrecision(2);
        
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
  let text = document.querySelectorAll(".typeable");
  let i = 0;
  
  highlightText(text, i, grey);
}

function displayWords(words) {
    let numOfSpaces = words.length - 1; //get the number of spaces needed
    let numOfChars   = 0; //initialise number of characters to 0
    words.forEach(element => {

      let chars = element.split("");
    

      chars.forEach(character => {
        numOfChars ++;

        let newChar = document.createElement("span");
        newChar.innerHTML = character;
        newChar.className = "typeable"
        document.getElementById("type-area").appendChild(newChar);
      });
    
    let space = document.createElement("span");
    space.innerHTML = " ";
    space.className = "typeable"
    document.getElementById("type-area").appendChild(space);
  });

 return numOfChars + numOfSpaces; //return total characters
}

function startTimer() {
  return startTime = new Date();
}

function getWpm(startTime, totalChars) {
  endTime = new Date();
  let ellapsedTime = endTime - startTime; //get milliseconds

  ellapsedTime /= 1000; //get seconds
  ellapsedTime /= 60; //get minutes

  return (totalChars / 5) / ellapsedTime;
}