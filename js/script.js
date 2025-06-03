const textoMenu = `Bienvenido a RetroFutbol! tu lugar para comprar las camisetas de tus equipos favoritos \n`;
const textoOpciones = `\n1 Ingrese su usuario \n2 Crear usuario \n3 Ver camisetas disponibles \n4 Cargar stock de camisetas \n5 Agregar al carrito \n6 Ver carrito \n7 Borrar carrito \n8 Salir`;
let login = false;
let userLog;
let arrayUsers = [
    new Usuario("test", "test", 1),
    new Usuario("demo", "demo", 1),
    new Usuario("prueba", "prueba", 1),
]
let userCarrito = [];
let valorCarrito = 0;

let bandera = true;

while (bandera) {
    let opcion = Number(prompt(`${textoMenu} ${textoOpciones}`))
    switch (opcion) {
        case 1:
            let userLogin = prompt("Usuario");
            let passLogin = prompt("Contraseña");

            let userIngresado = new Usuario(userLogin, passLogin, 1);

            userIngresado.obtenerUsuario(arrayUsers, login);
            userLog = userIngresado;

            break;
        case 2:
            userNew = prompt("Usuario");
            passNew = prompt("Contraseña");

            let userNuevo = new Usuario(userNew, passNew, 2);
            userNuevo.crearUsuario(userNuevo, arrayUsers)

            alert(`Su usuario ${userNuevo.name} se ha creado correctamente!`)

            break;
        case 3:
            mostrarCamisetas();
            break;
        case 4:
            id = stockCamisetas.length+1;
            nombre = prompt("Club");
            año = prompt("Año"); 
            talle = prompt("Talle"); 
            precio = prompt("Precio"); 
            cantidad = prompt("Cantidad"); 

            let camisetaNueva = new Camiseta(id, nombre, año, talle, precio, cantidad);
            camisetaNueva.cargarCamiseta();
            break;
        case 5:
            searchCamiseta = prompt("Ingrese el nombre de la camiseta");
            cargarCarrito(searchCamiseta)
            break;
        case 6:
            bandera = false;
            break;
        case 7:
            bandera = false;
            break;
        case 8:
            bandera = false;
            break;
        default:
            alert(`No es una opcion ${opcion}`)
            break;
    }
}

function cargarCamisetas() {
    let nuevaCamiseta = []
    let propsCamiseta = ["Nombre", "Precio", "Año", "Cantidad"];

    for (let i = 0; i < propsCamiseta.length; i++) {
        nuevaCamiseta.push(prompt(propsCamiseta[i]));
    }

    stockCamisetas.push({
        nombre: nuevaCamiseta[0],
        precio: nuevaCamiseta[1],
        año: nuevaCamiseta[2],
        cantidad: nuevaCamiseta[3]
    })
};

function cargarCarrito(searchName) {
    let findCasaca = stockCamisetas.find(camiseta => camiseta.nombre === searchName);

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

const borrarCarrito = () => {
    let alertMsg = prompt("Esta seguro de borrar su carrito? 1-Si 2-No");
    if (alertMsg == 1) {
        userCarrito = [];
        valorCarrito = 0;
        alert("Su carrito se ha reiniciado correctamente")
    }
    else {
        alert("No es una opcion valida")
    }
}