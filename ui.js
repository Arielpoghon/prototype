// UI-related functionality
import { getState, updateState } from './utils.js';

export function simulateLoading(ms = 300) {
    const spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'flex';
    return new Promise(resolve => setTimeout(() => {
        spinner.style.display = 'none';
        resolve();
    }, ms));
}

export function handleCardKeydown(event, productId) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showProductDetailView(productId);
    }
}

export function showMessage(message, type = 'success') {
    const snackbar = document.getElementById('success-message');
    if (!snackbar) return;

    snackbar.textContent = message;
    snackbar.className = `message-snackbar show ${type}`;

    setTimeout(() => {
        snackbar.classList.remove('show');
        setTimeout(() => snackbar.className = 'message-snackbar', 400);
    }, 3000);
}

export function closeAll() {
    document.getElementById('cart-sidebar').classList.remove('open');
    document.getElementById('wishlist-sidebar').classList.remove('open');
    document.getElementById('comparison-sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
}

import { DETAIL_VIEW } from './utils.js';

export async function showView(viewId) {
    const appState = getState();
    if (viewId !== appState.currentView) {
        updateState({ previousView: appState.currentView });
    }

    await simulateLoading();

    closeAll();
    ['shop-view', 'search-view', 'admin-view', DETAIL_VIEW].forEach(id => {
        const view = document.getElementById(id);
        if (view) view.style.display = id === viewId ? 'block' : 'none';
    });
    updateState({ currentView: viewId });

    // Scroll to top when changing views
    window.scrollTo(0, 0);

    document.querySelectorAll('.mobile-nav-item').forEach(item => {
        item.classList.remove('active');
    });

    if (viewId === 'shop-view') {
        document.querySelector(`.mobile-nav-item[onclick*="showShopView"]`).classList.add('active');
    } else if (viewId === 'search-view') {
        document.querySelector(`.mobile-nav-item[onclick*="showSearchView"]`).classList.add('active');
    }
}

export const showShopView = () => {
    showView('shop-view');
    renderHomeProducts();
    renderProducts('shop-all-products-grid', window.productsData);
};

export const showSearchView = () => {
    const appState = getState();
    showView('search-view');
    const searchInput = document.getElementById('desktop-search-input');
    if (searchInput) {
        searchInput.value = appState.currentSearchQuery;
    }
    renderProducts('search-products-grid', window.productsData);
    applyFilters();
    renderRecentlyViewed();
};

export const showAdminView = () => {
    const appState = getState();
    if (!appState.userIsAdmin) {
        openAuthModal();
        return;
    }
    showView('admin-view');
    renderAdminProducts();
    renderAdminStats();
    document.querySelectorAll('.mobile-nav-item').forEach(item => item.classList.remove('active'));
};

export const goBackFromDetail = () => {
    const appState = getState();
    showView(appState.previousView);
    if (appState.previousView === 'search-view') {
        applyFilters();
    }
};

export function toggleWishlist(productId) {
    const appState = getState();
    const product = window.productsData.find(p => p.id === productId);
    if (!product) return;

    const isInWishlist = appState.wishlist.some(p => p.id === productId);
    let updatedWishlist;

    if (isInWishlist) {
        updatedWishlist = appState.wishlist.filter(p => p.id !== productId);
        showMessage('Removed from wishlist.', 'secondary');
    } else {
        updatedWishlist = [...appState.wishlist, product];
        showMessage('Added to wishlist!', 'success');
    }

    updateState({ wishlist: updatedWishlist });
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    updateWishlistCount();
    renderHomeProducts();
}

export function updateWishlistCount() {
    const appState = getState();
    const totalItems = appState.wishlist.length;
    const elements = document.querySelectorAll('.wishlist-count');
    elements.forEach(el => {
        el.textContent = totalItems;
        el.style.display = totalItems > 0 ? 'inline-block' : 'none';
    });
}

export function openWishlist() {
    renderWishlist();
    document.getElementById('wishlist-sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('show');
}

export function renderWishlist() {
    const appState = getState();
    const wishlistItemsEl = document.getElementById('wishlist-items');
    if (!wishlistItemsEl) return;

    if (appState.wishlist.length === 0) {
        wishlistItemsEl.innerHTML = '<p class="empty-state" style="padding: 1rem;">Your wishlist is empty. Start adding products!</p>';
    } else {
        const itemsHtml = appState.wishlist.map(product => `
            <div class="wishlist-item">
                <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='https://placehold.co/80x80/F3F4F6/6B7280?text=Img';">
                <div class="item-details">
                    <span class="item-name">${product.name}</span>
                    <span class="item-price">$${product.price.toFixed(2)}</span>
                </div>
                <div class="item-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id}, 1); closeAll();">Add to Cart</button>
                    <button class="btn btn-secondary" onclick="toggleWishlist(${product.id})">Remove</button>
                </div>
            </div>
        `).join('');

        wishlistItemsEl.innerHTML = itemsHtml;
    }
}

export function addToComparison(productId) {
    const appState = getState();
    const product = window.productsData.find(p => p.id === productId);
    if (!product) return;

    if (appState.comparison.length >= 4) {
        showMessage('You can compare up to 4 products at once.', 'danger');
        return;
    }

    if (appState.comparison.some(p => p.id === productId)) {
        showMessage('Product already in comparison.', 'secondary');
        return;
    }

    const updatedComparison = [...appState.comparison, product];
    updateState({ comparison: updatedComparison });
    showMessage('Added to comparison!', 'success');
    renderComparison();
}

export function removeFromComparison(productId) {
    const appState = getState();
    const updatedComparison = appState.comparison.filter(p => p.id !== productId);
    updateState({ comparison: updatedComparison });
    renderComparison();
}

export function openComparison() {
    renderComparison();
    document.getElementById('comparison-sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('show');
}

export function renderComparison() {
    const appState = getState();
    const comparisonContentEl = document.getElementById('comparison-content');
    if (!comparisonContentEl) return;

    if (appState.comparison.length === 0) {
        comparisonContentEl.innerHTML = '<p class="empty-state" style="padding: 1rem;">No products to compare. Add some products first!</p>';
        return;
    }

    const headers = ['Product', 'Price', 'Rating', 'Stock', 'Category', 'Unit'];
    const rows = appState.comparison.map(product => [
        `<div class="comparison-product">
            <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='https://placehold.co/60x60/F3F4F6/6B7280?text=Img';">
            <span>${product.name}</span>
            <button class="remove-compare-btn" onclick="removeFromComparison(${product.id})">×</button>
        </div>`,
        `$${product.price.toFixed(2)}`,
        renderRatingStars(product.rating),
        product.stock > 0 ? `${product.stock} in stock` : 'Out of stock',
        product.category,
        product.unit
    ]);

    const tableHtml = `
        <div class="comparison-table">
            <div class="comparison-header">
                ${headers.map(header => `<div class="comparison-cell header">${header}</div>`).join('')}
            </div>
            ${rows.map((row, index) => `
                <div class="comparison-row">
                    ${row.map(cell => `<div class="comparison-cell">${cell}</div>`).join('')}
                </div>
            `).join('')}
        </div>
    `;

    comparisonContentEl.innerHTML = tableHtml;
}

export function renderRecentlyViewed() {
    const appState = getState();
    const recentlyViewedSection = document.getElementById('recently-viewed-section');
    const recentlyViewedGrid = document.getElementById('recently-viewed-grid');
    if (!recentlyViewedSection || !recentlyViewedGrid) return;

    if (appState.recentlyViewed.length === 0) {
        recentlyViewedSection.style.display = 'none';
        return;
    }

    recentlyViewedSection.style.display = 'block';
    const itemsHtml = appState.recentlyViewed.slice(0, 5).map(product => `
        <div class="recent-product-card" onclick="showProductDetailView(${product.id})">
            <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/80x80/F3F4F6/6B7280?text=Img';">
            <div class="recent-product-info">
                <h4>${product.name}</h4>
                <span class="recent-price">$${product.price.toFixed(2)}</span>
            </div>
        </div>
    `).join('');

    recentlyViewedGrid.innerHTML = itemsHtml;
}

export function showAboutSection() {
    // Hide all views
    const views = document.querySelectorAll('.view-section');
    views.forEach(view => view.style.display = 'none');

    // Show about section
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
        aboutSection.style.display = 'block';
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

export function showContactSection() {
    // Hide all views
    const views = document.querySelectorAll('.view-section');
    views.forEach(view => view.style.display = 'none');

    // Show contact section
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
        contactSection.style.display = 'block';
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

export function handleContactForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const contactData = {
        firstName: formData.get('contact-first-name'),
        lastName: formData.get('contact-last-name'),
        email: formData.get('contact-email'),
        subject: formData.get('contact-subject'),
        message: formData.get('contact-message'),
        timestamp: new Date().toISOString()
    };

    // Simulate form submission
    showMessage('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');

    // Clear form
    event.target.reset();

    // In a real application, we will send this data to a server
    console.log('Contact form submitted:', contactData);
}