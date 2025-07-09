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
    let precioImpuesto = Number((carritoValueSession * 0.20).toFixed(2)); //toFixed para 2 decimales y q no se vea feo
    let precioEnvio = Number((carritoValueSession * 0.07).toFixed(2));
    let precioTotal = carritoValueSession + precioImpuesto + precioEnvio;
    let detalle = "";

    carritoSession.forEach(element => {
        detalle += `
            <div class="row mb-3 border">
                <div class="col-lg-5">
                    <img class="imgCamisetaResumen"src="${element.imagen}"></img>
                </div>
                <div class="col-lg-7 d-flex flex-column align-items-center justify-content-top gap-3">
                        <p><span class="fw-bold">${element.nombre}</span></p>
                        <p>
                            <span>${element.año}</span>
                            <span>Talle ${element.talle}</span>
                        </p>
                        <p><span class="fw-bold">$${element.precio}</span></p>
                        <p><span>Cantidad ${element.cantidad}</span></p>
                </div> 
            </div>  
                
        `;
    });

    divDetalleCarrito.innerHTML = detalle;

    document.getElementById('totalCarritoDetalle').innerHTML = `$${carritoValueSession}`
    document.getElementById('precioEnvio').innerHTML = `$${precioEnvio}`
    document.getElementById('precioImpuesto').innerHTML = `$${precioImpuesto}`
    document.getElementById('totalCompra').innerHTML = `$${precioTotal}`
}


function realizarCompra() {
    let btnCompra = document.getElementById('btnCompra');
    let inputsCliente = document.getElementsByClassName('inputInfoCliente')
    let arrayInputs = Array.from(inputsCliente);

    btnCompra.addEventListener('click', () => {
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
                confirmButtonText: `Volver al Menu`,
            }).then((result)=>{
                if(result.isConfirmed){
                    sessionStorage.removeItem('carritoStore');
                    sessionStorage.removeItem('carritoValue');
                    window.location.href = "/index.html";
                }
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
    let btnCancelar = document.getElementById('btnCancelar');

    btnCancelar.addEventListener('click', () => {

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