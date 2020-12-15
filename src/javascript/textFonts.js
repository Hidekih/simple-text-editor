const FONT_SIZE_DEFAULT = 11;
const FONT_FAMILY_DEFAULT = "Arial"

const fontFamilies = [
    "Arial",
    "Calibri",
    "Courier New",
    "Roboto",
    "Times New Roman"
].sort();

const fontSizes = [
    8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 26, 28, 36, 48, 72, 1
].sort();

function renderOptions(selectEl ,array){
    array.forEach(element => {
        const optionEl = document.createElement('option');
        optionEl.value = element;
        optionEl.innerText = element;

        if(element === FONT_SIZE_DEFAULT || element === FONT_FAMILY_DEFAULT){
            optionEl.selected = "selected";
        }
        selectEl.appendChild(optionEl);
    });
}

const selectFontFamily = document.querySelector("#font-family select");
const selectFontSize = document.querySelector("#font-size select");

renderOptions(selectFontFamily, fontFamilies);
renderOptions(selectFontSize, fontSizes);