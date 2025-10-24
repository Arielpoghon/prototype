// Product-related functionality
import { getState, updateState, DETAIL_VIEW } from './utils.js';

export function renderProducts(targetGridId, products) {
    const productGrid = document.getElementById(targetGridId);
    if (!productGrid) return;

    const appState = getState();
    const viewMode = appState.currentViewMode || 'grid';
    const isListView = viewMode === 'list';

    const productHtml = products.length > 0 ? products.map(product => {
        const stockBadgeClass = product.stock > 10 ? 'stock-badge' : 'stock-badge low';
        const stockText = product.stock > 0 ? `${product.stock} in stock` : '';
        const isInWishlist = appState.wishlist.some(p => p.id === product.id);

        if (isListView) {
            return `
                <div class="product-card list-view" data-id="${product.id}" role="gridcell" tabindex="0" aria-label="${product.name}, ${product.unit}, KSh ${Math.round(product.price * 130).toLocaleString()}, ${product.stock > 0 ? stockText : 'Out of stock'}" onkeydown="handleCardKeydown(event, ${product.id})">
                    <div class="list-image-container" onclick="showProductDetailView(${product.id})" role="button" tabindex="-1" aria-label="View details for ${product.name}">
                        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/120x120/F3F4F6/6B7280?text=Image';">
                        ${product.stock === 0 ? '<span class="out-of-stock-badge">Out of Stock</span>' : `<span class="${stockBadgeClass}">${stockText}</span>`}
                    </div>
                    <div class="list-content">
                        <div class="list-info" onclick="showProductDetailView(${product.id})" style="cursor: pointer;" role="button" tabindex="-1" aria-label="View details for ${product.name}">
                            <h3 class="product-name">${product.name}</h3>
                            <p class="product-unit-info">${product.unit} • ${product.category}</p>
                            <div class="product-meta">
                                ${renderRatingStars(product.rating || 4.0)}
                                <span class="product-price">KSh ${product.price.toLocaleString()}</span>
                            </div>
                            <p class="product-description">${product.description.substring(0, 120)}${product.description.length > 120 ? '...' : ''}</p>
                        </div>
                        <div class="list-actions">
                            <button
                                class="btn btn-secondary wishlist-btn ${isInWishlist ? 'active' : ''}"
                                onclick="event.stopPropagation(); toggleWishlist(${product.id})"
                                aria-label="${isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}"
                            >
                                <svg viewBox="0 0 24 24" fill="${isInWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                            </button>
                            <button
                                class="btn btn-primary add-to-cart-btn"
                                onclick="event.stopPropagation(); addToCartWithQuantity(${product.id}, false)"
                                ${product.stock === 0 ? 'disabled' : ''}
                                aria-label="${product.stock === 0 ? 'Notify when in stock' : 'Add to cart'}"
                            >
                                ${product.stock === 0 ? 'Notify Me' : 'Add to Cart'}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="product-card" data-id="${product.id}" role="gridcell" tabindex="0" aria-label="${product.name}, ${product.unit}, KSh ${Math.round(product.price * 130).toLocaleString()}, ${product.stock > 0 ? stockText : 'Out of stock'}" onkeydown="handleCardKeydown(event, ${product.id})">
                    <div class="product-image-container" onclick="showProductDetailView(${product.id})" role="button" tabindex="-1" aria-label="View details for ${product.name}">
                        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/400x300/F3F4F6/6B7280?text=Image';">
                        ${product.stock === 0 ? '<span class="out-of-stock-badge">Out of Stock</span>' : `<span class="${stockBadgeClass}">${stockText}</span>`}
                    </div>
                    <div class="product-info" onclick="showProductDetailView(${product.id})" style="cursor: pointer;" role="button" tabindex="-1" aria-label="View details for ${product.name}">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-unit-info">${product.unit}</p>
                        <div class="product-meta">
                            ${renderRatingStars(product.rating || 4.0)}
                            <span class="product-price">KSh ${product.price.toLocaleString()}</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <button
                            class="btn btn-primary add-to-cart-btn"
                            onclick="event.stopPropagation(); addToCartWithQuantity(${product.id}, false)"
                            ${product.stock === 0 ? 'disabled' : ''}
                            aria-label="${product.stock === 0 ? 'Notify when in stock' : 'Add to cart'}"
                        >
                            ${product.stock === 0 ? 'Notify Me' : 'Add to Cart'}
                        </button>
                    </div>
                </div>
            `;
        }
    }).join('') : '<div class="skeleton-grid" aria-label="Loading products">' +
        Array(6).fill().map(() => `
            <div class="skeleton-card">
                <div class="skeleton-image"></div>
                <div class="skeleton-info">
                    <div class="skeleton-title"></div>
                    <div class="skeleton-meta"></div>
                </div>
                <div class="skeleton-actions">
                    <div class="skeleton-button"></div>
                </div>
            </div>
        `).join('') + '</div>';

    productGrid.innerHTML = productHtml.length > 0 ? productHtml : '<p class="empty-state">No products found matching your criteria.</p>';

    const resultsCountEl = document.getElementById('results-count');
    if (resultsCountEl) {
        resultsCountEl.textContent = `${products.length} product${products.length !== 1 ? 's' : ''}`;
    }

    products.forEach(p => {
        const inputEl = document.getElementById(`qty-input-${p.id}`);
        if(inputEl && appState.currentView !== DETAIL_VIEW) inputEl.value = '1';
    });
}

