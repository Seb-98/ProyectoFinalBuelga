let stockCamisetas; //variable q se usa en carrito tambien

class Camiseta {
    constructor(id, nombre, año, talle, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.año = año;
        this.talle = talle;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

async function mostrarCamisetas() {
    let mensajeCamisetas = "";

    let containerCamisetas = document.getElementById('containerCamisetas');

    try {
        let response = await fetch("./data.json");
        stockCamisetas = await response.json();

        stockCamisetas.forEach(element => {

            mensajeCamisetas += `
                <div class="cardCamiseta" id="${element.id}">
                    <div>
                        <p class="textCamiseta">Equipo: ${element.nombre}</p>
                        <p class="textCamiseta">Temporada: ${element.año}</p>
                        <p class="textCamiseta">Talle: ${element.talle}</p>
                        <p class="textCamiseta">Precio: $${element.precio}</p>
                    </div>
                    <button class="selectCamiseta">Agregar</button>
                </div>
            `;
        });

        containerCamisetas.innerHTML = mensajeCamisetas;

        selectCamiseta();

    } catch (error) {
        console.error("Error al obtener los datos de camisetas:", error);
    }

}

function selectCamiseta() {
    let buttons = document.querySelectorAll('.selectCamiseta')
    let buttonsArray = Array.from(buttons)

    buttonsArray.forEach(e => {
        e.addEventListener("click", (e) => {

            if (validarUsuario()) {
                objectCarrito.cargarCarrito(e.target.parentNode.id);
            }
        })
    })
}