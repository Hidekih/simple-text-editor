const FONT_SIZE_DEFAULT = 11;
const FONT_FAMILY_DEFAULT = "Roboto"

const fontFamilies = [
    "Arial",
    "Calibri",
    "Comic Sans MS",
    "Consolas",
    "Courier New",
    "Symbol",
    "Roboto",
    "Verdana",
    "Times New Roman"
].sort();

const fontSizes = [
    8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 26, 28, 36, 48, 72
];

function renderOptions(selectEl, fontArray, inputEl){
    fontArray.forEach(font => {
        const optionEl = document.createElement('option');
        optionEl.value = font;
        optionEl.innerText = font;

        if(isNaN(font))
            optionEl.style.fontFamily = font;

        if(font === FONT_SIZE_DEFAULT || font === FONT_FAMILY_DEFAULT){
            optionEl.selected = "selected";
            inputEl.value = font;
        }
        selectEl.appendChild(optionEl);
    });
}

const selectFontFamily = document.querySelector("#font-family select");
const inputForFontFamily = document.querySelector("#font-family input");

const selectFontSize = document.querySelector("#font-size select");
const inputForFontSize = document.querySelector("#font-size input");

renderOptions(selectFontFamily, fontFamilies, inputForFontFamily);
renderOptions(selectFontSize, fontSizes, inputForFontSize);
