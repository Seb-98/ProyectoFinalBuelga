class Usuario {
    constructor(name, pass) {
        this.name = name;
        this.pass = pass;
    }

    obtenerUsuario() {
        let login = false;

        let sessionUsers = JSON.parse(sessionStorage.getItem('usersStorage'));

        let userFind = sessionUsers.find(usuario => usuario.name === this.name && usuario.pass === this.pass)

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
        sessionStorage.setItem('usersStorage', JSON.stringify(arrayUsers))
    }
}

let arrayUsers = [
    new Usuario("Lionel Messi", "messi"),
    new Usuario("Profe Igna", "igna"),
    new Usuario("Profe David", "david"),
]

function setUsers() {
    if (sessionStorage.getItem('usersStorage') == null) {
        sessionStorage.setItem('usersStorage', JSON.stringify(arrayUsers))
    }
}

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