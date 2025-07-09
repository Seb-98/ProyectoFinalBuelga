let stockCamisetas; //variable q se usa en carrito tambien

class Camiseta {
    constructor(id, nombre, año, talle, precio, cantidad, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.año = año;
        this.talle = talle;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagen = imagen
    }
}

function mostrarCamisetas() {
    let mensajeCamisetas = "";

    let containerCamisetas = document.getElementById('containerCamisetas');
    containerCamisetas.innerHTML = '';

    stockCamisetas.forEach(element => {

        mensajeCamisetas += `
            <div class="cardCamiseta" id="${element.id}">
            <img class="imgCamiseta"src="${element.imagen}"></img>
                <div class="p-2">
                    <p><span class="itemDetail">Equipo:</span> ${element.nombre}</p>
                    <p><span class="itemDetail">Temporada:</span> ${element.año}</p>
                    <p><span class="itemDetail">Talle:</span> ${element.talle}</p>
                    <p><span class="itemDetail">Precio:</span> $${element.precio}</p>
                </div>
                <div class="text-center">
                    <button class="selectCamiseta btn blue-btn rounded-pill">Agregar</button>
                </div>
            </div>
        `;
    });

    containerCamisetas.innerHTML = mensajeCamisetas;

    selectCamiseta();
}

function selectCamiseta() {
    let buttons = document.querySelectorAll('.selectCamiseta')
    let buttonsArray = Array.from(buttons)

    buttonsArray.forEach(e => {
        e.addEventListener("click", (e) => {

            if (validarUsuario()) {
                objectCarrito.cargarCarrito(e.target.parentNode.parentNode.id);
            }
        })
    })
}

async function getDataCamisetas(){
    try {
        let response = await fetch("./data.json");
        stockCamisetas = await response.json(); 
    }
    catch(error){
        console.log(error,'error al cargar camisetas')
    }
}

function ordenarCamisetas(){
    let mayorPrecioBtn = document.getElementById('ordenarPrecioMayor')
    let menorPrecioBtn = document.getElementById('ordenarPrecioMenor')
    let añoMayorBtn = document.getElementById('ordenarAñoMayor')
    let añoMenorBtn = document.getElementById('ordenarAñoMenor')

    mayorPrecioBtn.addEventListener("click",() =>{
        stockCamisetas.sort((a, b) => b.precio - a.precio)
        mostrarCamisetas();
    })

    menorPrecioBtn.addEventListener("click",() =>{
        stockCamisetas.sort((a, b) => a.precio - b.precio);
        mostrarCamisetas();
    })

    añoMayorBtn.addEventListener("click",() =>{
        stockCamisetas.sort((a, b) => a.año - b.año);
        mostrarCamisetas();
    })
    
    añoMenorBtn.addEventListener("click",() =>{
        stockCamisetas.sort((a, b) => b.año - a.año)
        mostrarCamisetas();
    })
}