'use strict'

const btnAddCoder = document.getElementById("btnAddCoder");
const codersDisplay = document.getElementById("coders");
const coderNameInput = document.getElementById("coderName");

function addCoder() {
    let coderNameValue = getCoderNameInput();
    codersDisplay.innerHTML += createCoderCard(coderNameValue);
    clearCoderNameInput();
};

function clearCoderNameInput(){
    coderNameInput.value = "";
};

function createCoderCard(coderName){
    return `
        <div class="coder">
            <img src="img/${coderName}.jpg" alt="Imagen de ${coderName}"">
            <button class="btnDeleteCoder">X</button>
        </div>`;
};

function deleteCoderCard(event){
    if (event.target && event.target.matches(".btnDeleteCoder")) {
        event.target.parentNode.remove();
    }
};

function getCoderNameInput(){
    return coderNameInput.value;
};

btnAddCoder.addEventListener('click', addCoder);

codersDisplay.addEventListener('click', function(event){
    deleteCoderCard(event);
});