document.getElementById('toggleCategorias').addEventListener('click', function() {
    var categorias = document.getElementById('categorias');
    categorias.classList.toggle('active'); 
});
let cart = [];

function toggleImagen(elemento) {
    elemento.classList.toggle("ampliada");
}
function addToCart(button) {
    const productElement = button.closest('.producto'); 
    const name = productElement.querySelector('.nombre-producto').textContent; 
    const price = parseFloat(productElement.querySelector('.precio').getAttribute('data-precio')); 

    const product = { name, price };
    cart.push(product);
    saveCart(); 
    displayCart(); 
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart)); 
}


function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart); 
    }
    displayCart(); 
}
document.addEventListener('DOMContentLoaded', loadCart);



function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; 
    let total = 0; 

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);

        total += item.price; 
    });

   
    const totalElement = document.getElementById('cart-total');
    totalElement.textContent = `Total: $${total.toFixed(2)}`; 
}

function sendWhatsApp() {
    let message = '¡Hola! Quiero hacer el siguiente pedido:\n';
    let total = 0; 

    cart.forEach(item => {
        message += `${item.name} - $${item.price}\n`;
        total += item.price; 
    });

    message += `\nTotal: $${total.toFixed(2)}`; 

    const encodedMessage = encodeURIComponent(message);
    const phone = '2213073595';  
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    window.open(url, '_blank'); 
}


function toggleCart() {
    const cartMenu = document.getElementById('cart');
    cartMenu.classList.toggle('open');
}

function clearCart() {
    cart = []; 
    displayCart(); 
}
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los productos
    let productos = document.querySelectorAll(".producto");

    productos.forEach(producto => {
        producto.addEventListener("click", function () {
            abrirModal(this);
        });
    });
});

function abrirModal(elemento) {
    let modal = document.getElementById("modalProducto");

    // Extrae datos del producto
    let img = elemento.querySelector("img").src;
    let nombre = elemento.querySelector(".nombre-producto").textContent;
    let precio = elemento.querySelector(".precio").textContent;
    let descripcion = elemento.querySelector("p:nth-of-type(2)").textContent;

    // Asigna los valores al modal
    document.getElementById("modal-img").src = img;
    document.getElementById("modal-nombre").textContent = nombre;
    document.getElementById("modal-precio").textContent = precio;
    document.getElementById("modal-descripcion").textContent = descripcion;

    // Muestra el modal
    modal.style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modalProducto").style.display = "none";
}

document.querySelectorAll('.btn').forEach(boton => {
    boton.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que el clic se propague al contenedor
    });
});

