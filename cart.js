// Cart-related functionality
import { getState, updateState, DETAIL_VIEW } from './utils.js';

export function addToCart(productId, quantity = 1, isFromDetailView = false) {
    const product = window.productsData.find(p => p.id === productId);
    if (!product || product.stock === 0) {
        showMessage('Product is out of stock.', 'danger');
        return;
    }
    if (quantity > product.stock) {
        showMessage(`Cannot add ${quantity}. Only ${product.stock} in stock.`, 'danger');
        return;
    }

    const appState = getState();
    const cartItemIndex = appState.cart.findIndex(item => item.product.id === productId);
    let finalQuantity = quantity;

    if (cartItemIndex > -1) {
        if (isFromDetailView) {
            finalQuantity = quantity;
        } else {
            finalQuantity = appState.cart[cartItemIndex].quantity + quantity;
        }

        if (finalQuantity > product.stock) {
            showMessage(`Cannot add more. Total exceeds stock (${product.stock}).`, 'danger');
            return;
        }
        appState.cart[cartItemIndex].quantity = finalQuantity;
    } else {
        appState.cart.push({ product: product, quantity: quantity });
    }

    showMessage(`${finalQuantity}x ${product.name} added to cart!`, 'success');
    renderCart();
    renderHomeProducts();
    if (isFromDetailView) {
        renderProductDetail(product);
    }
    updateCartCount();
    localStorage.setItem('cart', JSON.stringify(appState.cart));
}

export function addToCartWithQuantity(productId, isFromDetailView) {
    const inputEl = document.getElementById(`qty-input-${productId}`);
    const quantity = inputEl ? parseInt(inputEl.value, 10) : 1;

    if (quantity < 1) {
        showMessage('Please select a quantity of 1 or more.', 'danger');
        return;
    }

    if (!isFromDetailView && inputEl) {
        inputEl.value = '1';
    }

    addToCart(productId, quantity, isFromDetailView);
}

export function calculateSubtotal() {
    const appState = getState();
    return appState.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
}

export function renderCart() {
    const appState = getState();
    const cartItemsEl = document.getElementById('cart-items');
    const subtotalEl = document.getElementById('cart-subtotal');

    if (!cartItemsEl || !subtotalEl) return;

    if (appState.cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="empty-state" style="padding: 1rem;">Your cart is empty. Start shopping now!</p>';
        subtotalEl.textContent = '$0.00';
    } else {
        const itemsHtml = appState.cart.map(item => `
            <div class="cart-item">
                <img src="${item.product.image}" alt="${item.product.name}" onerror="this.onerror=null;this.src='https://placehold.co/50x50/F3F4F6/6B7280?text=Img';">
                <div class="item-details">
                    <span class="item-name">${item.product.name}</span>
                    <span class="item-price">KSh ${Math.round(item.product.price).toLocaleString()} / ${item.product.unit}</span>
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
                <span class="item-total">KSh ${Math.round(item.product.price * item.quantity).toLocaleString()}</span>
            </div>
        `).join('');

        cartItemsEl.innerHTML = itemsHtml;
        subtotalEl.textContent = `KSh ${Math.round(calculateSubtotal()).toLocaleString()}`;
    }
    updateCartCount();
}

export function updateQuantity(productId, delta) {
    const appState = getState();
    const cartItemIndex = appState.cart.findIndex(item => item.product.id === productId);
    const product = window.productsData.find(p => p.id === productId);

    if (cartItemIndex > -1) {
        const currentQty = appState.cart[cartItemIndex].quantity;
        const newQty = currentQty + delta;

        if (newQty < 1) {
            removeFromCart(productId);
            return;
        }

        if (newQty > product.stock) {
            showMessage(`Cannot increase quantity. Max stock is ${product.stock}.`, 'danger');
            return;
        }

        appState.cart[cartItemIndex].quantity = newQty;
        renderCart();
        const inputEl = document.getElementById(`qty-input-${productId}`);
        if(inputEl) inputEl.value = newQty;
    }
}

export function removeFromCart(productId) {
    const appState = getState();
    updateState({ cart: appState.cart.filter(item => item.product.id !== productId) });
    showMessage('Item removed from cart.', 'danger');
    renderCart();
    renderHomeProducts();
    localStorage.setItem('cart', JSON.stringify(appState.cart));
    if (appState.currentView === DETAIL_VIEW) {
        const product = window.productsData.find(p => p.id === productId);
        if (product) renderProductDetail(product);
    }
}

export function updateCartCount() {
    const appState = getState();
    const totalItems = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
    const elements = document.querySelectorAll('.cart-count');
    elements.forEach(el => {
        el.textContent = totalItems;
        el.style.display = totalItems > 0 ? 'inline-block' : 'none';
    });
}

export function openCartSidebar() {
    document.getElementById('cart-sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('show');
    renderCart();
}