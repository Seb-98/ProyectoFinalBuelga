class Carrito {
    constructor(carrito, valor) {
        this.userCarrito = carrito;
        this.valorCarrito = valor;
    }

    cargarCarrito(id) {
        let findCamisetaCarrito = this.userCarrito.find(item => item.id === id)
        
        if(findCamisetaCarrito == null){
            let findCamiseta = stockCamisetas.find(camiseta => camiseta.id === id)

            const camisetaParaCarrito = new Camiseta(
                findCamiseta.id,
                findCamiseta.nombre,
                findCamiseta.año,
                findCamiseta.talle,
                findCamiseta.precio,
                1
            );

            this.userCarrito.push(camisetaParaCarrito);
            this.valorCarrito += camisetaParaCarrito.precio;
            
            sessionStorage.setItem('carritoStore', JSON.stringify(this.userCarrito));
            sessionStorage.setItem('carritoValue', this.valorCarrito);

            this.mostrarCarrito()
        }
        else{
            alert("Ya agrego esta camiseta")
        }
    }

    mostrarCarrito() {
        let containerCarrito = document.getElementById('containerItemsCarrito');
        let totalCarrito = document.getElementById('totalCarrito');
        let msjCarrito = "";

        this.userCarrito.forEach(item => {
            msjCarrito += `
                <div class="cardCarrito" id="item-${item.id}">
                    <p>
                        ${item.nombre} - Talle ${item.talle} - ${item.año} - $${item.precio}
                        <button class="deleteItem" value="${item.id}">X</button>
                    </p>
                    <div>
                        <button class="restCantItem" value="${item.id}">-</button>
                        <span class="cantItem">${item.cantidad}</span>
                        <button class="sumCantItem" value="${item.id}">+</button>
                    </div>
                </div>`;
        })
        containerCarrito.innerHTML = msjCarrito;
        totalCarrito.innerHTML = `Total: $${this.valorCarrito}`;

        borrarItemCarrito(this);
        sumarItemCarrito(this);
    }

    borrarObjCarrito() {
        let totalCarrito = document.getElementById('totalCarrito');
        let containerCarrito = document.getElementById('containerItemsCarrito');

        containerCarrito.innerHTML = "";
        totalCarrito.innerHTML = `Total: $0`;
        this.userCarrito = [];
        this.valorCarrito = 0;
        sessionStorage.removeItem('carritoStore');
        sessionStorage.removeItem('carritoValue');
    }

    borrarObjItemCarrito(id) {
        let totalCarrito = document.getElementById('totalCarrito');

        let itemDelete = this.userCarrito.find(item => item.id == id);

        this.valorCarrito -= (Number(itemDelete.precio) * Number(itemDelete.cantidad));
        this.userCarrito = this.userCarrito.filter(item => item.id != id);
        sessionStorage.setItem('carritoStore', JSON.stringify(this.userCarrito));
        sessionStorage.setItem('carritoValue', this.valorCarrito);
        totalCarrito.innerHTML = `Total: $${this.valorCarrito}`;
    }

    sumarCantidad(id){
        let itemCamiseta = this.userCarrito.find(item => item.id === id)

        if (itemCamiseta) {
            itemCamiseta.cantidad += 1;
            this.valorCarrito += itemCamiseta.precio;

            sessionStorage.setItem('carritoStore', JSON.stringify(this.userCarrito));
            sessionStorage.setItem('carritoValue', this.valorCarrito);
            this.mostrarCarrito();
        }
    }
}

function borrarItemCarrito(arrayCarrito) {
    let btnsDelete = document.querySelectorAll('.deleteItem');
    let btnsDeleteArray = Array.from(btnsDelete);

    btnsDeleteArray.forEach(e => {
        e.addEventListener("click", (e) => {
            arrayCarrito.borrarObjItemCarrito(e.target.value);
            e.target.parentNode.parentNode.remove();
        })
    })
}

function sumarItemCarrito(arrayCarrito){
    let sumBtn = document.querySelectorAll('.sumCantItem');
    let sumBtnArray = Array.from(sumBtn);

    sumBtnArray.forEach(e => {
        e.addEventListener("click", () => {
            arrayCarrito.sumarCantidad(e.value);
        })
    })
}