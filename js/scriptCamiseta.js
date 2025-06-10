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

let stockCamisetas = [
    new Camiseta(1, "San Lorenzo", "13/14", "S", 9000, 3),
    new Camiseta(2, "San Lorenzo", "13/14", "M", 9000, 3),
    new Camiseta(3, "San Lorenzo", "13/14", "L", 9000, 3),
    new Camiseta(4, "Boca", "00/01", "S", 10000, 3),
    new Camiseta(5, "Boca", "00/01", "M", 10000, 3),
    new Camiseta(6, "Boca", "00/01", "L", 10000, 3),
    new Camiseta(7, "River", "18/19", "S", 8000, 3),
    new Camiseta(8, "River", "18/19", "M", 8000, 3),
    new Camiseta(9, "River", "18/19", "L", 8000, 3),
    new Camiseta(10, "Independiente", "16/17", "S", 7000, 3),
    new Camiseta(11, "Independiente", "16/17", "M", 7000, 3),
    new Camiseta(12, "Independiente", "16/17", "L", 7000, 3),
    new Camiseta(13, "Racing", "24/25", "S", 7000, 3),
    new Camiseta(14, "Racing", "24/25", "M", 7000, 3),
    new Camiseta(15, "Racing", "24/25", "L", 7000, 3),
    new Camiseta(16, "Argentina", "2022", "M", 12000, 3),
    new Camiseta(17, "Argentina", "2022", "M", 12000, 3),
    new Camiseta(18, "Argentina", "2022", "M", 12000, 3),
];

function mostrarCamisetas() {
    let mensajeCamisetas = "Camisetas en stock \n";
    for (i = 0; i < stockCamisetas.length; i++) {
        mensajeCamisetas += `ID: ${stockCamisetas[i].id} Nombre: ${stockCamisetas[i].nombre} Año: ${stockCamisetas[i].año} Precio: ${stockCamisetas[i].precio} Cantidad: ${stockCamisetas[i].cantidad}\n `;
    }

    alert(mensajeCamisetas);
}

function restarStockCamisetas(id, cantidad) {
    console.log(id)

    let camiseta = stockCamisetas.find(camiseta => camiseta.id === Number(id));
    console.log(camiseta);
    camiseta.cantidad = Number(camiseta.cantidad) - Number(cantidad);
}