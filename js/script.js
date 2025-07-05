
let objectCarrito;
let userMsg = document.querySelector(".userMsgDiv");
let loginDiv = document.querySelector(".loginDiv");
let logoutButton = document.getElementById("logoutButton");

principal();

function principal() {
    validarCarritoSession();
    validaUserLogin();
    loginUser();
    logoutUser();
    crearUsuario();
    mostrarCamisetas();
    borrarCarrito();
    redirectCompra();
}

function borrarCarrito() {
    let btnBorrar = document.getElementById('borrarCarrito');
    btnBorrar.addEventListener("click", () => {
        objectCarrito.borrarObjCarrito();
    })
}

function loginUser() {
    let btnLogin = document.getElementById('loginButton');

    btnLogin.addEventListener("click", () => {
        modalLogin();
    })
}

function logoutUser() {

    logoutButton.addEventListener("click", () => {
        userMsg.classList.add('invisible');
        logoutButton.classList.add('invisible');
        loginDiv.classList.remove('invisible');

        objectCarrito.borrarObjCarrito();
        sessionStorage.removeItem('userLog');
    })
}

function validaUserLogin() {
    let userSession = JSON.parse(sessionStorage.getItem('userLog'));

    if (userSession != null) {
        loginDiv.classList.add('invisible');
        userMsg.classList.remove('invisible');
        userMsg.innerHTML = `Bienvenido ${userSession.name}!`;
        logoutButton.classList.remove('invisible');

    }
}

function validarCarritoSession() {
    let carritoStore = JSON.parse(sessionStorage.getItem('carritoStore'));
    let carritoValue = JSON.parse(sessionStorage.getItem('carritoValue'));

    if (carritoStore != null && carritoValue != null) {
        objectCarrito = new Carrito(carritoStore, carritoValue);
        objectCarrito.mostrarCarrito();
    } else {
        objectCarrito = new Carrito([], 0);
    }
}

function redirectCompra() {
    let btnCompra = document.getElementById("btnCompra");

    btnCompra.addEventListener("click", (e) => {
        e.preventDefault();

        let carritoValue = JSON.parse(sessionStorage.getItem('carritoValue'))

        if (carritoValue == null || carritoValue == 0) {

            Toastify({
                text: "Debe seleccionar alguna camiseta para continuar",
                duration: 2000,
                style: {
                    background: "red",
                }
            }).showToast();

            return;
        } else {
            Toastify({
                text: "Cargando informacion...",
                duration: 2000,
                style: {
                    background: "yellow",
                    color: "black"
                }
            }).showToast();

            setTimeout(() => {
                window.location.href = "/resumenCompra.html";
            }, 1500);

        }
    })
}

function modalLogin(){
    Swal.fire({
        title: "Iniciar Sesion",
        html: `
            <input type="text" placeholder="Usuario" id="nameUser"></input>
            <input type="password" placeholder="Contraseña" id="passUser"></input>
        `,
        showCancelButton: true,
        confirmButtonText: `Enviar`,
        cancelButtonText:`Cancelar`
    }).then((result) => {
        let nameUser = document.getElementById("nameUser");
        let passUser = document.getElementById("passUser");

        let userLogin = new Usuario(nameUser.value, passUser.value)

        if(result.isConfirmed){
            if (userLogin.obtenerUsuario()) {
                loginDiv.classList.add('invisible');
                userMsg.classList.remove('invisible');
                logoutButton.classList.remove('invisible');

                userMsg.innerHTML = `Bienvenido ${userLogin.name}!`;
            }
        }
    });
}

function crearUsuario(){
    let newUserBtn = document.getElementById('newUserButton');

    newUserBtn.addEventListener("click", () => {
        modalNewUser();
    })
}

function modalNewUser(){
    Swal.fire({
        title: "Nuevo Usuario",
        html: `
            <input type="text" placeholder="Usuario" id="newNameUser"></input>
            <input type="password" placeholder="Contraseña" id="newPassUser"></input>
            <input type="password" placeholder="Contraseña" id="validatePassUser"></input>
        `,
        showCancelButton: true,
        confirmButtonText: `Enviar`,
        cancelButtonText:`Cancelar`
    }).then((result)=>{
        let newNameUser = document.getElementById("newNameUser");
        let newPassUser = document.getElementById("newPassUser");
        let validatePassUser = document.getElementById("validatePassUser");

        if(result.isConfirmed){
            if(validateNewPassword(newPassUser.value,validatePassUser.value)){
                console.log("ta bom");
                let userLogin = new Usuario(newNameUser.value, newPassUser.value)
                userLogin.crearUsuario();

            }else{
                console.log("no ta bom")
            }
        }
    })
}

function validateNewPassword(pass, validatePass){
    if(pass !== validatePass){
        return false;
    }

    return true;
}