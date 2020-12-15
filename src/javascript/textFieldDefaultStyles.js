const textFieldEl = document.getElementById("text-field");

textFieldEl.style.fontStyle = "normal";
textFieldEl.style.fontWeight = "normal";
textFieldEl.style.fontFamily = "Arial"

// Mudar isso para outro arquivo
const inputEl = document.querySelector("#font-family input");
// if()
inputEl.value = textFieldEl.style.fontFamily;