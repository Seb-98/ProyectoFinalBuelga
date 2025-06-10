class Usuario {
    constructor(name, pass, profile) {
        this.name = name;
        this.pass = pass;
        this.profile = profile;
    }

    obtenerUsuario() {

        let userFind = arrayUsers.find(usuario => usuario.name === this.name && usuario.pass === this.pass)

        if (userFind == null) {
            alert("El usuario que intenta ingresar no existe");
        } else {
            alert("Exito!")
            login = true;
            sessionStorage.setItem('userLog', JSON.stringify(userFind));
        }
    }

    crearUsuario() {
        alert(`Su usuario ${this.name} se ha creado correctamente!`)

        arrayUsers.push(this);
    }
}

let arrayUsers = [
    new Usuario("test", "test", 1),
    new Usuario("demo", "demo", 1),
    new Usuario("prueba", "prueba", 1),
]

let login = false;
let userLog;

validarUsuario = () => {
    if (sessionStorage.getItem('userLog') == null) {
        alert("Debe iniciar sesion para continuar con esta accion")
        return false;
    }

    return true;
}

validarPerfilUsuarioAdmin = () => {
    if (login) {

        userValidate = JSON.parse(sessionStorage.getItem('userLog'));

        if (userValidate.profile != 1) {
            alert("Su perfil de usuario no tiene acceso a esta accion")
            return false;
        }
    }

    return true;
}

function cerrarSesion() {
    sessionStorage.clear();
    login = false;
    alert("Cerro sesion correctamente");
}
