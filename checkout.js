// Checkout functionality
import { getState, updateState, safeLocalStorageGet, safeLocalStorageSet } from './utils.js';
import { calculateSubtotal } from './cart.js';
import { showMessage } from './ui.js';
import { sanitizeInput } from './admin.js';
import { renderCart, updateCartCount } from './cart.js';
import { renderHomeProducts } from './product.js';

export function initiateCheckout() {
    const appState = getState();
    if (appState.cart.length === 0) {
        showMessage('Your cart is empty. Add some items first!', 'danger');
        return;
    }

    renderCheckoutForm();
    document.getElementById('checkout-modal').style.display = 'flex';
    setTimeout(() => document.getElementById('checkout-modal').classList.add('open'), 10);

    // Trap focus in modal
    const modal = document.getElementById('checkout-modal');
    
    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCheckoutModal();
            
        }
    });
}

export function closeCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    modal.classList.remove('open');
    setTimeout(() => modal.style.display = 'none', 300);
}

export function renderCheckoutForm() {
    const subtotal = calculateSubtotal();
    const tax = subtotal * 0.16; // 16% VAT in Kenya
    const shipping = subtotal > 5000 ? 0 : 500; // Free shipping over KSh 5000
    const total = subtotal + tax + shipping;

    const checkoutModal = document.getElementById('checkout-modal');
    if (!checkoutModal) {
        // Create modal if it doesn't exist
        const modalHtml = `
            <div id="checkout-modal" class="modal-overlay" style="display: none;">
                <div class="modal-content checkout-modal-content">
                    <button class="modal-close-btn" onclick="closeCheckoutModal()" aria-label="Close checkout">
                        &times;
                    </button>
                    <div class="modal-header">
                        <h2>Complete Your Order</h2>
                        <p style="color: var(--text-gray); font-size: 0.9rem; margin: 0.5rem 0 0 0;">Secure checkout powered by Unique</p>
                    </div>
                    <form id="checkout-form" onsubmit="handleCheckoutSubmit(event)">
                        <div class="checkout-layout">
                            <div class="checkout-form-container">
                                <div class="checkout-form-section">
                                    <h3>📍 Shipping Information</h3>
                                    <div class="form-grid">
                                        <div class="input-group">
                                            <label for="first-name">First Name *</label>
                                            <input type="text" id="first-name" required placeholder="John">
                                        </div>
                                        <div class="input-group">
                                            <label for="last-name">Last Name *</label>
                                            <input type="text" id="last-name" required placeholder="Doe">
                                        </div>
                                        <div class="input-group" style="grid-column: 1 / -1;">
                                            <label for="email">Email Address *</label>
                                            <input type="email" id="email" required placeholder="john.doe@example.com">
                                        </div>
                                        <div class="input-group" style="grid-column: 1 / -1;">
                                            <label for="address">Street Address *</label>
                                            <input type="text" id="address" required placeholder="123 Main Street">
                                        </div>
                                        <div class="input-group">
                                            <label for="city">City *</label>
                                            <input type="text" id="city" required placeholder="New York">
                                        </div>
                                        <div class="input-group">
                                            <label for="zip">ZIP Code *</label>
                                            <input type="text" id="zip" required pattern="[0-9]{5}" placeholder="10001">
                                        </div>
                                    </div>
                                </div>

                                <div class="checkout-form-section">
                                    <h3>💳 Payment Information</h3>
                                    <div class="form-grid">
                                        <div class="input-group" style="grid-column: 1 / -1;">
                                            <label for="card-number">Card Number *</label>
                                            <input type="text" id="card-number" required pattern="[0-9]{16}" placeholder="1234 5678 9012 3456" maxlength="19" oninput="formatCardNumber(this)">
                                        </div>
                                        <div class="input-group">
                                            <label for="expiry">Expiry Date *</label>
                                            <input type="text" id="expiry" required pattern="(0[1-9]|1[0-2])\/[0-9]{2}" placeholder="MM/YY" maxlength="5" oninput="formatExpiry(this)">
                                        </div>
                                        <div class="input-group">
                                            <label for="cvv">CVV *</label>
                                            <input type="text" id="cvv" required pattern="[0-9]{3,4}" placeholder="123" maxlength="4">
                                        </div>
                                    </div>
                                    <div style="margin-top: 1rem; padding: 1rem; background: var(--bg-light); border-radius: 0.5rem; border: 1px solid var(--glass-border);">
                                        <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-gray);">
                                            <span>🔒</span>
                                            <span>Your payment information is secure and encrypted</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="checkout-summary-sidebar">
                                <div class="checkout-summary">
                                    <h3>🛒 Order Summary</h3>
                                    <div class="summary-items">
                                        ${getState().cart.map(item => `
                                            <div class="summary-item">
                                                <div style="display: flex; align-items: center; gap: 0.75rem;">
                                                    <img src="${item.product.image}" alt="${item.product.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 0.25rem;">
                                                    <div>
                                                        <div style="font-weight: 600; font-size: 0.9rem;">${item.product.name}</div>
                                                        <div style="color: var(--text-gray); font-size: 0.8rem;">Qty: ${item.quantity} × KSh ${Math.round(item.product.price).toLocaleString()}</div>
                                                    </div>
                                                </div>
                                                <span style="font-weight: 600;">KSh ${Math.round(item.product.price * item.quantity).toLocaleString()}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                    <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 1rem 0;">
                                    <div class="summary-item">
                                        <span>Subtotal:</span>
                                        <span>KSh ${Math.round(subtotal).toLocaleString()}</span>
                                    </div>
                                    <div class="summary-item">
                                        <span>VAT (16%):</span>
                                        <span>KSh ${Math.round(tax).toLocaleString()}</span>
                                    </div>
                                    <div class="summary-item">
                                        <span>Shipping:</span>
                                        <span>${shipping === 0 ? 'FREE' : 'KSh ' + Math.round(shipping).toLocaleString()}</span>
                                    </div>
                                    <div class="summary-item total">
                                        <span>Total:</span>
                                        <span>KSh ${Math.round(total).toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 2rem; font-size: 1.1rem; padding: 1rem;">
                            💳 Complete Order - KSh ${Math.round(total).toLocaleString()}
                        </button>
                    </form>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    } else {
        // Update existing modal
        const summary = checkoutModal.querySelector('.checkout-summary');
        if (summary) {
            const summaryItems = summary.querySelector('.summary-items');
            if (summaryItems) {
                summaryItems.innerHTML = getState().cart.map(item => `
                    <div class="summary-item">
                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                            <img src="${item.product.image}" alt="${item.product.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 0.25rem;">
                            <div>
                                <div style="font-weight: 600; font-size: 0.9rem;">${item.product.name}</div>
                                <div style="color: var(--text-gray); font-size: 0.8rem;">Qty: ${item.quantity} × KSh ${Math.round(item.product.price).toLocaleString()}</div>
                            </div>
                        </div>
                        <span style="font-weight: 600;">KSh ${Math.round(item.product.price * item.quantity).toLocaleString()}</span>
                    </div>
                `).join('');
            }

            const totalElement = summary.querySelector('.summary-item.total span:last-child');
            if (totalElement) {
                totalElement.textContent = `KSh ${Math.round(total).toLocaleString()}`;
            }

            const submitBtn = checkoutModal.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.textContent = `💳 Complete Order - KSh ${Math.round(total).toLocaleString()}`;
            }
        }
    }
}

