class Carrito {
    constructor() {
        this.userCarrito = [];
        this.valorCarrito = 0;
    }

    cargarCarrito(id) {
        let findCamiseta = stockCamisetas.find(camiseta => camiseta.id === id)
        // let findCamisetaCarrito = this.userCarrito.find(item => item.id === id);     //para cuando tenga que validar la cantidad de camisetas

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

        // restarStockCamisetas(id, cantidad);
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
    }
}