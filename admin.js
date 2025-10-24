// Admin functionality
import { getState, updateState, DETAIL_VIEW } from './utils.js';

export function toggleAdminAccess() {
    const appState = getState();
    updateState({ userIsAdmin: !appState.userIsAdmin });
    updateProfileUI();
    showMessage(`Admin mode ${appState.userIsAdmin ? 'ENABLED' : 'DISABLED'}.`, appState.userIsAdmin ? 'success' : 'danger');
}

export function updateProfileUI() {
    const appState = getState();
    const authBtns = document.querySelectorAll('.auth-btn');
    authBtns.forEach(btn => {
        if (appState.userIsAdmin) {
            btn.textContent = 'Admin';
            btn.onclick = showAdminView;
        } else {
            btn.textContent = 'Login';
            btn.onclick = openAuthModal;
        }
    });
}

export function openAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('open'), 10);
    }
}

export function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
        modal.classList.remove('open');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

export function handleAuthSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
        updateState({ userIsAdmin: true, isLoggedIn: true });
        closeAuthModal();
        showAdminView();
        showMessage('Welcome back, Administrator!', 'success');
        updateProfileUI();
        renderAdminStats();
    } else {
        showMessage('Invalid credentials. Try admin/admin123', 'danger');
    }
}

export function logoutAdmin() {
    updateState({ userIsAdmin: false, isLoggedIn: false });
    showShopView();
    showMessage('Logged out successfully.', 'secondary');
    updateProfileUI();
}

export function renderAdminStats() {
    const totalProducts = window.productsData.length;
    const categories = [...new Set(window.productsData.map(p => p.category))].length;
    const totalValue = window.productsData.reduce((sum, p) => sum + (p.price * p.stock), 0);
    const lowStockCount = window.productsData.filter(p => p.stock <= 5).length;

    document.getElementById('total-products').textContent = totalProducts;
    document.getElementById('total-categories').textContent = categories;
    document.getElementById('total-value').textContent = `$${totalValue.toFixed(2)}`;
    document.getElementById('low-stock-count').textContent = lowStockCount;
}

export function renderAdminProducts() {
    const listEl = document.getElementById('admin-product-list');
    if (!listEl) return;

    listEl.innerHTML = window.productsData.map(p => `
        <div class="admin-product-item">
            <input type="checkbox" class="product-checkbox" value="${p.id}" onchange="updateBulkActionsVisibility()">
            <img src="${p.image}" alt="${p.name}" onerror="this.onerror=null;this.src='https://placehold.co/50x50?text=Img';">
            <div class="product-details">
                <strong>${p.name}</strong>
                <small>${p.category} | $${p.price.toFixed(2)} | Unit: ${p.unit}</small>
                <div class="product-stats">
                    <span class="rating">★ ${p.rating}</span>
                    <span class="stock-status ${p.stock === 0 ? 'out-of-stock' : p.stock <= 10 ? 'low-stock' : 'in-stock'}">
                        Stock: ${p.stock}
                    </span>
                </div>
            </div>
            <div class="stock-control">
                <button class="btn btn-primary" onclick="updateStock(${p.id}, 1)">+1</button>
                <button class="btn btn-danger" onclick="updateStock(${p.id}, -1)">-1</button>
                <button class="btn btn-secondary" onclick="editProduct(${p.id})">Edit</button>
            </div>
        </div>
    `).join('');
}

export function updateStock(productId, delta) {
    const productIndex = window.productsData.findIndex(p => p.id === productId);
    if (productIndex > -1) {
        const currentStock = window.productsData[productIndex].stock;
        const newStock = currentStock + delta;

        if (newStock < 0) {
            showMessage('Stock cannot be negative.', 'danger');
            return;
        }

        window.productsData[productIndex].stock = newStock;
        showMessage(`Stock for ${window.productsData[productIndex].name} updated to ${newStock}.`, 'success');

        renderAdminProducts();
        renderHomeProducts();
        applyFilters();
        if (getState().currentView === DETAIL_VIEW) {
            renderProductDetail(window.productsData[productIndex]);
        }
    }
}

