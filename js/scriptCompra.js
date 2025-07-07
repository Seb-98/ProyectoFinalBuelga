principalCompra();

function principalCompra() {
    mostrarCarritoDetalle();
    realizarCompra();
    cancelarCompra();
}

function mostrarCarritoDetalle() {
    let carritoSession = JSON.parse(sessionStorage.getItem('carritoStore'))
    let carritoValueSession = JSON.parse(sessionStorage.getItem('carritoValue'))
    let divDetalleCarrito = document.querySelector(".detalleCarrito")
    let totalCarritoDetalle = document.getElementById('totalCarritoDetalle');
    let detalle = "";

    carritoSession.forEach(element => {
        detalle += `
            <div class="row mb-2">
                <div class="col-lg-6">
                    <img class="imgCamisetaResumen"src="${element.imagen}"></img>
                </div>
                <div class="col-lg-6">
                    <div class="">
                        <p><span class="textCamiseta">${element.nombre}</span></p>
                        <p><span class="textCamiseta">${element.año}</span></p>
                        <p><span class="textCamiseta">${element.talle}</span></p>
                        <span class="textCamiseta">$${element.precio}</span>
                    </div>                
                </div> 
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

            if (element.value.trim() === "") {
                validacion = false;
                element.classList.add('inputError');
            } else {
                element.classList.remove('inputError');
            }
        })

        if (validacion) {
            Swal.fire({
                icon: "success",
                title: "Su compra ha sido realizada con exito",
            })
        } else {

            Toastify({
                text: "Debe completar todos los campos para continuar",
                duration: 3000,
                style: {
                    background: "red",
                }
            }).showToast();
        }

    })
}

function cancelarCompra() {
    let cancelarBtn = document.getElementById('cancelarBtn');

    cancelarBtn.addEventListener('click', () => {

        Toastify({
            text: "Redireccionando...",
            duration: 2000,
            style: {
                background: "yellow",
                color: "black"
            }
        }).showToast();

        setTimeout(() => {
            window.location.href = "/index.html";
        }, 1500);
    })
}