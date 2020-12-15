function changeTextFieldStyle(property, value) {
    return textFieldEl.style[property] = value;
}

function changeFont(property, value, resetStyle) {
    const selection = document.getSelection();

    if (selection.rangeCount) {
        const spanEl = document.createElement('span');
        
        const spanAround = selection.focusNode.firstElementChild;
        if(spanAround){
            spanEl.style.fontWeight = spanAround.style.fontWeight;
            spanEl.style.fontStyle = spanAround.style.fontStyle;
            spanEl.style.textDecoration = spanAround.style.textDecoration;
        }
        // const spanAround = selection.focusNode.lastElementChild;
        spanAround && spanAround.style[property] === value 
            ? spanEl.style[property] = resetStyle
            : spanEl.style[property] = value;
        
        spanEl.innerHTML = selection.toString();

        const range = selection.getRangeAt(0);
        
        range.deleteContents();
        range.insertNode(spanEl)
    }
}



// TEMP functions -------------------------------------------------------
function selectOptionOnInput(inputEl) {
    const isNumber = inputEl.type === "number" ? true : false;
    // const selection = document.getSelection();

    // if (selection.rangeCount) {
    //     changeFont()
    // }
  

    const selectEl = inputEl.previousSibling.previousSibling;
    const selectOptions = selectEl.options;
    console.log(selectEl.options.length)
    fonts.forEach((font)=> {
        if(String(inputEl.value).toLowerCase() === font.toLowerCase()) {
            console.log("Achou")
            // select = font
            for(let i in selectOptions) {
                if(font === selectOptions[i].value){
                    selectEl.selectedIndex = i;
                    inputEl.value = selectOptions[i].value;
                    changeTextFieldStyle("fontFamily", selectOptions[i].value)
                }
            }
        }
    })
}

function changeButtonState(value) {
    if(textField.style.fontFamily === value){
    // Do anything
    }
}



function onSelectChangeInput(selectEl) {
    const SelectValue = selectEl.value;
    const nextInputEl = selectEl.nextSibling.nextSibling;
    nextInputEl.value = SelectValue;
}