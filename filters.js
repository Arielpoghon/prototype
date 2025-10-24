// Filter and search functionality
import { getState, updateState } from './utils.js';

export function applyFilters() {
    let filteredProducts = window.productsData;

    const appState = getState();
    if (appState.currentFilter !== 'All') {
        filteredProducts = filteredProducts.filter(p => p.category === appState.currentFilter);
    }

    if (appState.currentSearchQuery) {
        const query = appState.currentSearchQuery.toLowerCase();
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
        );
    }

    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    if (minPriceInput && maxPriceInput) {
        const min = parseFloat(minPriceInput.value) || 0;
        const max = parseFloat(maxPriceInput.value) || 100;
        filteredProducts = filteredProducts.filter(p => p.price >= min && p.price <= max);
    }

    filteredProducts = applySortingToProducts(filteredProducts, appState.currentSort);

    renderProducts('search-products-grid', filteredProducts);
}

export function applySorting(sortType) {
    updateState({ currentSort: sortType });
    applyFilters();
}

export function applySortingToProducts(products, sortType) {
    switch (sortType) {
        case 'price-low':
            return products.sort((a, b) => a.price - b.price);
        case 'price-high':
            return products.sort((a, b) => b.price - a.price);
        case 'rating':
            return products.sort((a, b) => b.rating - a.rating);
        case 'newest':
            return products.sort((a, b) => b.id - a.id);
        case 'name':
        default:
            return products.sort((a, b) => a.name.localeCompare(b.name));
    }
}

export function updateSearchQuery(inputElement) {
    const debouncedApplyFilters = debounce(() => {
        updateState({ currentSearchQuery: inputElement.value });
        applyFilters();
    }, 300);
    debouncedApplyFilters();
}

export function applyCategoryFilter(category) {
    updateState({ currentFilter: category });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });

    applyFilters();
}

export function setViewMode(mode) {
    updateState({ currentViewMode: mode });
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.view-btn[onclick*="setViewMode('${mode}')"]`).classList.add('active');
    applyFilters();
}

export function clearAllFilters() {
    updateState({
        currentFilter: 'All',
        currentSearchQuery: '',
        minPrice: 0,
        maxPrice: 100,
        currentSort: 'name'
    });

    document.getElementById('desktop-search-input').value = '';
    document.getElementById('min-price').value = '';
    document.getElementById('max-price').value = '';

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === 'All') {
            btn.classList.add('active');
        }
    });

    document.getElementById('sort-select').value = 'name';
    applyFilters();
    showMessage('All filters cleared.', 'secondary');
}

export function toggleAdvancedFilters() {
    const panel = document.getElementById('advanced-filters-panel');
    const toggleBtn = document.getElementById('filter-toggle');
    const isOpen = panel.style.display !== 'none';

    panel.style.display = isOpen ? 'none' : 'grid';
    toggleBtn.classList.toggle('active', !isOpen);
}

export function updatePriceRange() {
    applyFilters();
}