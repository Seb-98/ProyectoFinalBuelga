
sessionStorage.clear();

objectCarrito = new Carrito();

principal();

function principal(){
    mostrarCamisetas();
    selectCamiseta()
    borrarCarrito();
}

function selectCamiseta(){
    let buttons = document.querySelectorAll('.selectCamiseta')
    let buttonsArray = Array.from(buttons)
    
    buttonsArray.forEach(e => {
        e.addEventListener("click", (e) => {
            objectCarrito.cargarCarrito(e.target.parentNode.id);
        })
    })
}

function borrarCarrito(){
    let btnBorrar = document.getElementById('borrarCarrito');
    btnBorrar.addEventListener("click", () =>{
        objectCarrito.borrarCarrito();
    })
}