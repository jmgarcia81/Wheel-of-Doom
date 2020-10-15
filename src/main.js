'use strict'

document.getElementById("btnAddCoder").addEventListener('click', addCoder);
const codersDisplay = document.querySelector(".coders");

function addCoder() {
    let nombreCoder = "MaxPower";
    codersDisplay.innerHTML += `
    <div class="coder">
        <img src="img/${nombreCoder}.jpg" alt="Imagen de ${nombreCoder}" style="height: 80px;">
        <button class="btnDeleteCoder">X</button>
    </div>`;
};

codersDisplay.addEventListener('click', function(e){
    if (e.target && e.target.matches(".btnDeleteCoder")) {
        e.target.parentNode.remove();
    }
});