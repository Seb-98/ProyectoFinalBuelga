class Usuario {
    constructor(name, pass) {
        this.name = name;
        this.pass = pass;
    }

    obtenerUsuario() {
        let login = false;

        let userFind = arrayUsers.find(usuario => usuario.name === this.name && usuario.pass === this.pass)

        if (userFind != null) {
            sessionStorage.setItem('userLog', JSON.stringify(userFind));
            login = true;
        } else {
            Swal.fire({
                icon: "error",
                title: "El usuario que intenta ingresar no existe",
            })
        }
        return login;
    }

    crearUsuario() {        
        Swal.fire({
            icon: "success",
            title: `Su usuario ${this.name} se ha creado correctamente!`,
        })
        arrayUsers.push(this);
    }
}

let arrayUsers = [
    new Usuario("test", "test"),
    new Usuario("demo", "demo"),
    new Usuario("prueba", "prueba"),
]

validarUsuario = () => {
    if (sessionStorage.getItem('userLog') == null) {
        Swal.fire({
            icon: "error",
            title: "Debe iniciar sesion para continuar con esta accion",
        })
        return false;
    }

    return true;
}