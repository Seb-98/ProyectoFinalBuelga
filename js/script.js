
let objectCarrito;
let inputUser = document.getElementById('inputUser');
let inputPassword = document.getElementById('inputPassword');
let userMsg = document.querySelector(".userMsgDiv");
let loginDiv = document.querySelector(".loginDiv");

principal();

function principal() {
    console.log(sessionStorage)
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