export function handleProductFormSubmit(event) {
    event.preventDefault();

    const name = sanitizeInput(document.getElementById('new-name').value);
    const category = document.getElementById('new-category').value;
    const price = parseFloat(document.getElementById('new-price').value);
    const stock = parseInt(document.getElementById('new-stock').value);
    const rating = parseFloat(document.getElementById('new-rating').value);
    const unit = sanitizeInput(document.getElementById('new-unit').value);
    const description = sanitizeInput(document.getElementById('new-description').value);
    const image = document.getElementById('new-image').value || 'https://placehold.co/400x300/F3F4F6/6B7280?text=New+Product';

    if (isNaN(price) || isNaN(stock) || isNaN(rating) || rating < 1 || rating > 5) {
        showMessage('Please enter valid numeric values for Price, Stock, and Rating (1.0-5.0).', 'danger');
        return;
    }

    const newProduct = {
        id: window.productsData.length + 1,
        name,
        category,
        price,
        stock,
        rating,
        unit,
        description,
        image,
        reviews: [],
        gallery: [image]
    };

    window.productsData.push(newProduct);
    document.getElementById('add-product-form').reset();
    showMessage(`Product '${name}' added successfully!`, 'success');

    renderAdminProducts();
    renderHomeProducts();
    applyFilters();
    updateAnalytics();
}

export function updateAnalytics() {
    const totalProducts = window.productsData.length;
    const totalCategories = new Set(window.productsData.map(p => p.category)).size;
    const inventoryValue = window.productsData.reduce((sum, p) => sum + (p.price * p.stock), 0);
    const lowStockCount = window.productsData.filter(p => p.stock > 0 && p.stock <= 10).length;

    const totalProductsEl = document.getElementById('total-products');
    const totalCategoriesEl = document.getElementById('total-categories');
    const inventoryValueEl = document.getElementById('inventory-value');
    const lowStockCountEl = document.getElementById('low-stock-count');

    if (totalProductsEl) totalProductsEl.textContent = totalProducts;
    if (totalCategoriesEl) totalCategoriesEl.textContent = totalCategories;
    if (inventoryValueEl) inventoryValueEl.textContent = `$${inventoryValue.toFixed(2)}`;
    if (lowStockCountEl) lowStockCountEl.textContent = lowStockCount;
}

export function selectAllProducts() {
    const checkboxes = document.querySelectorAll('.product-checkbox');
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);

    checkboxes.forEach(cb => cb.checked = !allChecked);
    updateBulkActionsVisibility();
}

export function updateBulkActionsVisibility() {
    const checkedBoxes = document.querySelectorAll('.product-checkbox:checked');
    const bulkDeleteBtn = document.getElementById('bulk-delete-btn');
    const bulkUpdateBtn = document.getElementById('bulk-update-btn');

    const hasSelections = checkedBoxes.length > 0;
    if (bulkDeleteBtn) bulkDeleteBtn.style.display = hasSelections ? 'inline-block' : 'none';
    if (bulkUpdateBtn) bulkUpdateBtn.style.display = hasSelections ? 'inline-block' : 'none';
}

export function bulkDelete() {
    const checkedBoxes = document.querySelectorAll('.product-checkbox:checked');
    if (checkedBoxes.length === 0) return;

    if (!confirm(`Are you sure you want to delete ${checkedBoxes.length} product(s)?`)) return;

    const idsToDelete = Array.from(checkedBoxes).map(cb => parseInt(cb.value));
    window.productsData = window.productsData.filter(p => !idsToDelete.includes(p.id));

    showMessage(`${checkedBoxes.length} product(s) deleted successfully!`, 'success');
    renderAdminProducts();
    renderHomeProducts();
    applyFilters();
    updateAnalytics();
}

export function bulkUpdateStock() {
    const checkedBoxes = document.querySelectorAll('.product-checkbox:checked');
    if (checkedBoxes.length === 0) return;

    const newStock = prompt('Enter new stock quantity for selected products:');
    if (newStock === null || isNaN(newStock) || newStock < 0) return;

    const stockValue = parseInt(newStock);
    const idsToUpdate = Array.from(checkedBoxes).map(cb => parseInt(cb.value));

    window.productsData.forEach(p => {
        if (idsToUpdate.includes(p.id)) {
            p.stock = stockValue;
        }
    });

    showMessage(`Stock updated for ${checkedBoxes.length} product(s)!`, 'success');
    renderAdminProducts();
    renderHomeProducts();
    applyFilters();
    updateAnalytics();
}

