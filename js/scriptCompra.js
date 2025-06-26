principalCompra();

function principalCompra() {
    mostrarCarritoDetalle();
    realizarCompra();
}

function mostrarCarritoDetalle() {
    let carritoSession = JSON.parse(sessionStorage.getItem('carritoStore'))
    let carritoValueSession = JSON.parse(sessionStorage.getItem('carritoValue'))
    let divDetalleCarrito = document.querySelector(".detalleCarrito")
    let totalCarritoDetalle = document.getElementById('totalCarritoDetalle');
    let detalle = "";

    carritoSession.forEach(element => {
        detalle += `
            <div class="cardCarrito"> 
                <p>${element.nombre} - Talle ${element.talle} - ${element.año} - $${element.precio}</p>
            </div>
        `;
    });

    divDetalleCarrito.innerHTML = detalle;
    totalCarritoDetalle.innerHTML = `Total $${carritoValueSession}`
}


function realizarCompra() {
    let compraBtn = document.getElementById('compraBtn');
    let inputsCliente = document.getElementsByClassName('inputInfoCliente')
    let arrayInputs = Array.from(inputsCliente);

    compraBtn.addEventListener('click', () => {
        let validacion = true;
        arrayInputs.forEach(element => {

            if (element.value == "") {
                validacion = false;
            }
        })

        if (validacion) {
            alert("compra realizada con exito")
        } else {
            alert("complete los campos para continuar con la compra")
        }

    })
}