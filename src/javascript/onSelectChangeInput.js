function changeFont(property, value, resetStyle) {
    const selection = document.getSelection();

    const parsedValue = isNaN(Number(value))
        ? value
        : value + "pt";

    if (selection.rangeCount) {
        const spanEl = document.createElement('span');
        
        const spanAround = selection.focusNode.firstElementChild;
        
        if(spanAround){
            spanEl.style.fontWeight = spanAround.style.fontWeight;
            spanEl.style.fontStyle = spanAround.style.fontStyle;
            spanEl.style.textDecoration = spanAround.style.textDecoration;
            spanEl.style.fontSize = spanAround.style.fontSize;
        }
        
        spanAround && spanAround.style[property] === parsedValue 
            ? spanEl.style[property] = resetStyle
            : spanEl.style[property] = parsedValue;
        
        spanEl.innerHTML = selection.toString();

        const range = selection.getRangeAt(0);
        
        range.deleteContents();
        range.insertNode(spanEl)
    }
}

function generateOptionsArray(selectOptionsData, arrayLength) {
    const array = [];
    for(let i = 0; i < arrayLength; i++) 
        array.push(selectOptionsData[i].value);
    
    return array;
}

function selectOptionOnInput(inputEl) {
    const parsedInputValue = String(inputEl.value).toLowerCase();
    const selectEl = inputEl.previousSibling.previousSibling;
    const selectOptions = selectEl.options;
    const aselectOptionsLength = selectOptions.length;
    const optionsArray = generateOptionsArray(selectOptions, aselectOptionsLength);
    
    optionsArray.forEach(option => {
        const parsedFontValue = String(option).toLowerCase();

        if(parsedInputValue === parsedFontValue) {
            inputEl.value = option;
        }
    })
}

function onSelectChangeInput(selectEl) {
    const SelectValue = selectEl.value;
    const nextInputEl = selectEl.nextSibling.nextSibling;

    nextInputEl.value = SelectValue;
}
