class Carrito {
    constructor() {
        this.userCarrito = [];
        this.valorCarrito = 0;
    }

    cargarCarrito(id, cantidad) {
        let findCamiseta = stockCamisetas.find(camiseta => camiseta.id === Number(id) && camiseta.cantidad>0);

        if (findCamiseta != null) {
            if(cantidad > findCamiseta.cantidad){
                alert(`No hay tantas camisetas en stock, quedan ${findCamiseta.cantidad}` )
                return;
            }

            let findCamisetaCarrito = this.userCarrito.find(item => item.id === Number(id));

            if (!findCamisetaCarrito) {
                const camisetaParaCarrito = new Camiseta(
                    findCamiseta.id,
                    findCamiseta.nombre,
                    findCamiseta.año,
                    findCamiseta.talle,
                    findCamiseta.precio,
                    Number(cantidad)
                );

                alert(`Usted ha elegido Nombre ${findCamiseta.nombre} Año ${findCamiseta.año} Precio ${findCamiseta.precio} Cantidad ${cantidad}`);
                this.userCarrito.push(camisetaParaCarrito);
                this.valorCarrito += camisetaParaCarrito.precio * camisetaParaCarrito.cantidad;
            } else {
                findCamisetaCarrito.cantidad += Number(cantidad);
                this.valorCarrito += findCamiseta.precio * Number(cantidad);
            }

            restarStockCamisetas(id, cantidad);
            this.mostrarCarrito()

        } else {
            alert("La camiseta buscada no se encuentra disponible!");
        }
    }

    mostrarCarrito() {
        let msjCarrito = 'Su carrito actual es \n';

        for (let i = 0; i < this.userCarrito.length; i++) {
            msjCarrito += `nombre ${this.userCarrito[i].nombre} año ${this.userCarrito[i].año} precio ${this.userCarrito[i].precio} cantidad ${this.userCarrito[i].cantidad} \n`
        }

        msjCarrito += `\n Y su valor total es: ${this.valorCarrito} `;

        alert(msjCarrito)
    }

    borrarCarrito() {
        let alertMsg = prompt("Esta seguro de borrar su carrito? 1-Si 2-No");
        if (alertMsg == 1) {
            this.userCarrito = [];
            this.valorCarrito = 0;
            alert("Su carrito se ha reiniciado correctamente")
        }
        else if (alertMsg == 2) {
            alert("Volviendo al menu")
        }
        else {
            alert("No es una opcion valida")
        }
    }
}