// Global State
let productsData = [
    // Added 'rating', 'description', and 'unit' properties
    {id: 1, name: 'Basmati Rice', unit: '5 kg bag', category: 'Groceries', price: 12.99, stock: 45, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400', rating: 4.5, description: 'Long-grain, aromatic Basmati rice. Perfect for pilafs and Indian cuisine. Grown in the Himalayan foothills.'},
    {id: 2, name: 'Premium Pasta', unit: '500g box', category: 'Groceries', price: 3.49, stock: 120, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=400', rating: 4.8, description: 'Artisan-made bronze-die pasta. Excellent texture for holding sauce. Made from high-quality durum wheat.'},
    {id: 3, name: 'Extra Virgin Olive Oil', unit: '1 Litre bottle', category: 'Groceries', price: 15.99, stock: 35, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=400', rating: 4.2, description: 'First cold pressed Extra Virgin Olive Oil. Fruity and robust flavor, ideal for dipping, dressings, and finishing dishes.'},
    {id: 4, name: 'Canned Whole Tomatoes', unit: '400g can', category: 'Groceries', price: 1.99, stock: 200, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400', rating: 3.9, description: 'Peeled whole tomatoes packed in their own juice. The essential base for any Italian sauce or soup. Non-GMO.'},
    {id: 5, name: 'Raw Clover Honey', unit: '500g jar', category: 'Groceries', price: 8.99, stock: 28, image: 'https://images.unsplash.com/photo-1689777254817-d357d0223660?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmF3JTIwY2xvdmVyJTIwaG9uZXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500', rating: 5.0, description: 'Unpasteurized and minimally filtered raw honey. A natural sweetener with delicate floral notes.'},
    {id: 6, name: 'Hass Avocado', unit: 'Per unit', category: 'Produce', price: 2.50, stock: 0, image: 'https://images.unsplash.com/photo-1726177551991-270f9e79b65e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGFzcyUyMGF2b2NhZG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500', rating: 4.7, description: 'Creamy, large Hass avocados, ripened to perfection. Great for guacamole or slicing on toast.'},
    {id: 7, name: 'Artisan Sourdough Bread', unit: 'Loaf (750g)', category: 'Bakery', price: 4.50, stock: 60, image: 'https://images.unsplash.com/photo-1591458736923-c06a260e3412?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687', rating: 4.6, description: 'Handcrafted sourdough loaf with a crispy crust and chewy, open crumb. Baked fresh daily in small batches.'},
    {id: 8, name: 'Sencha Green Tea', unit: '100 Tea Bags', category: 'Beverages', price: 5.99, stock: 90, image: 'https://plus.unsplash.com/premium_photo-1754170080041-498f3aaa7234?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2VuY2hhJTIwZ3JlZW4lMjB0ZWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500', rating: 4.3, description: 'Fine Japanese Sencha green tea bags. Light, refreshing, and rich in antioxidants. Contains natural caffeine.'},
    {id: 9, name: 'Dark Roast Coffee Beans', unit: '250g bag', category: 'Beverages', price: 11.50, stock: 30, image: 'https://images.unsplash.com/photo-1649777888193-e47833d91521?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmslMjByb2FzdCUyMGNvZmZlZSUyMGJlYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500', rating: 4.9, description: 'Ethically sourced, high-altitude coffee beans. Deep, smoky flavor with notes of dark chocolate. Freshly roasted.'},
    {id: 10, name: 'Organic Free-Range Eggs', unit: 'Dozen', category: 'Dairy', price: 6.75, stock: 50, image: 'https://images.unsplash.com/photo-1652847504592-d0c4cfe0a6c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3JnYW5pYyUyMGZyZWUtcmFuZ2UlMjBlZ2dzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500', rating: 4.4, description: 'Pasture-raised organic eggs from ethically treated hens. Rich yolks and superior flavor.'},
];

let cart = [];
let currentFilter = 'All';
let currentView = 'shop-view';
let currentSearchQuery = '';
let userIsAdmin = false; 
let previousView = 'shop-view'; // Track for back button
const DETAIL_VIEW = 'product-detail-view';

// NEW: Slideshow variables
let currentSlide = 0;
const SLIDE_COUNT = 2; // Needs to match the number of slides rendered in initApp

// --- Utility Functions ---

/**
 * Simulates a network/data loading delay.
 * @param {number} ms - Milliseconds to delay.
 */
function simulateLoading(ms = 300) {
    const spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'flex';
    return new Promise(resolve => setTimeout(() => {
        spinner.style.display = 'none';
        resolve();
    }, ms));
}

// NEW: Slideshow functions
function nextSlide() {
    const track = document.getElementById('slideshow-track');
    if (!track) return;
    
    currentSlide = (currentSlide + 1) % SLIDE_COUNT;
    const offset = -currentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;
}

function startSlideshow() {
    // Clear any existing interval to prevent duplicates
    if (window.slideshowInterval) {
        clearInterval(window.slideshowInterval);
    }
    // Set the track width based on the number of slides
    const track = document.getElementById('slideshow-track');
    if (track) {
        track.style.width = `${SLIDE_COUNT * 100}%`;
    }

    // Start a new interval
    window.slideshowInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// NEW: Modal functions
function showModal() {
    const modal = document.getElementById('promotion-modal');
    if (modal) {
        modal.style.display = 'flex';
        // Delay adding the 'open' class to allow for the display transition
        setTimeout(() => modal.classList.add('open'), 10);
    }
}

function closeModal() {
    const modal = document.getElementById('promotion-modal');
    if (modal) {
        modal.classList.remove('open');
        // Wait for transition to complete before setting display to none
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// --- Helper Functions and Components ---

function renderQuantityInput(productId, initialQty = 1) {
    return `
        <div class="quantity-input">
            <button onclick="changeQuantityOnCard(${productId}, -1)">-</button>
            <input type="number" id="qty-input-${productId}" value="${initialQty}" min="1" onchange="validateQuantityInput(${productId}, this)" />
            <button onclick="changeQuantityOnCard(${productId}, 1)">+</button>
        </div>
    `;
}

function changeQuantityOnCard(productId, delta) {
    const inputEl = document.getElementById(`qty-input-${productId}`);
    if (!inputEl) return;
    let newQty = parseInt(inputEl.value, 10) + delta;
    
    if (newQty < 1) {
        newQty = 1;
    }

    inputEl.value = newQty;
    validateQuantityInput(productId, inputEl);
}

function validateQuantityInput(productId, inputEl) {
    const product = productsData.find(p => p.id === productId);
    let qty = parseInt(inputEl.value, 10);
    
    if (isNaN(qty) || qty < 1) {
        qty = 1;
    } else if (qty > product.stock && product.stock > 0) {
        qty = product.stock;
        showMessage(`Quantity limited to stock (${product.stock}).`, 'danger');
    } else if (product.stock === 0) {
        qty = 0;
    }

    inputEl.value = qty;
}

function renderRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHtml = '';
    
    const starIcon = (isFilled) => `
        <svg class="star ${isFilled ? 'full' : 'empty'}" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2l3.09 6.33L22 9.27l-5 4.87 1.18 6.88L12 17.25l-6.18 3.77 1.18-6.88-5-4.87 6.91-0.94L12 2z"/>
        </svg>`;

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHtml += starIcon(true); 
        } else if (i === fullStars && hasHalfStar) {
            starsHtml += starIcon(true); 
        } else {
            starsHtml += starIcon(false); 
        }
    }

    return `
        <div class="rating-stars" aria-label="Rated ${rating.toFixed(1)} out of 5">
            ${starsHtml}
            <span class="rating-value">${rating.toFixed(1)}</span>
        </div>`;
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const elements = document.querySelectorAll('.cart-count');
    elements.forEach(el => {
        el.textContent = totalItems;
        el.style.display = totalItems > 0 ? 'inline-block' : 'none';
    });
}

function showMessage(message, type = 'success') {
    const snackbar = document.getElementById('success-message');
    if (!snackbar) return;

    snackbar.textContent = message;
    snackbar.className = `message-snackbar show ${type}`;
    
    setTimeout(() => {
        snackbar.classList.remove('show');
        setTimeout(() => snackbar.className = 'message-snackbar', 400); 
    }, 3000);
}

function closeAll() {
    document.getElementById('cart-sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
}

function openCartSidebar() {
    document.getElementById('cart-sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('show');
    renderCart();
}

/**
 * Handles switching between the main views.
 * @param {string} viewId - The ID of the view to show.
 */
async function showView(viewId) {
    if (viewId !== currentView) {
        previousView = currentView; // Store the current view before switching
    }
    
    await simulateLoading(); // Show spinner for smooth transition/data fetching simulation

    closeAll();
    ['shop-view', 'search-view', 'admin-view', DETAIL_VIEW].forEach(id => {
        const view = document.getElementById(id);
        if (view) view.style.display = id === viewId ? 'block' : 'none';
    });
    currentView = viewId;
    
    // Update mobile nav active state
    document.querySelectorAll('.mobile-nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Only set active for primary nav items (Home/Shop)
    if (viewId === 'shop-view') {
        document.querySelector(`.mobile-nav-item[onclick*="showShopView"]`).classList.add('active');
    } else if (viewId === 'search-view') {
        document.querySelector(`.mobile-nav-item[onclick*="showSearchView"]`).classList.add('active');
    }
}

const showShopView = () => { 
    showView('shop-view'); 
    renderHomeProducts();
};

const showSearchView = () => { 
    showView('search-view'); 
    const searchInput = document.getElementById('desktop-search-input');
    if (searchInput) {
        searchInput.value = currentSearchQuery;
    }
    applyFilters();
};

const showAdminView = () => { 
    if (!userIsAdmin) return showMessage('Access Denied: Admin privileges required.', 'danger');
    showView('admin-view');
    renderAdminProducts();
    document.querySelectorAll('.mobile-nav-item').forEach(item => item.classList.remove('active'));
};

const goBackFromDetail = () => {
    // Navigate back to the view before the detail view
    showView(previousView); 
    if (previousView === 'search-view') {
        applyFilters(); // Re-apply filters if coming from search
    }
};

// --- Detail View Logic (NEW) ---

function showProductDetailView(productId) {
    previousView = currentView; // Ensure previous view is saved correctly
    const product = productsData.find(p => p.id === productId);
    if (!product) {
        showMessage('Product not found.', 'danger');
        return;
    }
    
    renderProductDetail(product);
    showView(DETAIL_VIEW);
}

function renderProductDetail(product) {
    const detailContent = document.getElementById('detail-content');
    if (!detailContent) return;

    // Check if the item is already in the cart to set initial quantity in the detail view input
    const cartItem = cart.find(item => item.product.id === product.id);
    const initialQty = cartItem ? cartItem.quantity : 1;
    
    const stockStatus = product.stock > 10 ? 'In Stock' : (product.stock > 0 ? 'Low Stock!' : 'Out of Stock');
    const stockColor = product.stock > 10 ? 'var(--success)' : (product.stock > 0 ? 'var(--star-yellow)' : 'var(--danger)');
    
    detailContent.innerHTML = `
        <div class="detail-image-container">
            <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='https://placehold.co/600x600/F3F4F6/6B7280?text=Image';">
        </div>
        <div class="detail-info">
            <span style="color: var(--primary-blue); font-weight: 600;">${product.category}</span>
            <h1>${product.name}</h1>
            
            <div class="detail-unit-stock">
                <span>Unit: ${product.unit}</span>
                <span style="margin-left: 1rem; color: ${stockColor};">Stock: ${stockStatus} (${product.stock} available)</span>
            </div>

            ${renderRatingStars(product.rating)}

            <div class="detail-description">
                <h3>Product Description</h3>
                <p>${product.description}</p>
            </div>

            <div class="detail-price-section">
                <span class="product-price">$${product.price.toFixed(2)}</span>
            </div>

            ${renderQuantityInput(product.id, initialQty)}

            <button 
                class="btn btn-primary add-to-cart-btn" 
                onclick="addToCartWithQuantity(${product.id}, true)"
                ${product.stock === 0 ? 'disabled' : ''}
            >
                ${product.stock === 0 ? 'Notify Me' : 'Add to Cart'}
            </button>
            <button class="btn btn-secondary" style="margin-top: 0.5rem;" onclick="goBackFromDetail()">Continue Shopping</button>
        </div>
    `;
    
    // Ensure the detail view quantity input is properly validated
    validateQuantityInput(product.id, document.getElementById(`qty-input-${product.id}`));
}

// --- Core Logic ---

/**
 * Renders products to a specific grid element.
 */
function renderProducts(targetGridId, products) {
    const productGrid = document.getElementById(targetGridId);
    if (!productGrid) return;

    const productHtml = products.map(product => {
        const stockBadgeClass = product.stock > 10 ? 'stock-badge' : 'stock-badge low';
        const stockText = product.stock > 0 ? `${product.stock} in stock` : '';

        return `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image-container" onclick="showProductDetailView(${product.id})">
                    <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='https://placehold.co/400x300/F3F4F6/6B7280?text=Image';">
                    ${product.stock === 0 ? '<span class="out-of-stock-badge">Out of Stock</span>' : `<span class="${stockBadgeClass}">${stockText}</span>`}
                </div>
                <div class="product-info" onclick="showProductDetailView(${product.id})" style="cursor: pointer;">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-unit-info">${product.unit}</p>
                    <div class="product-meta">
                        ${renderRatingStars(product.rating || 4.0)} 
                        <span class="product-price">$${product.price.toFixed(2)}</span>
                    </div>
                </div>
                <div class="card-actions">
                    ${renderQuantityInput(product.id)}
                    <button 
                        class="btn btn-primary add-to-cart-btn" 
                        onclick="event.stopPropagation(); addToCartWithQuantity(${product.id}, false)"
                        ${product.stock === 0 ? 'disabled' : ''}
                    >
                        ${product.stock === 0 ? 'Notify Me' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        `;
    }).join('');

    productGrid.innerHTML = productHtml.length > 0 ? productHtml : '<p class="empty-state">No products found matching your criteria.</p>';

    products.forEach(p => {
        const inputEl = document.getElementById(`qty-input-${p.id}`);
        // Reset quantity input to 1 after rendering, unless it's in the detail view
        if(inputEl && currentView !== DETAIL_VIEW) inputEl.value = '1'; 
    });
}

function renderHomeProducts() {
    const featuredProducts = [...productsData]
        .filter(p => p.stock > 0)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);
        
    renderProducts('featured-products-grid', featuredProducts);

    // Show all products on the home page as well
    renderProducts('shop-all-products-grid', productsData);
}

function applyFilters() {
    let filteredProducts = productsData;
    
    if (currentFilter !== 'All') {
        filteredProducts = filteredProducts.filter(p => p.category === currentFilter);
    }
    
    if (currentSearchQuery) {
        const query = currentSearchQuery.toLowerCase();
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
        );
    }
    
    renderProducts('search-products-grid', filteredProducts);
}

function addToCartWithQuantity(productId, isFromDetailView) {
    const inputEl = document.getElementById(`qty-input-${productId}`);
    const quantity = inputEl ? parseInt(inputEl.value, 10) : 1;

    if (quantity < 1) {
        showMessage('Please select a quantity of 1 or more.', 'danger');
        return;
    }
    
    // Reset input only if not from the detail view, as detail view might be for updating cart quantity
    if (!isFromDetailView && inputEl) {
        inputEl.value = '1'; 
    }

    addToCart(productId, quantity, isFromDetailView);
}

function addToCart(productId, quantity = 1, isFromDetailView = false) {
    const product = productsData.find(p => p.id === productId);
    if (!product || product.stock === 0) {
        showMessage('Product is out of stock.', 'danger');
        return;
    }
    if (quantity > product.stock) {
        showMessage(`Cannot add ${quantity}. Only ${product.stock} in stock.`, 'danger');
        return;
    }

    const cartItemIndex = cart.findIndex(item => item.product.id === productId);
    let finalQuantity = quantity;

    if (cartItemIndex > -1) {
        // If coming from detail view, assume the quantity input is the final desired quantity
        if (isFromDetailView) {
            finalQuantity = quantity;
        } else {
            // If coming from card, add to existing quantity
            finalQuantity = cart[cartItemIndex].quantity + quantity;
        }

        if (finalQuantity > product.stock) {
            showMessage(`Cannot add more. Total exceeds stock (${product.stock}).`, 'danger');
            return;
        }
        cart[cartItemIndex].quantity = finalQuantity;
    } else {
        cart.push({ product: product, quantity: quantity });
    }

    showMessage(`${finalQuantity}x ${product.name} added to cart!`, 'success');
    renderCart();
    renderHomeProducts(); 
    if (isFromDetailView) {
         renderProductDetail(product); // Re-render detail view to update quantity input value
    }
    updateCartCount();
}

// --- Cart Logic ---

function calculateSubtotal() {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
}

function renderCart() {
    const cartItemsEl = document.getElementById('cart-items');
    const subtotalEl = document.getElementById('cart-subtotal');

    if (!cartItemsEl || !subtotalEl) return;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="empty-state" style="padding: 1rem;">Your cart is empty. Start shopping now!</p>';
        subtotalEl.textContent = '$0.00';
    } else {
        const itemsHtml = cart.map(item => `
            <div class="cart-item">
                <img src="${item.product.image}" alt="${item.product.name}" onerror="this.onerror=null;this.src='https://placehold.co/50x50/F3F4F6/6B7280?text=Img';">
                <div class="item-details">
                    <span class="item-name">${item.product.name}</span>
                    <span class="item-price">$${item.product.price.toFixed(2)} / ${item.product.unit}</span>
                </div>
                <div class="item-controls">
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.product.id}, -1)">-</button>
                        <span class="item-quantity">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.product.id}, 1)">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.product.id})">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                </div>
                <span class="item-total">$${(item.product.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');

        cartItemsEl.innerHTML = itemsHtml;
        subtotalEl.textContent = `$${calculateSubtotal().toFixed(2)}`;
    }
    updateCartCount();
}

function updateQuantity(productId, delta) {
    const cartItemIndex = cart.findIndex(item => item.product.id === productId);
    const product = productsData.find(p => p.id === productId);

    if (cartItemIndex > -1) {
        const currentQty = cart[cartItemIndex].quantity;
        const newQty = currentQty + delta;
        
        if (newQty < 1) {
            removeFromCart(productId);
            return;
        }

        if (newQty > product.stock) {
            showMessage(`Cannot increase quantity. Max stock is ${product.stock}.`, 'danger');
            return;
        }

        cart[cartItemIndex].quantity = newQty;
        renderCart();
        // If in detail view, update the input there too
        const inputEl = document.getElementById(`qty-input-${productId}`);
        if(inputEl) inputEl.value = newQty; 
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    showMessage('Item removed from cart.', 'danger');
    renderCart();
    renderHomeProducts(); // To update card buttons/quantities
    // If in detail view, re-render it
    if (currentView === DETAIL_VIEW) {
         const product = productsData.find(p => p.id === productId);
         if (product) renderProductDetail(product);
    }
}


// --- Search/Filter Logic ---

function updateSearchQuery(inputElement) {
    currentSearchQuery = inputElement.value;
    applyFilters();
}

function applyCategoryFilter(category) {
    currentFilter = category;
    
    // Update active button state
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });

    applyFilters();
}


// --- Admin Logic ---

function toggleAdminAccess() {
    userIsAdmin = !userIsAdmin;
    updateProfileUI();
    showMessage(`Admin mode ${userIsAdmin ? 'ENABLED' : 'DISABLED'}.`, userIsAdmin ? 'success' : 'danger');
}

function updateProfileUI() {
    const authBtns = document.querySelectorAll('.auth-btn');
    authBtns.forEach(btn => {
        btn.textContent = userIsAdmin ? 'Admin' : 'Profile';
        btn.onclick = userIsAdmin ? showAdminView : openAuthModal;
    });
}

function openAuthModal() {
    // Simple prompt to enable admin for demo purposes
    const passcode = prompt("Enter 'admin' to toggle admin access, or just click OK to view profile.");
    if (passcode === 'admin') {
        toggleAdminAccess();
    } else {
        showMessage("Profile view: Logged in anonymously.", 'secondary');
    }
}

function renderAdminProducts() {
    const listEl = document.getElementById('admin-product-list');
    if (!listEl) return;

    listEl.innerHTML = productsData.map(p => `
        <div class="admin-product-item">
            <img src="${p.image}" alt="${p.name}" onerror="this.onerror=null;this.src='https://placehold.co/50x50?text=Img';">
            <div class="product-details">
                <strong>${p.name}</strong>
                <small>${p.category} | $${p.price.toFixed(2)} | Unit: ${p.unit}</small>
            </div>
            <div class="stock-control">
                <span>Stock: ${p.stock}</span>
                <button class="btn btn-primary" onclick="updateStock(${p.id}, 1)">+1</button>
                <button class="btn btn-danger" onclick="updateStock(${p.id}, -1)">-1</button>
            </div>
        </div>
    `).join('');
}

function updateStock(productId, delta) {
    const productIndex = productsData.findIndex(p => p.id === productId);
    if (productIndex > -1) {
        const currentStock = productsData[productIndex].stock;
        const newStock = currentStock + delta;
        
        if (newStock < 0) {
            showMessage('Stock cannot be negative.', 'danger');
            return;
        }

        productsData[productIndex].stock = newStock;
        showMessage(`Stock for ${productsData[productIndex].name} updated to ${newStock}.`, 'success');
        
        renderAdminProducts(); 
        renderHomeProducts(); // Update shop view if needed
        applyFilters(); // Update search view if needed
        if (currentView === DETAIL_VIEW) {
            renderProductDetail(productsData[productIndex]);
        }
    }
}

function handleProductFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('new-name').value;
    const category = document.getElementById('new-category').value;
    const price = parseFloat(document.getElementById('new-price').value);
    const stock = parseInt(document.getElementById('new-stock').value);
    const rating = parseFloat(document.getElementById('new-rating').value);
    const unit = document.getElementById('new-unit').value;
    const description = document.getElementById('new-description').value;
    const image = document.getElementById('new-image').value || 'https://placehold.co/400x300/F3F4F6/6B7280?text=New+Product';

    if (isNaN(price) || isNaN(stock) || isNaN(rating) || rating < 1 || rating > 5) {
        showMessage('Please enter valid numeric values for Price, Stock, and Rating (1.0-5.0).', 'danger');
        return;
    }

    const newProduct = {
        id: productsData.length + 1, // Simple ID generation
        name,
        category,
        price,
        stock,
        rating,
        unit,
        description,
        image,
    };

    productsData.push(newProduct);
    document.getElementById('add-product-form').reset();
    showMessage(`Product '${name}' added successfully!`, 'success');
    
    renderAdminProducts(); 
    renderHomeProducts(); 
    applyFilters(); 
}


// --- Initialization ---

function initApp() {
    console.log("App initializing...");

    // Simulate initial loading before rendering
    simulateLoading(500).then(() => {
        renderHomeProducts(); 
        renderCart();
        updateCartCount();
        updateProfileUI();
        
        const allFilter = document.querySelector('.filter-btn[data-category="All"]');
        if (allFilter) {
            allFilter.classList.add('active');
        }
        
        const slideshowTrack = document.getElementById('slideshow-track');
        if (slideshowTrack) {
            // Updated slide content with attractive background images
            slideshowTrack.innerHTML = `
                <div class="slide" style="background-image: url('https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlc2glMjBwcm9kdWNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500=80&w=1200&auto=format&fit=crop');">
                    <h1>Freshness Delivered.</h1>
                    <p>Curated selection, straight to your door.</p>
                </div>
                <div class="slide" style="background-image: url('https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1cGVybWFya2V0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500=80&w=1200&auto=format&fit=crop');">
                    <h1>Sustainable Shopping.</h1>
                    <p>High quality products, responsibly sourced.</p>
                </div>
            `;
            // Start the automatic slideshow after content is rendered
            startSlideshow(); 
        }

        // Show promotion modal after a short delay (1.5 seconds)
        setTimeout(showModal, 1500);

        // Set initial view state
        document.getElementById(DETAIL_VIEW).style.display = 'none';
        document.getElementById('admin-view').style.display = 'none';
        document.getElementById('search-view').style.display = 'none';
        document.getElementById('shop-view').style.display = 'block';
        
        document.querySelector(`.mobile-nav-item[onclick*="showShopView"]`).classList.add('active');
        console.log("App initialization complete.");
    });
}