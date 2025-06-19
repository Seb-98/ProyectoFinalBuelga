
let objectCarrito;

principal();

function principal() {
    validarCarritoSession();
    validaUserLogin();
    loginUser();
    logoutUser();
    mostrarCamisetas();
    selectCamiseta()
    borrarCarrito();
}

function selectCamiseta() {
    let buttons = document.querySelectorAll('.selectCamiseta')
    let buttonsArray = Array.from(buttons)

    buttonsArray.forEach(e => {
        e.addEventListener("click", (e) => {

            if (validarUsuario()) {
                objectCarrito.cargarCarrito(e.target.parentNode.id);
            }
        })
    })
}

function borrarCarrito() {
    let btnBorrar = document.getElementById('borrarCarrito');
    btnBorrar.addEventListener("click", () => {
        objectCarrito.borrarCarrito();
    })
}

function loginUser() {
    let btnLogin = document.getElementById('loginButton');
    let inputUser = document.getElementById('inputUser');
    let inputPassword = document.getElementById('inputPassword');
    let loginDiv = document.querySelector(".loginDiv");
    let userMsg = document.querySelector(".userMsgDiv");

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
    let userMsg = document.querySelector(".userMsgDiv");
    let loginDiv = document.querySelector(".loginDiv");
    let inputUser = document.getElementById('inputUser');
    let inputPassword = document.getElementById('inputPassword');

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
    let loginDiv = document.querySelector(".loginDiv");
    let userMsg = document.querySelector(".userMsgDiv");

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