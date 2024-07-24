document.addEventListener('DOMContentLoaded', function() {
    const botonesComprar = document.querySelectorAll('.btn-comprar');

    botonesComprar.forEach(boton => {
        boton.addEventListener('click', function() {
            alert('Producto agregado al carrito');
        });
    });
});
