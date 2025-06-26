
let objectCarrito;
let inputUser = document.getElementById('inputUser');
let inputPassword = document.getElementById('inputPassword');
let userMsg = document.querySelector(".userMsgDiv");
let loginDiv = document.querySelector(".loginDiv");

//A REALIZAR
//Aceptar Compra
//Redireccion a pantalla de compra realizada
//mejoras visuales

principal();

function principal() {
    validarCarritoSession();
    validaUserLogin();
    loginUser();
    logoutUser();
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
        let userLogin = new Usuario(inputUser.value, inputPassword.value)

        if (userLogin.obtenerUsuario()) {
            loginDiv.classList.add('invisible');
            userMsg.classList.remove('invisible');
            userMsg.innerHTML = `Bienvenido ${userLogin.name}!`;
        }
    })
}

function logoutUser() {
    let logoutButton = document.getElementById("logoutButton");

    logoutButton.addEventListener("click", () => {
        userMsg.classList.add('invisible');
        loginDiv.classList.remove('invisible');
        inputUser.value = "";
        inputPassword.value = "";

        objectCarrito.borrarCarrito();
        sessionStorage.removeItem('userLog');
    })
}

function validaUserLogin() {
    let userSession = JSON.parse(sessionStorage.getItem('userLog'));

    if (userSession != null) {
        loginDiv.classList.add('invisible');
        userMsg.classList.remove('invisible');
        userMsg.innerHTML = `Bienvenido ${userSession.name}!`;
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

function redirectCompra(){
    let btnCompra = document.getElementById("btnCompra");

    btnCompra.addEventListener("click", (e) => {

        if(JSON.parse(sessionStorage.getItem('carritoValue')) == null){
            alert("Debe seleccionar alguna camiseta para continuar");
            e.preventDefault();
            return;
        }
    })
}