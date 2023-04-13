class lapiz {
    #marca
    constructor({ color = "rgb(255, 255, 0)", dimension = "20", borrador = "true", material = "madera", marca = "mongol" }) {
        this.color = color;
        this.dimension = dimension;
        this.borrador = borrador;
        this.material = material;
        this.#marca = marca;
    }
}

let obj = new lapiz({});
let myForm = document.querySelector("#myForm");
let tableBody = document.querySelector("#tableBody");

//Estoy actualizando la clase despues de llamarla, hay que modificar eso, para actualizarla antes de llamarla.
function updateObj(e) {
    obj.color = e.get("color");
    obj.dimension = e.get("dimension");
    obj.marca = e.get("marca");
    obj.borrador = e.get("borrador");
    obj.material = e.get("material");
}

myForm.addEventListener("submit", function (e) {
    e.preventDefault(); 
    let formData = new FormData(myForm); 
    let newRow = tableBody.insertRow();

    newRow.insertCell().innerHTML = formData.get(""); //Si hay que agregar el texto del color, solo pongo "color" dentro del get
    newRow.insertCell().innerHTML = formData.get("dimension");
    newRow.insertCell().innerHTML = formData.get("marca");
    newRow.insertCell().innerHTML = formData.get("borrador");
    newRow.insertCell().innerHTML = formData.get("material");

    updateObj(formData);

    let colorCell = newRow.firstElementChild;
    colorCell.style.backgroundColor = obj.color;
});

//console.log(obj);