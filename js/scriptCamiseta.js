class Camiseta {
    constructor(id, nombre, año, talle, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.año = año;
        this.talle = talle;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    cargarCamiseta() {
        stockCamisetas.push(this);
        alert(`Agregaste la camiseta de ${this.nombre} del año ${this.año}`)
    }
}

function mostrarCamisetas() {
    let mensajeCamisetas = "";

    let containerCamisetas = document.getElementById('containerCamisetas');

    stockCamisetas.forEach(element => {

        mensajeCamisetas += `
            <div class="cardCamiseta" id="${element.id}">
                <div>
                    <p class="textCamiseta">Equipo: ${element.nombre}<p>
                    <p class="textCamiseta">Temporada: ${element.año}<p>
                    <p class="textCamiseta">Talle: ${element.talle}<p>
                    <p class="textCamiseta">Precio: $${element.precio}<p>
                </div>
                <button class="selectCamiseta">Agregar</button>
            </div>
        `;
    });

    containerCamisetas.innerHTML = mensajeCamisetas;
}

function restarStockCamisetas(id, cantidad) {
    let camiseta = stockCamisetas.find(camiseta => camiseta.id === Number(id));
    camiseta.cantidad = Number(camiseta.cantidad) - Number(cantidad);
}

let stockCamisetas = [
    new Camiseta('cmst1', "San Lorenzo", "13/14", "S", 9000, 3),
    new Camiseta('cmst2', "San Lorenzo", "13/14", "M", 9000, 3),
    new Camiseta('cmst3', "San Lorenzo", "13/14", "L", 9000, 3),
    new Camiseta('cmst4', "Boca", "00/01", "S", 10000, 3),
    new Camiseta('cmst5', "Boca", "00/01", "M", 10000, 3),
    new Camiseta('cmst6', "Boca", "00/01", "L", 10000, 3),
    new Camiseta('cmst7', "River", "18/19", "S", 8000, 3),
    new Camiseta('cmst8', "River", "18/19", "M", 8000, 3),
    new Camiseta('cmst9', "River", "18/19", "L", 8000, 3),
    new Camiseta('cmst10', "Independiente", "16/17", "S", 7000, 3),
    new Camiseta('cmst11', "Independiente", "16/17", "M", 7000, 3),
    new Camiseta('cmst12', "Independiente", "16/17", "L", 7000, 3),
    new Camiseta('cmst13', "Racing", "24/25", "S", 7000, 3),
    new Camiseta('cmst14', "Racing", "24/25", "M", 7000, 3),
    new Camiseta('cmst15', "Racing", "24/25", "L", 7000, 3),
    new Camiseta('cmst16', "Argentina", "2022", "S", 12000, 3),
    new Camiseta('cmst17', "Argentina", "2022", "M", 12000, 3),
    new Camiseta('cmst18', "Argentina", "2022", "L", 12000, 3),
];