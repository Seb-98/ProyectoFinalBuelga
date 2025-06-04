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
            sessionStorage.setItem('userLog', JSON.stringify(this));
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

