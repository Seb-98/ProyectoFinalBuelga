const textoMenu = `Bienvenido a RetroFutbol! tu lugar para comprar las camisetas de tus equipos favoritos \n`;
const textoOpciones = `\n1 Ingrese su usuario \n2 Crear usuario \n3 Cargar stock de camisetas \n4 Ver camisetas disponibles \n7 Salir`;
let login = false;
let arrayUsers = [
    { user: "test", pass: "test" },
    { user: "demo", pass: "demo" },
    { user: "prueba", pass: "prueba" },
]
let stockCamisetas = [];

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
        mensajeCamisetas += `
        Nombre: ${stockCamisetas[i].nombre} Modelo: ${stockCamisetas[i].año}
        \n Precio: ${stockCamisetas[i].precio} Cantidad: ${stockCamisetas[i].cantidad}
        \n `;
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
    arrayUsers.push({ user: userNew, pass: passNew })

    return userNew;
}

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
        case 7:
            bandera = false;
            break;
        default:
            alert(`No es una opcion ${opcion}`)
            break;

    }
}