// Utility functions for form formatting
function formatCardNumber(input) {
    let value = input.value.replace(/\s/g, '');
    value = value.replace(/\D/g, '');
    value = value.substring(0, 16);
    // Add spaces every 4 digits
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    input.value = value;
}

function formatExpiry(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 4);
        value = value.replace(/(\d{2})(\d{1,2})/, '$1/$2');
    }
    input.value = value;
}

// Make functions globally available
window.formatCardNumber = formatCardNumber;
window.formatExpiry = formatExpiry;

export function handleCheckoutSubmit(event) {
    event.preventDefault();

    // Basic validation
    const formData = new FormData(event.target);
    const cardNumber = formData.get('card-number').replace(/\s/g, '');

    // Additional validation
    if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
        showMessage('Please enter a valid 16-digit card number.', 'danger');
        return;
    }

    const expiry = formData.get('expiry');
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
        showMessage('Please enter a valid expiry date (MM/YY).', 'danger');
        return;
    }

    // Check if expiry date is not in the past
    const [month, year] = expiry.split('/');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    const expMonth = parseInt(month);
    const expYear = parseInt(year);

    if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
        showMessage('Card expiry date cannot be in the past.', 'danger');
        return;
    }

    const cvv = formData.get('cvv');
    if (cvv.length < 3 || cvv.length > 4 || !/^\d+$/.test(cvv)) {
        showMessage('Please enter a valid CVV (3-4 digits).', 'danger');
        return;
    }

    const orderData = {
        orderId: 'ORD-' + Date.now(),
        customer: {
            firstName: sanitizeInput(formData.get('first-name')),
            lastName: sanitizeInput(formData.get('last-name')),
            email: sanitizeInput(formData.get('email')),
            address: sanitizeInput(formData.get('address')),
            city: sanitizeInput(formData.get('city')),
            zip: sanitizeInput(formData.get('zip'))
        },
        payment: {
            cardNumber: '**** **** **** ' + cardNumber.slice(-4), // Mask card number
            expiry: sanitizeInput(formData.get('expiry')),
            cvv: '***' // Never store CVV
        },
        items: getState().cart.map(item => ({
            id: item.product.id,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
            unit: item.product.unit,
            image: item.product.image
        })),
        pricing: {
            subtotal: calculateSubtotal(),
            tax: calculateSubtotal() * 0.16,
            shipping: calculateSubtotal() > 5000 ? 0 : 500,
            total: calculateSubtotal() + (calculateSubtotal() * 0.16) + (calculateSubtotal() > 5000 ? 0 : 500)
        },
        orderDate: new Date().toISOString(),
        status: 'confirmed',
        estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() // 3 days from now
    };

    // Show processing message
    showMessage('🔄 Processing your order...', 'secondary');

    // Disable form during processing
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span style="display: flex; align-items: center; gap: 0.5rem;">⏳ Processing...</span>';

    // Simulate payment processing with progress updates
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 25;
        if (progress <= 100) {
            submitBtn.innerHTML = `<span style="display: flex; align-items: center; gap: 0.5rem;">⏳ Processing... ${progress}%</span>`;
        }
    }, 750);

    setTimeout(() => {
        clearInterval(progressInterval);

        // Save order to localStorage
        const orders = safeLocalStorageGet('orderHistory', []);
        orders.push(orderData);
        safeLocalStorageSet('orderHistory', orders);

        // Clear cart
        updateState({ cart: [] });
        safeLocalStorageSet('cart', []);

        // Close modal and show success
        closeCheckoutModal();
        showMessage(`✅ Order ${orderData.orderId} placed successfully! Check your email for confirmation.`, 'success');

        // Update UI
        renderCart();
        updateCartCount();
        renderHomeProducts();

        // Re-enable form
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;

        // Clear form
        event.target.reset();

        // Show order confirmation modal
        showOrderConfirmation(orderData);
    }, 4000); // 4 seconds for more realistic processing
}

