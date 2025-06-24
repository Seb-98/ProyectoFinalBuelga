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
                    <p>${item.nombre} - Talle ${item.talle} - ${item.año} - $${item.precio}</p>
                    <button class="deleteItem" value="${item.id}">X</button>
                </div>`;
        })
        containerCarrito.innerHTML = msjCarrito;
        totalCarrito.innerHTML = `Total: $${this.valorCarrito}`;

        borrarItemCarrito();
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

        this.valorCarrito = this.valorCarrito - Number(itemDelete.precio);
        this.userCarrito = this.userCarrito.filter(item => item.id != id);
        sessionStorage.setItem('carritoStore', JSON.stringify(this.userCarrito));
        sessionStorage.setItem('carritoValue', this.valorCarrito);
        totalCarrito.innerHTML = `Total: $${this.valorCarrito}`;
    }
}

function borrarItemCarrito() {
    let btnsDelete = document.querySelectorAll('.deleteItem');
    let btnsDeleteArray = Array.from(btnsDelete);

    btnsDeleteArray.forEach(e => {
        e.addEventListener("click", (e) => {
            objectCarrito.borrarObjItemCarrito(e.target.value);
            e.target.parentNode.remove();
        })
    })
}