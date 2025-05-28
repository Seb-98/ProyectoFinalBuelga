const textoMenu = `Bienvenido a RetroFutbol! tu lugar para comprar las camisetas de tus equipos favoritos \n`;
const textoOpciones = `\n1 Ingrese su usuario \n2 Crear usuario \n3 Cargar stock de camisetas \n4 Ver camisetas disponibles \n5 Agregar al carrito \n6 Ver carrito \n7 Borrar carrito \n8 Salir`;
let login = false;
let arrayUsers = [
    { user: "test", pass: "test", perfil: "1" },
    { user: "demo", pass: "demo", perfil: "1" },
    { user: "prueba", pass: "prueba", perfil: "1" },
]
let stockCamisetas = [];
let userCarrito = [];
let valorCarrito = 0; 

let bandera = true;

while (bandera) {
    let opcion = Number(prompt(`${textoMenu} ${textoOpciones}`))
    switch (opcion) {
        case 1:
            obtenerUsuario()

            break;
        case 2:
            userNew = prompt("Usuario");
            passNew = prompt("Contraseña");
            nuevoUsuario = crearUsuario(userNew, passNew)

            alert(`Su usuario ${nuevoUsuario} se ha creado correctamente!`)

            break;
        case 3:
            cargarCamisetas();
            break;
        case 4:
            mostrarCamisetas()
            break;
        case 5:
            searchCamiseta = prompt("Ingrese el nombre de la camiseta");
            cargarCarrito(searchCamiseta)
            break;
        case 6:
            mostrarCarrito()
            break;
        case 7:
            borrarCarrito()
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

function mostrarCamisetas() {
    let mensajeCamisetas = "Camisetas en stock \n";
    for (i = 0; i < stockCamisetas.length; i++) {
        mensajeCamisetas += `Nombre: ${stockCamisetas[i].nombre} Año: ${stockCamisetas[i].año} Precio: ${stockCamisetas[i].precio} Cantidad: ${stockCamisetas[i].cantidad}\n `;
    }

    alert(mensajeCamisetas);
}

function obtenerUsuario() {
    let userLogin = prompt("Usuario")
    let passLogin = prompt("Contraseña")

    let userFind = arrayUsers.find(usuario => usuario.user === userLogin);
    let passFind = arrayUsers.find(usuario => usuario.pass === passLogin);
    if (userFind == null || passFind == null) {
        alert("Error al ingresar usuario");
    } else {
        alert("Exito!")
        login = true;
    }
}

const crearUsuario = (userNew, passNew) => {
    arrayUsers.push({ user: userNew, pass: passNew, perfil: "2" })

    return userNew;
}

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