export function exportData() {
    const data = {
        products: window.productsData,
        exportDate: new Date().toISOString(),
        totalProducts: window.productsData.length,
        totalValue: window.productsData.reduce((sum, p) => sum + (p.price * p.stock), 0)
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `supermarket-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showMessage('Data exported successfully!', 'success');
}

export function bulkImport() {
    showMessage('Bulk import feature coming soon!', 'secondary');
}

export function generateReport() {
    const report = {
        summary: {
            totalProducts: window.productsData.length,
            totalCategories: new Set(window.productsData.map(p => p.category)).size,
            totalInventoryValue: window.productsData.reduce((sum, p) => sum + (p.price * p.stock), 0),
            lowStockItems: window.productsData.filter(p => p.stock > 0 && p.stock <= 10).length,
            outOfStockItems: window.productsData.filter(p => p.stock === 0).length
        },
        categoryBreakdown: {},
        topRatedProducts: window.productsData.sort((a, b) => b.rating - a.rating).slice(0, 5),
        generatedAt: new Date().toISOString()
    };

    Object.keys(report.categoryBreakdown).forEach(cat => {
        const categoryProducts = window.productsData.filter(p => p.category === cat);
        const avgRating = categoryProducts.reduce((sum, p) => sum + p.rating, 0) / categoryProducts.length;
        report.categoryBreakdown[cat].averageRating = avgRating.toFixed(1);
    });

    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElementById('a');
    a.href = url;
    a.download = `supermarket-report-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showMessage('Report generated successfully!', 'success');
}

export function showSettings() {
    showMessage('Settings panel coming soon!', 'secondary');
}

export function showAddProductModal() {
    document.getElementById('add-product-form').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('new-name').focus();
}

export function sanitizeInput(input) {
    return input.replace(/[<>]/g, '').trim();
}

export function editProduct(productId) {
    const product = window.productsData.find(p => p.id === productId);
    if (!product) {
        showMessage('Product not found.', 'danger');
        return;
    }

    // Populate form with existing product data
    document.getElementById('new-name').value = product.name;
    document.getElementById('new-category').value = product.category;
    document.getElementById('new-price').value = product.price;
    document.getElementById('new-stock').value = product.stock;
    document.getElementById('new-rating').value = product.rating;
    document.getElementById('new-unit').value = product.unit;
    document.getElementById('new-description').value = product.description;
    document.getElementById('new-image').value = product.image;

    // Change form submit handler to update instead of create
    const form = document.getElementById('add-product-form');
    form.onsubmit = (event) => handleProductUpdate(event, productId);

    // Update form title and button
    const formTitle = document.querySelector('#add-product-form').previousElementSibling;
    if (formTitle && formTitle.tagName === 'H2') {
        formTitle.textContent = 'Edit Product';
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.textContent = 'Update Product';
    }

    // Scroll to form
    document.getElementById('add-product-form').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('new-name').focus();
}

export function handleProductUpdate(event, productId) {
    event.preventDefault();

    const productIndex = window.productsData.findIndex(p => p.id === productId);
    if (productIndex === -1) {
        showMessage('Product not found.', 'danger');
        return;
    }

    const name = sanitizeInput(document.getElementById('new-name').value);
    const category = document.getElementById('new-category').value;
    const price = parseFloat(document.getElementById('new-price').value);
    const stock = parseInt(document.getElementById('new-stock').value);
    const rating = parseFloat(document.getElementById('new-rating').value);
    const unit = sanitizeInput(document.getElementById('new-unit').value);
    const description = sanitizeInput(document.getElementById('new-description').value);
    const image = document.getElementById('new-image').value || 'https://placehold.co/400x300/F3F4F6/6B7280?text=Updated+Product';

    if (isNaN(price) || isNaN(stock) || isNaN(rating) || rating < 1 || rating > 5) {
        showMessage('Please enter valid numeric values for Price, Stock, and Rating (1.0-5.0).', 'danger');
        return;
    }

    // Update product
    window.productsData[productIndex] = {
        ...window.productsData[productIndex],
        name,
        category,
        price,
        stock,
        rating,
        unit,
        description,
        image,
        gallery: [image] // Update gallery with new image
    };

    // Reset form
    document.getElementById('add-product-form').reset();

    // Restore original form submit handler
    document.getElementById('add-product-form').onsubmit = handleProductFormSubmit;

    // Update form title and button back to original
    const formTitle = document.querySelector('#add-product-form').previousElementSibling;
    if (formTitle && formTitle.tagName === 'H2') {
        formTitle.textContent = 'Add New Product';
    }

    const submitBtn = document.getElementById('add-product-form').querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.textContent = 'Add Product';
    }

    showMessage(`Product '${name}' updated successfully!`, 'success');

    // Update all views
    renderAdminProducts();
    renderHomeProducts();
    applyFilters();
    updateAnalytics();

    // Update detail view if currently viewing this product
    if (getState().currentView === DETAIL_VIEW) {
        renderProductDetail(window.productsData[productIndex]);
    }
}