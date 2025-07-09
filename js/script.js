
let objectCarrito;
let userMsg = document.querySelector(".userMsgDiv");
let loginDiv = document.querySelector(".loginDiv");
let logoutButton = document.getElementById("logoutButton");

principal();

async function principal() {
    setUsers()
    validarCarritoSession();
    validaUserLogin();
    loginUser();
    logoutUser();
    crearUsuario();
    await getDataCamisetas();
    ordenarCamisetas();
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
        userMsg.innerHTML = `${userSession.name}`;
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
    let btnContinuar = document.getElementById("btnContinuar");

    btnContinuar.addEventListener("click", (e) => {
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
                    background: "#e3e322",
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
            <input type="text" class="form-control mb-3" placeholder="Usuario" id="nameUser"></input>
            <input type="password" class="form-control" placeholder="Contraseña" id="passUser"></input>
        `,
        showCancelButton: true,
        confirmButtonText: `Enviar`,
        cancelButtonText:`Cancelar`
    }).then(async (result) => {
        
        if(result.isConfirmed){

            let nameUser = document.getElementById("nameUser").value;
            let passUser = document.getElementById("passUser").value;

            let campoUsuarioValido = await validarCampoVacio(nameUser);
            let campoPassValido = await validarCampoVacio(passUser);

            if (!campoUsuarioValido || !campoPassValido) return;

            let userLogin = new Usuario(nameUser, passUser)

            if (userLogin.obtenerUsuario()) {
                loginDiv.classList.add('invisible');
                userMsg.classList.remove('invisible');
                logoutButton.classList.remove('invisible');

                userMsg.innerHTML = `${userLogin.name}`;
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
            <input type="text" class="form-control mb-3" placeholder="Usuario" id="newNameUser"></input>
            <input type="password" class="form-control mb-3" placeholder="Contraseña" id="newPassUser"></input>
            <input type="password" class="form-control mb-3" placeholder="Repetir Contraseña" id="validatePassUser"></input>
        `,
        showCancelButton: true,
        confirmButtonText: `Enviar`,
        cancelButtonText:`Cancelar`
    }).then(async (result)=>{
        let newNameUser = document.getElementById("newNameUser").value;
        let newPassUser = document.getElementById("newPassUser").value;
        let validatePassUser = document.getElementById("validatePassUser").value;

        if(result.isConfirmed){
            let newNameUserValido = await validarCampoVacio(newNameUser);
            let newPassUserValido = await validarCampoVacio(newPassUser);

            if (!newNameUserValido || !newPassUserValido) return;

            if(validateNewPassword(newPassUser,validatePassUser)){
                let userLogin = new Usuario(newNameUser, newPassUser)
                userLogin.crearUsuario();
            }
        }
    })
}

function validateNewPassword(pass, validatePass){
    if(pass !== validatePass){
        Swal.fire({
            icon: "error",
            title: "Las contraseñas deben ser iguales",
        })
        return false;
    }

    return true;
}

async function validarCampoVacio(valueValidate){
    if(valueValidate.trim() === ''){
        Swal.fire({
            icon: "error",
            title: "No puede ingresar campos vacios",
        })
        return false;
    }
    return true;
}