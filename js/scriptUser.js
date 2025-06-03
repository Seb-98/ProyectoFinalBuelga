class Usuario {
    constructor(name, pass, profile) {
        this.name = name;
        this.pass = pass;
        this.profile = profile;
    }

    obtenerUsuario(arrayUsers) {
        console.log(arrayUsers, 'PRUEBAA');

        let userFind = arrayUsers.find(usuario => usuario.name === this.name && usuario.pass === this.pass)

        if (userFind == null) {
            alert("El usuario que intenta ingresar no existe");
        } else {
            alert("Exito!")
            login = true;
        }
    }

    // crearUsuario(arrayUsers) {
    //     arrayUsers.push(constructor(this.name, this.pass, this.profile));
    // }
}
