const textoMenu = `Bienvenido a RetroFutbol! tu lugar para comprar las camisetas de tus equipos favoritos \n`;
const textoOpciones = `\n1 Ingrese su usuario \n2 Crear usuario \n3 Cerrar sesion \n4 Ver camisetas disponibles \n5 Cargar stock de camisetas \n6 Agregar al carrito \n7 Ver carrito \n8 Borrar carrito \n9 Salir`;

let bandera = true;

sessionStorage.clear();

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
            if (validarUsuario()) {
                cerrarSesion();
            }
            break;
        case 4:
            if (validarUsuario()) {
                if (validarPerfilUsuarioAdmin()) {
                    mostrarCamisetas();
                }
            }
            break;
        case 5:
            id = stockCamisetas.length + 1;
            nombre = prompt("Club");
            año = prompt("Año");
            talle = prompt("Talle");
            precio = prompt("Precio");
            cantidad = prompt("Cantidad");

            let camisetaNueva = new Camiseta(id, nombre, año, talle, precio, cantidad);
            camisetaNueva.cargarCamiseta();
            break;
        case 6:
            searchCamiseta = prompt("Ingrese el id de la camiseta");
            cantidadCamiseta = prompt("Ingrese el cantidad de camisetas");

            objectCarrito.cargarCarrito(searchCamiseta, cantidadCamiseta)
            break;
        case 7:
            objectCarrito.mostrarCarrito()
            break;
        case 8:
            objectCarrito.borrarCarrito()
            break;
        case 9:
            bandera = false
            break;
        default:
            alert(`No es una opcion ${opcion}`)
            break;
    }
}