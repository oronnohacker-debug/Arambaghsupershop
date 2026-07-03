// Cart Array to hold products
let cart = [];

// Toggle Cart Sidebar
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    sidebar.classList.toggle('open');
}

// Add product to Cart
function addToCart(name, price) {
    // Check if item already exists
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: name, price: price, quantity: 1 });
    }
    updateCartUI();
}

// Update Cart System
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    
    // Update total badge count
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalItems;

    // Clear UI
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">কার্ট খালি আছে</p>';
        totalAmount.innerText = '0';
        return;
    }

    // Loop through cart products
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <small>৳${item.price} x ${item.quantity}</small>
            </div>
            <strong>৳${item.price * item.quantity}</strong>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    totalAmount.innerText = total;
}

// Open Checkout Modal
function openCheckout() {
    if (cart.length === 0) {
        alert('আপনার কার্ট খালি! দয়া করে পণ্য যোগ করুন।');
        return;
    }
    document.getElementById('checkout-modal').style.display = 'flex';
}

// Close Checkout Modal
function closeCheckout() {
    document.getElementById('checkout-modal').style.display = 'none';
}

// Handle Order Submission
function submitOrder(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Success Message
    alert(`ধন্যবাদ ${name}! আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে।\nআমরা শীঘ্রই ${phone} নম্বরে যোগাযোগ করব।`);
    
    // Reset Cart
    cart = [];
    updateCartUI();
    closeCheckout();
    toggleCart();
}
