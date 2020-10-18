const green   = "limegreen";
let grey    = "grey"

const commonWords = ["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"];

const numOfWords = 20;

words = getRandomWords(commonWords, numOfWords);

let mins = 0;
 

 let totalChars = displayWords(words);
 console.log("Total Chars " + totalChars);

let text = document.querySelectorAll(".typeable");

let i = 0;
let textLenght = text.length - 1;
let mistakes = 0;

addCursor(text, i);

document.addEventListener("keypress", (event) => {

    if(i === 0) { let startTime = startTimer();}

    let text = document.querySelectorAll(".typeable");
    let textLenght = text.length -1;
    let key = getChar(text, i);

    if (event.key === key) {
       document.getElementById("type-area").classList.remove("pulse");
      grey = "grey"
      highlightText(text, i, green);
      removeCursor(text, i);
      i++;
  
        if (i === textLenght) {

          let gWPM = getWpm(startTime, totalChars);
          document.querySelector(".wpm").innerHTML = gWPM.toPrecision(2);
          if(mistakes === 0){
           
            
            document.getElementById("type-area").classList.add("pulse");
            
          }
          mistakes = 0;
          i = restart();
          reset();
        } 
      } else {
      mistakes++;
      grey = "red"
      addCursor(text, i);
      highlightText(text, i, grey);
    }
    addCursor(text, i);
     
     
  });

function highlightText(text, i, color) {
  text[i].style.color = color;
}

function addCursor(text, i) {
  text[i].classList.add("blinking-cursor");
}

function removeCursor(text, i) {
  text[i].classList.remove("blinking-cursor");
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
  words = getRandomWords(commonWords, numOfWords);
  displayWords(words);
  let text = document.querySelectorAll(".typeable");
  let i = 0;
  
  addCursor(text, i);
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

  //gross wpm formula (words.length / 5) / mins;
  return (totalChars / 5) / ellapsedTime;
}


function getRandomWords(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}