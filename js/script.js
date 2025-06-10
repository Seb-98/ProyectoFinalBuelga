const textoMenu = `Bienvenido a RetroFutbol! tu lugar para comprar las camisetas de tus equipos favoritos \n`;
const textoOpciones = `\n1 Ingrese su usuario \n2 Crear usuario \n3 Ver camisetas disponibles \n4 Cargar stock de camisetas \n5 Agregar al carrito \n6 Ver carrito \n7 Borrar carrito \n8 Salir`;

let bandera = true;

objectCarrito = new Carrito();

while (bandera) {
    let opcion = Number(prompt(`${textoMenu} ${textoOpciones}`))
    switch (opcion) {
        case 1:
            let userLogin = prompt("Usuario");
            let passLogin = prompt("Contraseña");

            let userIngresado = new Usuario(userLogin, passLogin, 1);

            userIngresado.obtenerUsuario();

            break;
        case 2:
            userNew = prompt("Usuario");
            passNew = prompt("Contraseña");

            let userNuevo = new Usuario(userNew, passNew, 2);
            userNuevo.crearUsuario()

            break;
        case 3:
            mostrarCamisetas();
            break;
        case 4:
            id = stockCamisetas.length + 1;
            nombre = prompt("Club");
            año = prompt("Año");
            talle = prompt("Talle");
            precio = prompt("Precio");
            cantidad = prompt("Cantidad");

            let camisetaNueva = new Camiseta(id, nombre, año, talle, precio, cantidad);
            camisetaNueva.cargarCamiseta();
            break;
        case 5:
            searchCamiseta = prompt("Ingrese el id de la camiseta");
            cantidadCamiseta = prompt("Ingrese el cantidad de camisetas");

            objectCarrito.cargarCarrito(searchCamiseta, cantidadCamiseta)
            break;
        case 6:
            objectCarrito.mostrarCarrito()
            break;
        case 7:
            objectCarrito.borrarCarrito()
            break;
        case 8:
            bandera = false
            break;
        default:
            alert(`No es una opcion ${opcion}`)
            break;
    }
}