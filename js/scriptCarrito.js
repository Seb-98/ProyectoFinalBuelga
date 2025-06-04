let userCarrito = [];
let valorCarrito = 0;

function cargarCarrito(id) {

    let findCasaca = stockCamisetas.find(camiseta => camiseta.id === Number(id));

    if (findCasaca != null) {
        alert(`Usted a elegido Nombre ${findCasaca.nombre} Año ${findCasaca.año} Precio ${findCasaca.precio} Cantidad ${findCasaca.cantidad}`)
        userCarrito.push(findCasaca);
        valorCarrito = valorCarrito + Number(findCasaca.precio);
        mostrarCarrito()
    } else {
        alert("La camiseta buscada  no se encuentra disponible!");
    }
}

function mostrarCarrito() {
    let msjCarrito = 'Su carrito actual es \n';

    for (i = 0; i < userCarrito.length; i++) {
        msjCarrito += `nombre ${userCarrito[i].nombre} año ${userCarrito[i].año} precio ${userCarrito[i].precio} cantidad ${userCarrito[i].cantidad} \n`
    }

    msjCarrito += `\n Y su valor total es: ${valorCarrito} `;

    alert(msjCarrito)
}

function borrarCarrito() {
    let alertMsg = prompt("Esta seguro de borrar su carrito? 1-Si 2-No");
    if (alertMsg == 1) {
        userCarrito = [];
        valorCarrito = 0;
        alert("Su carrito se ha reiniciado correctamente")
    }
    else if (alertMsg == 2) {
        alert("Volviendo al menu")
    }
    else {
        alert("No es una opcion valida")
    }
}