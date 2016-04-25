// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.
// It accepts a single object as an argument. The object should have two key/value pairs.

// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.

// Once the user enters in a number, and a character, the user can either then just press the enter key
// (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree"
// and the tree should be shown in the console. This requires you to add an event listener to the button,
// as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key,
// or presses the button, then display an alert stating that both fields must have a value.


// Get user inputs//
    // number of layers//
var userNum = document.getElementById("layers");

    // character to build tree with//
var userChar = document.getElementById("character");

//var userNum = 5;
//var userChar = "b"

// creating arrays to be used later//
var spaces = [];
var symbols = [];

// creating variables to be used later//
var currentSpaces = "";
var currentSymbols = "";
var spaceSymbols = "";

  // loop function to create spaces array - I used a decrement here because the number of spaces shrinks
  // as you go down the triangle
function spaceLoop(numValue) {
  spaces = [];
  for (var r = numValue; r > 0; r--) {
    spaces.push(r);
  }
}

  // loop function to create symbols array//
function symbolLoop(numValue, charValue) {
  symbols = [];
  for (var i = 1; i <= (spaces.length * 2); i += 2) {
    symbols.push(i);
  }
  endBuild(charValue);
}

  // loop through spaces & symbols arrays to multiply string by array values//
function endBuild(charValue) {
  for (var i = 0; i < spaces.length; i++) {
    currentSpaces = ' '.repeat(spaces[i]);
    currentSymbols = charValue.repeat(symbols[i]);
    spaceSymbols = currentSpaces + currentSymbols;
    console.log(spaceSymbols);
  }
}

// messing with functions//
function startBuild(clickEvent) {
  clickEvent.preventDefault();
  var numValue = userNum.value;
  var charValue = userChar.value;
  if (numValue !== "" && charValue !== "") {
    spaceLoop(numValue);
    symbolLoop(numValue, charValue);
  } else {
    alert("Both fields must have a value!");
  }
}

var run = document.getElementById("grow");
run.addEventListener("click", startBuild);

document.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    startBuild(e);
  }
});
