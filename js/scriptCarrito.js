class Carrito {
    constructor(carrito, valor) {
        this.userCarrito = carrito;
        this.valorCarrito = valor;
    }

    cargarCarrito(id) {
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

    mostrarCarrito() {
        let containerCarrito = document.getElementById('containerItemsCarrito');
        let totalCarrito = document.getElementById('totalCarrito');
        let msjCarrito = "";

        this.userCarrito.forEach(item => {
            msjCarrito += `
                <div class="cardCarrito">
                    <p>Nombre: ${item.nombre}</p>
                    <p>Talle: ${item.talle}</p>
                    <p>Año: ${item.año}</p>
                    <p>Precio: ${item.precio}</p>
                </div>`;
        })
        containerCarrito.innerHTML = msjCarrito;
        totalCarrito.innerHTML = `Total: $${this.valorCarrito}`;
    }

    borrarCarrito() {
        let totalCarrito = document.getElementById('totalCarrito');
        let containerCarrito = document.getElementById('containerItemsCarrito');

        containerCarrito.innerHTML = "";
        totalCarrito.innerHTML = `Total: $0`;
        this.userCarrito = [];
        this.valorCarrito = 0;
        sessionStorage.removeItem('carritoStore');
        sessionStorage.removeItem('carritoValue');
    }
}