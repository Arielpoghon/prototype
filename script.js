const productsData = [
    {id: 1, name: 'Basmati Rice 5kg', category: 'Groceries', price: 12.99, stock: 45, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400'},
    {id: 2, name: 'Premium Pasta 500g', category: 'Groceries', price: 3.49, stock: 120, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400'},
    {id: 3, name: 'Olive Oil 1L', category: 'Groceries', price: 15.99, stock: 35, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400'},
    {id: 4, name: 'Canned Tomatoes 400g', category: 'Groceries', price: 1.99, stock: 200, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400'},
    {id: 5, name: 'Honey 500g', category: 'Groceries', price: 8.99, stock: 28, image: 'https://images.unsplash.com/photo-1587049352846-4a222e784553?w=400'},
    {id: 6, name: 'Orange Juice 1L', category: 'Beverages', price: 4.99, stock: 65, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400'},
    {id: 7, name: 'Cola 2L', category: 'Beverages', price: 2.99, stock: 150, image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400'},
    {id: 8, name: 'Mineral Water 6-Pack', category: 'Beverages', price: 5.49, stock: 95, image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400'},
    {id: 9, name: 'Ground Coffee 250g', category: 'Beverages', price: 9.99, stock: 42, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400'},
    {id: 10, name: 'Green Tea Box', category: 'Beverages', price: 6.99, stock: 3, image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400'},
    {id: 11, name: 'Whole Milk 1L', category: 'Dairy', price: 3.99, stock: 88, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400'},
    {id: 12, name: 'Cheddar Cheese 200g', category: 'Dairy', price: 5.99, stock: 55, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400'},
    {id: 13, name: 'Greek Yogurt 500g', category: 'Dairy', price: 4.49, stock: 72, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400'},
    {id: 14, name: 'Butter 250g', category: 'Dairy', price: 4.99, stock: 62, image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400'},
    {id: 15, name: 'Cream 200ml', category: 'Dairy', price: 3.49, stock: 48, image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400'},
    {id: 16, name: 'White Bread Loaf', category: 'Bakery', price: 2.49, stock: 0, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400'},
    {id: 17, name: 'Croissants 6-Pack', category: 'Bakery', price: 5.99, stock: 32, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400'},
    {id: 18, name: 'Chocolate Cake', category: 'Bakery', price: 12.99, stock: 15, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400'},
    {id: 19, name: 'Cookies Assorted 300g', category: 'Bakery', price: 4.99, stock: 67, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400'},
    {id: 20, name: 'Baguette', category: 'Bakery', price: 1.99, stock: 2, image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400'},
    {id: 21, name: 'Potato Chips 200g', category: 'Snacks', price: 3.99, stock: 125, image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400'},
    {id: 22, name: 'Mixed Nuts 250g', category: 'Snacks', price: 7.99, stock: 54, image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400'},
    {id: 23, name: 'Dark Chocolate Bar', category: 'Snacks', price: 2.99, stock: 98, image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400'},
    {id: 24, name: 'Gummy Bears 500g', category: 'Snacks', price: 4.49, stock: 76, image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400'},
    {id: 25, name: 'Popcorn 300g', category: 'Snacks', price: 3.49, stock: 4, image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=400'},
    {id: 26, name: 'Laundry Detergent 2L', category: 'Household', price: 11.99, stock: 45, image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400'},
    {id: 27, name: 'Toilet Paper 12-Pack', category: 'Household', price: 8.99, stock: 83, image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400'},
    {id: 28, name: 'Dish Soap 500ml', category: 'Household', price: 3.99, stock: 112, image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400'},
    {id: 29, name: 'Glass Cleaner 750ml', category: 'Household', price: 4.49, stock: 67, image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400'},
    {id: 30, name: 'Paper Towels 6-Pack', category: 'Household', price: 7.99, stock: 1, image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400'},
    {id: 31, name: 'Hand Soap 300ml', category: 'Personal Care', price: 3.49, stock: 95, image: 'https://images.unsplash.com/photo-1585054090900-b6c80e5c12dd?w=400'},
    {id: 32, name: 'Shampoo 400ml', category: 'Personal Care', price: 6.99, stock: 71, image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400'},
    {id: 33, name: 'Toothpaste 100ml', category: 'Personal Care', price: 4.99, stock: 134, image: 'https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=400'},
    {id: 34, name: 'Body Lotion 250ml', category: 'Personal Care', price: 8.99, stock: 52, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400'},
    {id: 35, name: 'Deodorant Spray', category: 'Personal Care', price: 5.99, stock: 3, image: 'https://images.unsplash.com/photo-1612933510543-5b442296703b?w=400'},
    {id: 36, name: 'Organic Quinoa 500g', category: 'Groceries', price: 7.99, stock: 38, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400'},
    {id: 37, name: 'Almond Milk 1L', category: 'Beverages', price: 4.99, stock: 56, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400'},
    {id: 38, name: 'Mozzarella Cheese 250g', category: 'Dairy', price: 6.49, stock: 44, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400'},
    {id: 39, name: 'Bagels 6-Pack', category: 'Bakery', price: 4.49, stock: 28, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400'},
    {id: 40, name: 'Energy Drink 4-Pack', category: 'Beverages', price: 7.99, stock: 89, image: 'https://images.unsplash.com/photo-1622543925917-763c34f6f86a?w=400'}
];

// State Management
let cart = [];
let currentFilter = 'all';
let isLoggedIn = false;
let isAdmin = false;
let slideshowInterval;

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderProducts();
    renderSlideshow();
    updateCartUI();
    // Search functionality
    const searchInput = document.getElementById('search');
    const mobileSearchInput = document.getElementById('mobile-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchProducts(e.target.value);
        });
    }
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('input', (e) => {
            searchProducts(e.target.value);
        });
    }
    // Start slideshow auto-rotation
    startSlideshow();
});

// Render Products Function
function renderProducts(filter = 'all', searchTerm = '') {
    const grid = document.getElementById('product-grid');
    let filteredProducts = [...productsData];
    // Apply filters
    if (filter !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === filter);
    }
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    // Render product cards
    grid.innerHTML = filteredProducts.map(product =>
        `<div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-stock ${product.stock < 5 ? 'low' : ''}">
                    ${product.stock === 0 ? 'Out of Stock' : `${product.stock} items available`}
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                    ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
            </div>
        </div>`
    ).join('');
}

// Render Slideshow
function renderSlideshow() {
    const slideshow = document.getElementById('product-slideshow');
    slideshow.innerHTML = '';
    // Shuffle products for random slideshow
    const shuffledProducts = [...productsData].sort(() => 0.5 - Math.random()).slice(0, 5);
    // Create slides
    shuffledProducts.forEach((product, index) => {
        const slide = document.createElement('div');
        slide.className = `slideshow-slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url(${product.image})`;
        slide.innerHTML =
            `<div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-stock ${product.stock < 5 ? 'low' : ''}">
                        ${product.stock === 0 ? 'Out of Stock' : `${product.stock} items available`}
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                        ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                </div>
            </div>`;
        slideshow.appendChild(slide);
    });
}

// Start Slideshow Auto-Rotation
function startSlideshow() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slideshow-slide');
    if (slides.length === 0) return;
    slideshowInterval = setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 3000);
}

// Filter Products by Category
function filterProducts(category) {
    currentFilter = category;
    renderProducts(category);
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Search Products
function searchProducts(term) {
    renderProducts(currentFilter, term);
}

// Toggle Mobile Search
function toggleMobileSearch() {
    const modal = document.getElementById('mobile-search-modal');
    modal.classList.toggle('show');
    if (modal.classList.contains('show')) {
        document.getElementById('mobile-search').focus();
    }
}

// Add Product to Cart
function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product || product.stock === 0) return;
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity++;
        } else {
            showMessage('Maximum stock reached!');
            return;
        }
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            maxStock: product.stock
        });
    }
    saveCart();
    updateCartUI();
    showMessage(`${product.name} added to cart!`);
}

// Update Cart UI
function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const badge = document.getElementById('cart-badge');
    const mobileBadge = document.getElementById('mobile-cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    badge.textContent = totalItems;
    mobileBadge.textContent = totalItems;
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
    } else {
        cartItems.innerHTML = cart.map(item =>
            `<div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="decreaseQty(${item.id})">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14"/>
                            </svg>
                        </button>
                        <span class="cart-item-qty">${item.quantity}</span>
                        <button class="qty-btn" onclick="increaseQty(${item.id})">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 5v14M5 12h14"/>
                            </svg>
                        </button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>`
        ).join('');
    }
}

// Increase Item Quantity
function increaseQty(productId) {
    const item = cart.find(i => i.id === productId);
    if (item && item.quantity < item.maxStock) {
        item.quantity++;
        saveCart();
        updateCartUI();
    } else {
        showMessage('Maximum stock reached!');
    }
}

// Decrease Item Quantity
function decreaseQty(productId) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity--;
        if (item.quantity === 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// Remove Item from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showMessage('Item removed from cart');
}

// Toggle Cart Sidebar
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

// Checkout Process
function checkout() {
    if (cart.length === 0) {
        showMessage('Your cart is empty!');
        return;
    }
    // Update stock for all items in cart
    cart.forEach(cartItem => {
        const product = productsData.find(p => p.id === cartItem.id);
        if (product) {
            product.stock -= cartItem.quantity;
        }
    });
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showMessage(`Order placed successfully! Total: $${total.toFixed(2)}`);
    // Clear cart
    cart = [];
    saveCart();
    updateCartUI();
    renderProducts(currentFilter);
    toggleCart();
}

// Save Cart to Cookies
function saveCart() {
    const cartData = JSON.stringify(cart);
    document.cookie = `cart=${cartData}; path=/; max-age=604800`; // 7 days
}

// Load Cart from Cookies
function loadCart() {
    const cookies = document.cookie.split(';');
    const cartCookie = cookies.find(c => c.trim().startsWith('cart='));
    if (cartCookie) {
        try {
            cart = JSON.parse(cartCookie.split('=')[1]);
        } catch (e) {
            cart = [];
        }
    }
}

// Open Authentication Modal
function openAuthModal() {
    document.getElementById('auth-modal').classList.add('show');
    document.getElementById('overlay').classList.add('show');
}

// Close Authentication Modal
function closeAuthModal() {
    document.getElementById('auth-modal').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
}

// Login Function
function login(e) {
    e.preventDefault();
    isLoggedIn = true;
    showMessage('Login successful!');
    closeAuthModal();
    // Ask to access admin panel (for demo purposes)
    setTimeout(() => {
        if (confirm('Would you like to access the Admin Panel?')) {
            isAdmin = true;
            showAdminPanel();
        }
    }, 1000);
}

// Show Admin Panel
function showAdminPanel() {
    document.getElementById('admin-panel').style.display = 'block';
    const adminList = document.getElementById('admin-list');
    adminList.innerHTML = productsData.map(product =>
        `<div class="admin-product">
            <div>
                <strong>${product.name}</strong>
                <div style="color: var(--text-gray); font-size: 0.9rem;">
                    Current Stock: ${product.stock}
                </div>
            </div>
            <div>
                <input
                    type="number"
                    class="stock-input"
                    id="stock-${product.id}"
                    value="${product.stock}"
                    min="0"
                >
                <button class="update-stock-btn" onclick="updateStock(${product.id})">
                    Update
                </button>
            </div>
        </div>`
    ).join('');
    document.getElementById('admin-panel').scrollIntoView({ behavior: 'smooth' });
}

// Update Product Stock (Admin Function)
function updateStock(productId) {
    const input = document.getElementById(`stock-${productId}`);
    const newStock = parseInt(input.value);
    if (isNaN(newStock) || newStock < 0) {
        showMessage('Please enter a valid stock number');
        return;
    }
    const product = productsData.find(p => p.id === productId);
    if (product) {
        product.stock = newStock;
        renderProducts(currentFilter);
        showMessage(`Stock updated for ${product.name}`);
    }
}

// Close All Modals and Overlays
function closeAll() {
    document.getElementById('cart-sidebar').classList.remove('open');
    document.getElementById('auth-modal').classList.remove('show');
    document.getElementById('mobile-search-modal').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
}

// Show Success/Info Message
function showMessage(message) {
    const msgEl = document.getElementById('success-message');
    msgEl.textContent = message;
    msgEl.classList.add('show');
    setTimeout(() => {
        msgEl.classList.remove('show');
    }, 3000);
}