export function renderHomeProducts() {
    const appState = getState();
    const featuredProducts = [...window.productsData]
        .filter(p => p.stock > 0)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

    renderProducts('featured-products-grid', featuredProducts);
    renderProducts('shop-all-products-grid', window.productsData);
}

export function renderRatingStars(rating) {
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

export function renderQuantityInput(productId, initialQty = 1) {
    return `
        <div class="quantity-input">
            <button onclick="changeQuantityOnCard(${productId}, -1)">-</button>
            <input type="number" id="qty-input-${productId}" value="${initialQty}" min="1" onchange="validateQuantityInput(${productId}, this)" />
            <button onclick="changeQuantityOnCard(${productId}, 1)">+</button>
        </div>
    `;
}

export function changeQuantityOnCard(productId, delta) {
    const inputEl = document.getElementById(`qty-input-${productId}`);
    if (!inputEl) return;
    let newQty = parseInt(inputEl.value, 10) + delta;

    if (newQty < 1) {
        newQty = 1;
    }

    inputEl.value = newQty;
    validateQuantityInput(productId, inputEl);
}

export function validateQuantityInput(productId, inputEl) {
    const product = window.productsData.find(p => p.id === productId);
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

export function showProductDetailView(productId) {
    const appState = getState();
    updateState({ previousView: appState.currentView });
    const product = window.productsData.find(p => p.id === productId);
    if (!product) {
        showMessage('Product not found.', 'danger');
        return;
    }

    addToRecentlyViewed(productId);
    renderProductDetail(product);
    showView(DETAIL_VIEW);

    if (appState.currentView === 'search-view') {
        renderRecentlyViewed();
    }
}

export function renderProductDetail(product) {
    const appState = getState();
    const detailContent = document.getElementById('detail-content');
    if (!detailContent) return;

    const cartItem = appState.cart.find(item => item.product.id === product.id);
    const initialQty = cartItem ? cartItem.quantity : 1;

    setTimeout(() => {
        const detailContainer = document.querySelector('.detail-content');
        if (detailContainer) {
            detailContainer.addEventListener('mousemove', (e) => {
                const rect = detailContainer.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;

                detailContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            detailContainer.addEventListener('mouseleave', () => {
                detailContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            });
        }
    }, 100);

    const stockStatus = product.stock > 10 ? 'In Stock' : (product.stock > 0 ? 'Low Stock!' : 'Out of Stock');
    const stockColor = product.stock > 10 ? 'var(--success)' : (product.stock > 0 ? 'var(--star-yellow)' : 'var(--danger)');

    const galleryHtml = product.gallery ? product.gallery.map((img, index) =>
        `<img src="${img}" alt="${product.name} view ${index + 1}" onclick="changeGalleryImage(${product.id}, ${index})" class="gallery-thumb" onerror="this.onerror=null;this.src='https://placehold.co/100x100/F3F4F6/6B7280?text=Img';">`
    ).join('') : '';

    const reviewsHtml = product.reviews ? product.reviews.map(review =>
        `<div class="review-item">
            <div class="review-header">
                <strong>${review.user}</strong>
                <div class="review-stars">${renderRatingStars(review.rating)}</div>
            </div>
            <p>${review.comment}</p>
        </div>`
    ).join('') : '<p>No reviews yet.</p>';

    detailContent.innerHTML = `
        <div class="detail-image-container">
            <img id="main-detail-image-${product.id}" src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='https://placehold.co/600x600/F3F4F6/6B7280?text=Image';">
            <div class="gallery-thumbs">${galleryHtml}</div>
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

            <div class="detail-reviews">
                <h3>Customer Reviews</h3>
                <div class="reviews-list">${reviewsHtml}</div>
            </div>

            <div class="detail-price-section">
                <span class="product-price">KSh ${product.price.toLocaleString()}</span>
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

    validateQuantityInput(product.id, document.getElementById(`qty-input-${product.id}`));
}

export function changeGalleryImage(productId, index) {
    const product = window.productsData.find(p => p.id === productId);
    if (product && product.gallery && product.gallery[index]) {
        const mainImage = document.getElementById(`main-detail-image-${productId}`);
        if (mainImage) {
            mainImage.src = product.gallery[index];
        }
    }
}

export function addToRecentlyViewed(productId) {
    const appState = getState();
    const product = window.productsData.find(p => p.id === productId);
    if (!product) return;

    const filtered = appState.recentlyViewed.filter(p => p.id !== productId);
    filtered.unshift(product);
    const updated = filtered.slice(0, 10);
    updateState({ recentlyViewed: updated });
    localStorage.setItem('recentlyViewed', JSON.stringify(updated));
}