function showOrderConfirmation(orderData) {
    const confirmationHtml = `
        <div id="order-confirmation-modal" class="modal-overlay" style="display: flex;">
            <div class="modal-content" style="max-width: 500px;">
                <button class="modal-close-btn" onclick="closeOrderConfirmation()" aria-label="Close confirmation">
                    &times;
                </button>
                <div class="modal-header" style="text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
                    <h2>Order Confirmed!</h2>
                    <p style="color: var(--text-gray);">Order #${orderData.orderId}</p>
                </div>
                <div style="padding: 1.5rem;">
                    <div style="background: var(--bg-light); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                        <h4 style="margin-bottom: 0.5rem;">📦 Order Details</h4>
                        <p style="font-size: 0.9rem; color: var(--text-gray); margin: 0.25rem 0;">
                            <strong>Total:</strong> KSh ${Math.round(orderData.pricing.total).toLocaleString()}
                        </p>
                        <p style="font-size: 0.9rem; color: var(--text-gray); margin: 0.25rem 0;">
                            <strong>Items:</strong> ${orderData.items.length} product${orderData.items.length !== 1 ? 's' : ''}
                        </p>
                        <p style="font-size: 0.9rem; color: var(--text-gray); margin: 0.25rem 0;">
                            <strong>Estimated Delivery:</strong> ${new Date(orderData.estimatedDelivery).toLocaleDateString()}
                        </p>
                    </div>
                    <div style="background: var(--bg-light); padding: 1rem; border-radius: 0.5rem;">
                        <h4 style="margin-bottom: 0.5rem;">📧 What's Next?</h4>
                        <ul style="font-size: 0.9rem; color: var(--text-gray); padding-left: 1rem;">
                            <li>Order confirmation sent to ${orderData.customer.email}</li>
                            <li>Shipping notification will be sent when order ships</li>
                            <li>Track your order in your account dashboard</li>
                        </ul>
                    </div>
                </div>
                <div style="padding: 0 1.5rem 1.5rem 1.5rem;">
                    <button class="btn btn-primary" style="width: 100%;" onclick="closeOrderConfirmation()">Continue Shopping</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', confirmationHtml);
}

function closeOrderConfirmation() {
    const modal = document.getElementById('order-confirmation-modal');
    if (modal) {
        modal.remove();
    }
}

// Make function globally available
window.closeOrderConfirmation = closeOrderConfirmation;