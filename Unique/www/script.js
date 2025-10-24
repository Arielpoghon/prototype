// Import modules
import { addToCart, addToCartWithQuantity, calculateSubtotal, renderCart, updateQuantity, removeFromCart, updateCartCount, openCartSidebar } from './cart.js';
import { renderProducts, renderHomeProducts, renderRatingStars, renderQuantityInput, changeQuantityOnCard, validateQuantityInput, showProductDetailView, renderProductDetail, changeGalleryImage, addToRecentlyViewed } from './product.js';
import { simulateLoading, handleCardKeydown, showMessage, closeAll, showView, showShopView, showSearchView, showAdminView, goBackFromDetail, toggleWishlist, updateWishlistCount, openWishlist, renderWishlist, addToComparison, removeFromComparison, openComparison, renderComparison, renderRecentlyViewed, showAboutSection, showContactSection, handleContactForm } from './ui.js';
import { applyFilters, applySorting, applySortingToProducts, updateSearchQuery, applyCategoryFilter, setViewMode, clearAllFilters, toggleAdvancedFilters, updatePriceRange } from './filters.js';
import { toggleAdminAccess, updateProfileUI, openAuthModal, closeAuthModal, handleAuthSubmit, logoutAdmin, renderAdminStats, renderAdminProducts, updateStock, handleProductFormSubmit, updateAnalytics, selectAllProducts, updateBulkActionsVisibility, bulkDelete, bulkUpdateStock, exportData, bulkImport, generateReport, showSettings, showAddProductModal, sanitizeInput, editProduct, handleProductUpdate } from './admin.js';
import { initiateCheckout, closeCheckoutModal, renderCheckoutForm, handleCheckoutSubmit } from './checkout.js';
import { updateState, getState, setAppStateReference, debounce, safeLocalStorageGet, safeLocalStorageSet, handleFirebaseError, trapFocus, DETAIL_VIEW, SLIDE_COUNT, MIN_PRICE, MAX_PRICE } from './utils.js';

// Make functions globally available for HTML onclick handlers
window.addToCart = addToCart;
window.addToCartWithQuantity = addToCartWithQuantity;
window.renderCart = renderCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.updateCartCount = updateCartCount;
window.openCartSidebar = openCartSidebar;
window.renderProducts = renderProducts;
window.renderHomeProducts = renderHomeProducts;
window.renderRatingStars = renderRatingStars;
window.renderQuantityInput = renderQuantityInput;
window.changeQuantityOnCard = changeQuantityOnCard;
window.validateQuantityInput = validateQuantityInput;
window.showProductDetailView = showProductDetailView;
window.renderProductDetail = renderProductDetail;
window.changeGalleryImage = changeGalleryImage;
window.addToRecentlyViewed = addToRecentlyViewed;
window.simulateLoading = simulateLoading;
window.handleCardKeydown = handleCardKeydown;
window.showMessage = showMessage;
window.closeAll = closeAll;
window.showView = showView;
window.showShopView = showShopView;
window.showSearchView = showSearchView;
window.showAdminView = showAdminView;
window.goBackFromDetail = goBackFromDetail;
window.toggleWishlist = toggleWishlist;
window.updateWishlistCount = updateWishlistCount;
window.openWishlist = openWishlist;
window.renderWishlist = renderWishlist;
window.addToComparison = addToComparison;
window.removeFromComparison = removeFromComparison;
window.openComparison = openComparison;
window.renderComparison = renderComparison;
window.renderRecentlyViewed = renderRecentlyViewed;
window.applyFilters = applyFilters;
window.applySorting = applySorting;
window.applySortingToProducts = applySortingToProducts;
window.updateSearchQuery = updateSearchQuery;
window.applyCategoryFilter = applyCategoryFilter;
window.setViewMode = setViewMode;
window.clearAllFilters = clearAllFilters;
window.toggleAdvancedFilters = toggleAdvancedFilters;
window.updatePriceRange = updatePriceRange;
window.toggleAdminAccess = toggleAdminAccess;
window.updateProfileUI = updateProfileUI;
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.handleAuthSubmit = handleAuthSubmit;
window.logoutAdmin = logoutAdmin;
window.renderAdminStats = renderAdminStats;
window.renderAdminProducts = renderAdminProducts;
window.updateStock = updateStock;
window.handleProductFormSubmit = handleProductFormSubmit;
window.updateAnalytics = updateAnalytics;
window.selectAllProducts = selectAllProducts;
window.updateBulkActionsVisibility = updateBulkActionsVisibility;
window.bulkDelete = bulkDelete;
window.bulkUpdateStock = bulkUpdateStock;
window.exportData = exportData;
window.bulkImport = bulkImport;
window.generateReport = generateReport;
window.showSettings = showSettings;
window.showAddProductModal = showAddProductModal;
window.sanitizeInput = sanitizeInput;
window.editProduct = editProduct;
window.handleProductUpdate = handleProductUpdate;
window.initiateCheckout = initiateCheckout;
window.closeCheckoutModal = closeCheckoutModal;
window.renderCheckoutForm = renderCheckoutForm;
window.handleCheckoutSubmit = handleCheckoutSubmit;
window.formatCardNumber = formatCardNumber;
window.formatExpiry = formatExpiry;
window.updateState = updateState;
window.getState = getState;
window.debounce = debounce;
window.safeLocalStorageGet = safeLocalStorageGet;
window.safeLocalStorageSet = safeLocalStorageSet;
window.handleFirebaseError = handleFirebaseError;
window.trapFocus = trapFocus;
window.toggleDarkMode = toggleDarkMode;
window.showAboutSection = showAboutSection;
window.showContactSection = showContactSection;
window.closeModal = closeModal;

// Dark mode toggle function
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Load dark mode preference on app initialization
function loadDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
}

// Promotion modal function
function showPromotionModal() {
    const modal = document.getElementById('promotion-modal');
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('open'), 10);
    }
}

// Close promotion modal
function closeModal() {
    const modal = document.getElementById('promotion-modal');
    if (modal) {
        modal.classList.remove('open');
        setTimeout(() => modal.style.display = 'none', 300);
    }
}

const productsData = [
    // Added 'rating', 'description', 'unit', 'reviews', and 'gallery' properties
    {
        id: 1,
        name: 'Basmati Rice',
        unit: '5 kg bag',
        category: 'Groceries',
        price: 1299,
        stock: 45,
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400',
        rating: 4.5,
        description: 'Long-grain, aromatic Basmati rice. Perfect for pilafs and Indian cuisine. Grown in the Himalayan foothills.',
        reviews: [
            { user: 'John D.', rating: 5, comment: 'Excellent quality and authentic taste!' },
            { user: 'Sarah M.', rating: 4, comment: 'Great for biryani. Will buy again.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400',
            'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=400',
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400'
        ]
    },
    {
        id: 11,
        name: 'Organic Bananas',
        unit: '1 kg bunch',
        category: 'Produce',
        price: 349,
        stock: 80,
        image: 'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?q=80&w=400',
        rating: 4.8,
        description: 'Sweet, organic bananas grown without pesticides. Perfect for smoothies, baking, or snacking.',
        reviews: [
            { user: 'Emma L.', rating: 5, comment: 'Always fresh and sweet!' },
            { user: 'Mike T.', rating: 5, comment: 'Great quality organic bananas.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?q=80&w=400',
            'https://images.unsplash.com/photo-1603833665858-e61e17a86224?q=80&w=400',
            'https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=400'
        ]
    },
    {
        id: 12,
        name: 'Fresh Strawberries',
        unit: '500g punnet',
        category: 'Produce',
        price: 599,
        stock: 60,
        image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=400',
        rating: 4.6,
        description: 'Juicy, locally grown strawberries. Perfect for desserts, smoothies, or eating fresh.',
        reviews: [
            { user: 'Lisa R.', rating: 5, comment: 'So sweet and fresh!' },
            { user: 'David K.', rating: 4, comment: 'Good quality berries.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=400',
            'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=400',
            'https://images.unsplash.com/photo-1543528176-61b239494933?q=80&w=400'
        ]
    },
    {
        id: 13,
        name: 'Whole Wheat Bread',
        unit: 'Loaf (600g)',
        category: 'Bakery',
        price: 399,
        stock: 40,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400',
        rating: 4.4,
        description: 'Freshly baked whole wheat bread with seeds. High in fiber and perfect for sandwiches.',
        reviews: [
            { user: 'Anna S.', rating: 4, comment: 'Great texture and taste.' },
            { user: 'Peter M.', rating: 5, comment: 'My favorite whole wheat bread.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400',
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
            'https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=400'
        ]
    },
    {
        id: 14,
        name: 'Green Tea Bags',
        unit: '50 bags',
        category: 'Beverages',
        price: 499,
        stock: 75,
        image: 'https://images.unsplash.com/photo-1576092762793-c0e14b9c2a0f?q=80&w=400',
        rating: 4.2,
        description: 'Premium green tea bags with natural antioxidants. Perfect for a refreshing morning boost.',
        reviews: [
            { user: 'Yuki H.', rating: 4, comment: 'Smooth and refreshing.' },
            { user: 'Tom B.', rating: 4, comment: 'Good quality green tea.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1576092762793-c0e14b9c2a0f?q=80&w=400',
            'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=400',
            'https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=400'
        ]
    },
    {
        id: 15,
        name: 'Greek Yogurt',
        unit: '500g tub',
        category: 'Dairy',
        price: 449,
        stock: 55,
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=400',
        rating: 4.7,
        description: 'Thick and creamy Greek yogurt. High in protein, perfect for breakfast or desserts.',
        reviews: [
            { user: 'Maria C.', rating: 5, comment: 'So creamy and delicious!' },
            { user: 'John P.', rating: 4, comment: 'Great protein content.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=400',
            'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400',
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400'
        ]
    },
    {
        id: 16,
        name: 'Mixed Nuts',
        unit: '300g bag',
        category: 'Snacks',
        price: 799,
        stock: 35,
        image: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=400',
        rating: 4.5,
        description: 'Premium mixed nuts including almonds, walnuts, and cashews. Perfect for healthy snacking.',
        reviews: [
            { user: 'Sarah W.', rating: 5, comment: 'Delicious and crunchy!' },
            { user: 'Mike D.', rating: 4, comment: 'Good mix of nuts.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=400',
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400',
            'https://images.unsplash.com/photo-1599599810694-4e0df15c6bf1?q=80&w=400'
        ]
    },
    {
        id: 17,
        name: 'Laundry Detergent',
        unit: '2L bottle',
        category: 'Household',
        price: 899,
        stock: 25,
        image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=400',
        rating: 4.3,
        description: 'Eco-friendly laundry detergent. Effective stain removal with a fresh scent.',
        reviews: [
            { user: 'Linda G.', rating: 4, comment: 'Works great on stains.' },
            { user: 'Robert S.', rating: 4, comment: 'Nice fresh smell.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=400',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400',
            'https://images.unsplash.com/photo-1584208124881-74d038af6596?q=80&w=400'
        ]
    },
    {
        id: 18,
        name: 'Shampoo',
        unit: '400ml bottle',
        category: 'Personal Care',
        price: 649,
        stock: 45,
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=400',
        rating: 4.4,
        description: 'Gentle, moisturizing shampoo for all hair types. Sulfate-free and cruelty-free.',
        reviews: [
            { user: 'Emma T.', rating: 5, comment: 'Leaves my hair so soft!' },
            { user: 'Chris L.', rating: 4, comment: 'Good for everyday use.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=400',
            'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400',
            'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?q=80&w=400'
        ]
    },
    {
        id: 19,
        name: 'Frozen Pizza',
        unit: '500g',
        category: 'Frozen',
        price: 799,
        stock: 30,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400',
        rating: 4.1,
        description: 'Delicious frozen pizza with fresh toppings. Ready in 15 minutes.',
        reviews: [
            { user: 'Alex M.', rating: 4, comment: 'Quick and tasty meal.' },
            { user: 'Sophie B.', rating: 4, comment: 'Good for busy nights.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400',
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400',
            'https://images.unsplash.com/photo-1571066811602-716837d681de?q=80&w=400'
        ]
    },
    {
        id: 20,
        name: 'Chocolate Chip Cookies',
        unit: 'Pack of 12',
        category: 'Bakery',
        price: 499,
        stock: 50,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400',
        rating: 4.9,
        description: 'Freshly baked chocolate chip cookies. Soft, chewy, and loaded with chocolate chips.',
        reviews: [
            { user: 'Bella R.', rating: 5, comment: 'Best cookies ever!' },
            { user: 'Jake P.', rating: 5, comment: 'So delicious and fresh.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400',
            'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400',
            'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=400'
        ]
    },
    {
        id: 21,
        name: 'Orange Juice',
        unit: '1L carton',
        category: 'Beverages',
        price: 399,
        stock: 40,
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=400',
        rating: 4.3,
        description: 'Freshly squeezed orange juice. 100% pure with no added sugar.',
        reviews: [
            { user: 'Nina K.', rating: 4, comment: 'Fresh and tangy!' },
            { user: 'Tom H.', rating: 4, comment: 'Great for breakfast.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=400',
            'https://images.unsplash.com/photo-1546173159-315724a3167a?q=80&w=400',
            'https://images.unsplash.com/photo-1576092762793-c0e14b9c2a0f?q=80&w=400'
        ]
    },
    {
        id: 22,
        name: 'Cheddar Cheese',
        unit: '250g block',
        category: 'Dairy',
        price: 549,
        stock: 35,
        image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=400',
        rating: 4.5,
        description: 'Sharp cheddar cheese. Perfect for sandwiches, burgers, or snacking.',
        reviews: [
            { user: 'Rachel F.', rating: 5, comment: 'Sharp and flavorful!' },
            { user: 'Mark D.', rating: 4, comment: 'Good quality cheese.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=400',
            'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400',
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400'
        ]
    },
    {
        id: 23,
        name: 'Potato Chips',
        unit: '200g bag',
        category: 'Snacks',
        price: 299,
        stock: 65,
        image: 'https://images.unsplash.com/photo-1566479179818-f7c5c5a5f1f2?q=80&w=400',
        rating: 4.2,
        description: 'Crispy potato chips with sea salt. Perfect for movie nights or parties.',
        reviews: [
            { user: 'Oliver S.', rating: 4, comment: 'Crunchy and delicious!' },
            { user: 'Lily M.', rating: 4, comment: 'Great snack.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1566479179818-f7c5c5a5f1f2?q=80&w=400',
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400',
            'https://images.unsplash.com/photo-1599599810694-4e0df15c6bf1?q=80&w=400'
        ]
    },
    {
        id: 24,
        name: 'Dish Soap',
        unit: '750ml bottle',
        category: 'Household',
        price: 349,
        stock: 50,
        image: 'https://images.unsplash.com/photo-1584208124881-74d038af6596?q=80&w=400',
        rating: 4.0,
        description: 'Effective dish soap that cuts through grease. Gentle on hands.',
        reviews: [
            { user: 'Karen W.', rating: 4, comment: 'Cuts grease well.' },
            { user: 'Steve B.', rating: 4, comment: 'Nice lemon scent.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1584208124881-74d038af6596?q=80&w=400',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400',
            'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=400'
        ]
    },
    {
        id: 25,
        name: 'Toothpaste',
        unit: '150g tube',
        category: 'Personal Care',
        price: 299,
        stock: 70,
        image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=400',
        rating: 4.1,
        description: 'Fluoride toothpaste for clean, healthy teeth. Fresh mint flavor.',
        reviews: [
            { user: 'Zoe L.', rating: 4, comment: 'Fresh and clean feeling.' },
            { user: 'Adam R.', rating: 4, comment: 'Good whitening effect.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=400',
            'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400',
            'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?q=80&w=400'
        ]
    },
    {
        id: 26,
        name: 'Frozen Vegetables Mix',
        unit: '500g bag',
        category: 'Frozen',
        price: 449,
        stock: 45,
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=400',
        rating: 4.0,
        description: 'Mixed frozen vegetables including broccoli, carrots, and peas. Perfect for quick meals.',
        reviews: [
            { user: 'Diana P.', rating: 4, comment: 'Convenient and fresh.' },
            { user: 'George H.', rating: 4, comment: 'Good variety.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=400',
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400',
            'https://images.unsplash.com/photo-1571066811602-716837d681de?q=80&w=400'
        ]
    },
    {
        id: 27,
        name: 'Spaghetti Pasta',
        unit: '500g box',
        category: 'Groceries',
        price: 249,
        stock: 85,
        image: 'https://images.unsplash.com/photo-1551467847-0d2026d8a8ba?q=80&w=400',
        rating: 4.4,
        description: 'Classic spaghetti pasta. Perfect for Italian dishes and sauces.',
        reviews: [
            { user: 'Marco I.', rating: 5, comment: 'Perfect al dente!' },
            { user: 'Sophia V.', rating: 4, comment: 'Great for homemade pasta.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1551467847-0d2026d8a8ba?q=80&w=400',
            'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=400',
            'https://images.unsplash.com/photo-1563379091339-03246963d96c?q=80&w=400'
        ]
    },
    {
        id: 28,
        name: 'Red Apples',
        unit: '1 kg bag',
        category: 'Produce',
        price: 499,
        stock: 55,
        image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=400',
        rating: 4.6,
        description: 'Crisp, juicy red apples. Perfect for snacking or baking.',
        reviews: [
            { user: 'Hannah J.', rating: 5, comment: 'Sweet and crunchy!' },
            { user: 'Tyler B.', rating: 4, comment: 'Great for pies.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=400',
            'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?q=80&w=400',
            'https://images.unsplash.com/photo-1603833665858-e61e17a86224?q=80&w=400'
        ]
    },
    {
        id: 29,
        name: 'Croissants',
        unit: 'Pack of 4',
        category: 'Bakery',
        price: 599,
        stock: 25,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
        rating: 4.8,
        description: 'Buttery, flaky croissants. Freshly baked every morning.',
        reviews: [
            { user: 'Pierre L.', rating: 5, comment: 'Authentic French quality!' },
            { user: 'Marie D.', rating: 5, comment: 'So flaky and delicious.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
            'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400',
            'https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=400'
        ]
    },
    {
        id: 30,
        name: 'Sparkling Water',
        unit: '12 cans',
        category: 'Beverages',
        price: 699,
        stock: 40,
        image: 'https://images.unsplash.com/photo-1546173159-315724a3167a?q=80&w=400',
        rating: 4.4,
        description: 'Refreshing sparkling water. Zero calories, perfect for hydration.',
        reviews: [
            { user: 'Julia M.', rating: 4, comment: 'Great alternative to soda.' },
            { user: 'Kevin T.', rating: 5, comment: 'So refreshing!' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1546173159-315724a3167a?q=80&w=400',
            'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=400',
            'https://images.unsplash.com/photo-1576092762793-c0e14b9c2a0f?q=80&w=400'
        ]
    },
    {
        id: 31,
        name: 'Chicken Breast',
        unit: '1 lb',
        category: 'Meat',
        price: 799,
        stock: 25,
        image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=400',
        rating: 4.6,
        description: 'Fresh, boneless chicken breast. Perfect for grilling, baking, or stir-frying.',
        reviews: [
            { user: 'Sarah L.', rating: 5, comment: 'Always fresh and tender!' },
            { user: 'Mike R.', rating: 4, comment: 'Good quality meat.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=400',
            'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400',
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400'
        ]
    },
    {
        id: 32,
        name: 'Ground Beef',
        unit: '1 lb',
        category: 'Meat',
        price: 849,
        stock: 30,
        image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=400',
        rating: 4.3,
        description: '80% lean ground beef. Ideal for burgers, meatballs, and tacos.',
        reviews: [
            { user: 'Tom H.', rating: 4, comment: 'Perfect for burgers.' },
            { user: 'Lisa P.', rating: 5, comment: 'Great flavor!' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=400',
            'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400',
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400'
        ]
    },
    {
        id: 33,
        name: 'Salmon Fillet',
        unit: '6 oz',
        category: 'Seafood',
        price: 1299,
        stock: 15,
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=400',
        rating: 4.8,
        description: 'Fresh Atlantic salmon fillet. Rich in omega-3s, perfect for grilling or baking.',
        reviews: [
            { user: 'Emma W.', rating: 5, comment: 'Delicious and fresh!' },
            { user: 'David S.', rating: 5, comment: 'Best salmon I\'ve had.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=400',
            'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=400',
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400'
        ]
    },
    {
        id: 34,
        name: 'Shrimp',
        unit: '1 lb',
        category: 'Seafood',
        price: 1499,
        stock: 20,
        image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=400',
        rating: 4.5,
        description: 'Large, deveined shrimp. Perfect for seafood boils, pasta, or grilling.',
        reviews: [
            { user: 'Anna K.', rating: 5, comment: 'So fresh and tasty!' },
            { user: 'John M.', rating: 4, comment: 'Good quality shrimp.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=400',
            'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=400',
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400'
        ]
    },
    {
        id: 35,
        name: 'Turkey Slices',
        unit: '8 oz',
        category: 'Deli',
        price: 649,
        stock: 35,
        image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400',
        rating: 4.4,
        description: 'Sliced turkey breast. Low-fat, perfect for sandwiches and salads.',
        reviews: [
            { user: 'Rachel T.', rating: 4, comment: 'Great for sandwiches.' },
            { user: 'Mark L.', rating: 5, comment: 'Very lean and tasty.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400',
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
            'https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=400'
        ]
    },
    {
        id: 36,
        name: 'Cheddar Cheese Slices',
        unit: '12 slices',
        category: 'Deli',
        price: 499,
        stock: 40,
        image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=400',
        rating: 4.6,
        description: 'Sharp cheddar cheese slices. Perfect for sandwiches and burgers.',
        reviews: [
            { user: 'Sophie B.', rating: 5, comment: 'Sharp and delicious!' },
            { user: 'Alex R.', rating: 4, comment: 'Good quality cheese.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=400',
            'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400',
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400'
        ]
    },
    {
        id: 37,
        name: 'Pork Chops',
        unit: '1 lb',
        category: 'Meat',
        price: 999,
        stock: 20,
        image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400',
        rating: 4.5,
        description: 'Bone-in pork chops. Juicy and flavorful, perfect for grilling or pan-searing.',
        reviews: [
            { user: 'Linda S.', rating: 5, comment: 'So tender and juicy!' },
            { user: 'Peter M.', rating: 4, comment: 'Great flavor.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400',
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
            'https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=400'
        ]
    },
    {
        id: 38,
        name: 'Tuna Steak',
        unit: '8 oz',
        category: 'Seafood',
        price: 1699,
        stock: 12,
        image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=400',
        rating: 4.7,
        description: 'Fresh yellowfin tuna steak. Perfect for searing or sushi-grade quality.',
        reviews: [
            { user: 'Nina L.', rating: 5, comment: 'Amazing quality!' },
            { user: 'Chris D.', rating: 5, comment: 'Perfect for grilling.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=400',
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400',
            'https://images.unsplash.com/photo-1571066811602-716837d681de?q=80&w=400'
        ]
    },
    {
        id: 39,
        name: 'Ham Slices',
        unit: '10 oz',
        category: 'Deli',
        price: 749,
        stock: 28,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
        rating: 4.3,
        description: 'Sliced honey ham. Perfect for sandwiches and charcuterie boards.',
        reviews: [
            { user: 'Bella T.', rating: 4, comment: 'Sweet and savory.' },
            { user: 'Jake W.', rating: 4, comment: 'Good quality ham.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
            'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400',
            'https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=400'
        ]
    },
    {
        id: 40,
        name: 'Lamb Chops',
        unit: '1 lb',
        category: 'Meat',
        price: 1899,
        stock: 10,
        image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400',
        rating: 4.8,
        description: 'Frenched lamb chops. Tender and flavorful, perfect for special occasions.',
        reviews: [
            { user: 'Maria R.', rating: 5, comment: 'Absolutely delicious!' },
            { user: 'David P.', rating: 5, comment: 'Premium quality.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400',
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
            'https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=400'
        ]
    },
    {
        id: 41,
        name: 'Crab Legs',
        unit: '1 lb',
        category: 'Seafood',
        price: 2499,
        stock: 8,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400',
        rating: 4.9,
        description: 'King crab legs. Sweet and succulent, perfect for special dinners.',
        reviews: [
            { user: 'Sophie M.', rating: 5, comment: 'Heavenly!' },
            { user: 'Oliver K.', rating: 5, comment: 'Worth every penny.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400',
            'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=400',
            'https://images.unsplash.com/photo-1571066811602-716837d681de?q=80&w=400'
        ]
    },
    {
        id: 42,
        name: 'Prosciutto',
        unit: '4 oz',
        category: 'Deli',
        price: 999,
        stock: 18,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
        rating: 4.7,
        description: 'Italian prosciutto. Thinly sliced, perfect for antipasti or sandwiches.',
        reviews: [
            { user: 'Luca F.', rating: 5, comment: 'Authentic Italian flavor!' },
            { user: 'Elena V.', rating: 5, comment: 'So delicate and tasty.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
            'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400',
            'https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=400'
        ]
    },
    {
        id: 43,
        name: 'Beef Ribeye',
        unit: '1 lb',
        category: 'Meat',
        price: 2299,
        stock: 15,
        image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400',
        rating: 4.9,
        description: 'Prime ribeye steak. Marbled and flavorful, perfect for grilling.',
        reviews: [
            { user: 'Robert B.', rating: 5, comment: 'Best steak ever!' },
            { user: 'Karen L.', rating: 5, comment: 'So tender and juicy.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400',
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
            'https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=400'
        ]
    },
    {
        id: 44,
        name: 'Lobster Tail',
        unit: '8 oz',
        category: 'Seafood',
        price: 1999,
        stock: 10,
        image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=400',
        rating: 4.8,
        description: 'Fresh lobster tail. Perfect for special occasions or seafood lovers.',
        reviews: [
            { user: 'Diana S.', rating: 5, comment: 'Luxurious and delicious!' },
            { user: 'George M.', rating: 5, comment: 'Perfect for date night.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=400',
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400',
            'https://images.unsplash.com/photo-1571066811602-716837d681de?q=80&w=400'
        ]
    },
    {
        id: 45,
        name: 'Salami',
        unit: '6 oz',
        category: 'Deli',
        price: 599,
        stock: 32,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
        rating: 4.4,
        description: 'Italian salami. Spicy and flavorful, perfect for sandwiches.',
        reviews: [
            { user: 'Marco P.', rating: 4, comment: 'Great Italian salami.' },
            { user: 'Giulia R.', rating: 5, comment: 'Authentic taste.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
            'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400',
            'https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=400'
        ]
    },
    {
        id: 46,
        name: 'Turkey Bacon',
        unit: '12 oz',
        category: 'Meat',
        price: 699,
        stock: 25,
        image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400',
        rating: 4.2,
        description: 'Low-fat turkey bacon. A healthier alternative to traditional bacon.',
        reviews: [
            { user: 'Lisa H.', rating: 4, comment: 'Good low-fat option.' },
            { user: 'Tom W.', rating: 4, comment: 'Crispy and tasty.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400',
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
            'https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=400'
        ]
    },
    {
        id: 47,
        name: 'Clams',
        unit: '1 lb',
        category: 'Seafood',
        price: 1199,
        stock: 18,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400',
        rating: 4.5,
        description: 'Fresh littleneck clams. Perfect for pasta or steamed with garlic.',
        reviews: [
            { user: 'Antonio M.', rating: 5, comment: 'Fresh and briny!' },
            { user: 'Rosa L.', rating: 4, comment: 'Good for seafood lovers.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400',
            'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=400',
            'https://images.unsplash.com/photo-1571066811602-716837d681de?q=80&w=400'
        ]
    },
    {
        id: 48,
        name: 'Pastrami',
        unit: '8 oz',
        category: 'Deli',
        price: 899,
        stock: 22,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
        rating: 4.6,
        description: 'Smoked pastrami. Perfect for sandwiches and deli platters.',
        reviews: [
            { user: 'Sam K.', rating: 5, comment: 'Classic deli taste!' },
            { user: 'Rachel M.', rating: 4, comment: 'Very flavorful.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
            'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400',
            'https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=400'
        ]
    },
    {
        id: 49,
        name: 'Veal Cutlets',
        unit: '1 lb',
        category: 'Meat',
        price: 1599,
        stock: 12,
        image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400',
        rating: 4.7,
        description: 'Thin veal cutlets. Tender and mild, perfect for schnitzel or scaloppine.',
        reviews: [
            { user: 'Helena V.', rating: 5, comment: 'So tender!' },
            { user: 'Michael S.', rating: 5, comment: 'Premium quality veal.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400',
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
            'https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=400'
        ]
    },
    {
        id: 50,
        name: 'Scallops',
        unit: '1 lb',
        category: 'Seafood',
        price: 2199,
        stock: 14,
        image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=400',
        rating: 4.8,
        description: 'Fresh sea scallops. Sweet and tender, perfect for searing or ceviche.',
        reviews: [
            { user: 'Isabella R.', rating: 5, comment: 'Sweet and perfect!' },
            { user: 'Carlos M.', rating: 5, comment: 'Restaurant quality.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=400',
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400',
            'https://images.unsplash.com/photo-1571066811602-716837d681de?q=80&w=400'
        ]
    },
    {
        id: 51,
        name: 'Mortadella',
        unit: '5 oz',
        category: 'Deli',
        price: 449,
        stock: 28,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
        rating: 4.3,
        description: 'Italian mortadella with pistachios. Mild and flavorful.',
        reviews: [
            { user: 'Giovanni B.', rating: 4, comment: 'Classic Italian deli meat.' },
            { user: 'Francesca L.', rating: 4, comment: 'Good quality.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
            'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400',
            'https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=400'
        ]
    },
    {
        id: 52,
        name: 'Duck Breast',
        unit: '1 lb',
        category: 'Meat',
        price: 1999,
        stock: 8,
        image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400',
        rating: 4.9,
        description: 'Moulard duck breast. Rich and flavorful, perfect for special meals.',
        reviews: [
            { user: 'Pierre D.', rating: 5, comment: 'Exceptional flavor!' },
            { user: 'Marie L.', rating: 5, comment: 'Perfect for gourmet cooking.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400',
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
            'https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=400'
        ]
    },
    {
        id: 53,
        name: 'Oysters',
        unit: 'Dozen',
        category: 'Seafood',
        price: 1899,
        stock: 16,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400',
        rating: 4.6,
        description: 'Fresh oysters on the half shell. Perfect for raw or cooked preparations.',
        reviews: [
            { user: 'Thomas W.', rating: 5, comment: 'Fresh and briny!' },
            { user: 'Sarah K.', rating: 4, comment: 'Good quality oysters.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400',
            'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=400',
            'https://images.unsplash.com/photo-1571066811602-716837d681de?q=80&w=400'
        ]
    },
    {
        id: 54,
        name: 'Corned Beef',
        unit: '12 oz',
        category: 'Deli',
        price: 949,
        stock: 20,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
        rating: 4.5,
        description: 'Lean corned beef. Perfect for sandwiches and Reuben sandwiches.',
        reviews: [
            { user: 'Patrick M.', rating: 5, comment: 'Great for Reubens!' },
            { user: 'Erin S.', rating: 4, comment: 'Tasty and lean.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
            'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400',
            'https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=400'
        ]
    },
    {
        id: 55,
        name: 'Quinoa',
        unit: '2 lb bag',
        category: 'Groceries',
        price: 699,
        stock: 35,
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400',
        rating: 4.4,
        description: 'Organic white quinoa. High in protein, perfect for salads and sides.',
        reviews: [
            { user: 'Anna L.', rating: 4, comment: 'Great alternative to rice.' },
            { user: 'Mike T.', rating: 5, comment: 'Nutritious and tasty.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400',
            'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=400',
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400'
        ]
    },
    {
        id: 56,
        name: 'Almond Milk',
        unit: '1 quart',
        category: 'Beverages',
        price: 349,
        stock: 45,
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=400',
        rating: 4.2,
        description: 'Unsweetened almond milk. Dairy-free and creamy, perfect for coffee or cereal.',
        reviews: [
            { user: 'Sophie R.', rating: 4, comment: 'Smooth and natural.' },
            { user: 'James P.', rating: 4, comment: 'Good dairy alternative.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=400',
            'https://images.unsplash.com/photo-1546173159-315724a3167a?q=80&w=400',
            'https://images.unsplash.com/photo-1576092762793-c0e14b9c2a0f?q=80&w=400'
        ]
    },
    {
        id: 57,
        name: 'Dark Chocolate',
        unit: '8 oz bar',
        category: 'Snacks',
        price: 499,
        stock: 50,
        image: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=400',
        rating: 4.7,
        description: '70% dark chocolate. Rich and smooth, perfect for chocolate lovers.',
        reviews: [
            { user: 'Emma W.', rating: 5, comment: 'Perfect balance of sweetness.' },
            { user: 'David S.', rating: 4, comment: 'High quality chocolate.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=400',
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400',
            'https://images.unsplash.com/photo-1599599810694-4e0df15c6bf1?q=80&w=400'
        ]
    },
    {
        id: 58,
        name: 'Laundry Pods',
        unit: '24 pods',
        category: 'Household',
        price: 999,
        stock: 30,
        image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=400',
        rating: 4.5,
        description: 'Eco-friendly laundry pods. Convenient and effective stain removal.',
        reviews: [
            { user: 'Linda M.', rating: 5, comment: 'So easy to use!' },
            { user: 'Robert T.', rating: 4, comment: 'Works great on stains.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=400',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400',
            'https://images.unsplash.com/photo-1584208124881-74d038af6596?q=80&w=400'
        ]
    },
    {
        id: 59,
        name: 'Face Moisturizer',
        unit: '4 oz bottle',
        category: 'Personal Care',
        price: 1299,
        stock: 40,
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=400',
        rating: 4.6,
        description: 'Hydrating face moisturizer. Suitable for all skin types, with SPF 30.',
        reviews: [
            { user: 'Sarah L.', rating: 5, comment: 'Leaves skin so soft!' },
            { user: 'Mike R.', rating: 4, comment: 'Good daily moisturizer.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=400',
            'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400',
            'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?q=80&w=400'
        ]
    },
    {
        id: 60,
        name: 'Frozen Berries Mix',
        unit: '16 oz bag',
        category: 'Frozen',
        price: 599,
        stock: 25,
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=400',
        rating: 4.3,
        description: 'Mixed frozen berries. Perfect for smoothies, desserts, or snacking.',
        reviews: [
            { user: 'Nina K.', rating: 4, comment: 'Great for smoothies.' },
            { user: 'Tom H.', rating: 4, comment: 'Sweet and fresh.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=400',
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400',
            'https://images.unsplash.com/photo-1571066811602-716837d681de?q=80&w=400'
        ]
    }
];

window.productsData = productsData;

// --- State Management ---
let appState = {
    cart: [],
    wishlist: [],
    comparison: [],
    recentlyViewed: [],
    orderHistory: [],
    currentFilter: 'All',
    currentView: 'shop-view',
    currentSearchQuery: '',
    currentSort: 'name',
    minPrice: MIN_PRICE,
    maxPrice: MAX_PRICE,
    userIsAdmin: false,
    previousView: 'shop-view' // Track for back button
};

// Set the appState reference for utils module
setAppStateReference(appState);

//  Slideshow variables
let currentSlide = 0;

// Slideshow function with enhanced features
function startSlideshow() {
    const slides = document.querySelectorAll('.slide');
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slides.length === 0 || !slideshowContainer) return;

    // Reset current slide to 0
    currentSlide = 0;
    let slideshowInterval;
    let isPaused = false;

    // Create navigation dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'slideshow-dots';
    slideshowContainer.appendChild(dotsContainer);

    // Create navigation arrows
    const prevArrow = document.createElement('button');
    prevArrow.className = 'slideshow-arrow slideshow-arrow-prev';
    prevArrow.innerHTML = '‹';
    prevArrow.setAttribute('aria-label', 'Previous slide');
    slideshowContainer.appendChild(prevArrow);

    const nextArrow = document.createElement('button');
    nextArrow.className = 'slideshow-arrow slideshow-arrow-next';
    nextArrow.innerHTML = '›';
    nextArrow.setAttribute('aria-label', 'Next slide');
    slideshowContainer.appendChild(nextArrow);

    // Initialize all slides and create dots
    slides.forEach((slide, index) => {
        slide.style.opacity = index === 0 ? '1' : '0';
        slide.style.display = 'flex';
        slide.style.position = 'relative';
        slide.style.zIndex = index === 0 ? '2' : '1';
        slide.style.flexDirection = 'column';
        slide.style.justifyContent = 'center';
        slide.style.alignItems = 'center';

        // Create dot for this slide
        const dot = document.createElement('button');
        dot.className = `slideshow-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Add error handling for background images
    slides.forEach((slide, index) => {
        const img = new Image();
        const bgImage = slide.style.backgroundImage.match(/url\(["']?([^"']*)["']?\)/)?.[1];
        if (bgImage) {
            img.onload = () => {
                console.log(`Slide ${index + 1} image loaded successfully`);
            };
            img.onerror = () => {
                const title = slide.querySelector('h1')?.textContent || 'Slide';
                slide.style.backgroundImage = `url(https://placehold.co/1200x600/10b981/ffffff?text=${encodeURIComponent(title)})`;
                console.log(`Slide ${index + 1} image failed to load, using fallback`);
            };
            img.src = bgImage;
        } else {
            const title = slide.querySelector('h1')?.textContent || 'Slide';
            slide.style.backgroundImage = `url(https://placehold.co/1200x600/10b981/ffffff?text=${encodeURIComponent(title)})`;
            console.log(`Slide ${index + 1} has no background image, using fallback`);
        }
    });

    function showSlide(index, direction = 'next') {
        if (index === currentSlide) return; // Don't do anything if it's the same slide

        const currentSlideEl = slides[currentSlide];
        const nextSlideEl = slides[index];

        // Update z-index for smooth transitions
        slides.forEach((slide, i) => {
            slide.style.zIndex = i === index ? '2' : '1';
        });

        // Add transition class for smooth animation
        nextSlideEl.style.transition = 'opacity 0.8s ease-in-out';
        currentSlideEl.style.transition = 'opacity 0.8s ease-in-out';

        // Fade out current slide and fade in next slide
        currentSlideEl.style.opacity = '0';
        nextSlideEl.style.opacity = '1';

        // Update dots
        document.querySelectorAll('.slideshow-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        currentSlide = index;
    }

    function goToSlide(index) {
        if (index === currentSlide || isPaused) return;
        const direction = index > currentSlide ? 'next' : 'prev';
        showSlide(index, direction);
        resetInterval();
    }

    // Initialize first slide properly
    showSlide(0);

    function nextSlide() {
        if (isPaused) return;
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex, 'next');
    }

    function prevSlide() {
        if (isPaused) return;
        const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        showSlide(prevIndex, 'prev');
    }

    function resetInterval() {
        clearInterval(slideshowInterval);
        slideshowInterval = setInterval(nextSlide, 6000); // Increased to 6 seconds for better UX
    }

    function pauseSlideshow() {
        isPaused = true;
        clearInterval(slideshowInterval);
    }

    function resumeSlideshow() {
        isPaused = false;
        resetInterval();
    }

    // Event listeners for navigation
    nextArrow.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    prevArrow.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    // Pause on hover for better UX
    slideshowContainer.addEventListener('mouseenter', () => {
        pauseSlideshow();
        slideshowContainer.classList.add('paused');
    });
    slideshowContainer.addEventListener('mouseleave', () => {
        resumeSlideshow();
        slideshowContainer.classList.remove('paused');
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            resetInterval();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            resetInterval();
        }
    });

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    slideshowContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        pauseSlideshow();
    });

    slideshowContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 50) { // Minimum swipe distance
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            resetInterval();
        }
        resumeSlideshow();
    });

    // Start the automatic slideshow
    resetInterval();
}

// --- Utility Functions ---
// (Functions moved to modules)

// (Functions moved to modules)

// (Functions moved to modules)

// --- Core Logic ---

// (Functions moved to modules)


// (Functions moved to modules)


// --- Initialization ---

// Make initApp globally available
window.initApp = initApp;

function initApp() {
    console.log("App initializing...");

    // Load persisted data from localStorage with error handling
    updateState({
        cart: safeLocalStorageGet('cart', []),
        wishlist: safeLocalStorageGet('wishlist', []),
        recentlyViewed: safeLocalStorageGet('recentlyViewed', []),
        orderHistory: safeLocalStorageGet('orderHistory', [])
    });

    // Load view mode preference
    const savedViewMode = safeLocalStorageGet('viewMode', 'grid');
    updateState({ currentViewMode: savedViewMode });

    // Load dark mode preference
    loadDarkModePreference();

    // Initialize analytics
    updateAnalytics();

    // Simulate initial loading before rendering
    simulateLoading(500).then(() => {
        renderHomeProducts();
        renderProducts('search-products-grid', window.productsData);
        renderCart();
        updateCartCount();
        updateWishlistCount();
        updateProfileUI();

        const allFilter = document.querySelector('.filter-btn[data-category="All"]');
        if (allFilter) {
            allFilter.classList.add('active');
        }

        const slideshowTrack = document.getElementById('slideshow-track');
        if (slideshowTrack) {
            // Array of slide data
            const slideData = [
                {
                    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=1200&h=600&fit=crop&auto=format&q=80',
                    title: 'Freshness Delivered',
                    subtitle: 'Curated selection, straight to your door'
                },
                {
                    image: 'https://images.unsplash.com/photo-1563377225929-7084bcef8e24?w=1200&h=600&fit=crop&auto=format&q=80',
                    title: 'Sustainable Shopping',
                    subtitle: 'High quality products, responsibly sourced'
                },
                {
                    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop&auto=format&q=80',
                    title: 'Premium Quality',
                    subtitle: 'Only the finest ingredients for your table'
                },
                {
                    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop&auto=format&q=80',
                    title: 'Healthy Living',
                    subtitle: 'Nutritious choices for a better lifestyle'
                },
                {
                    image: 'https://images.unsplash.com/photo-1556909114-2c3e5a9a8e8e?w=1200&h=600&fit=crop&auto=format&q=80',
                    title: 'Local & Fresh',
                    subtitle: 'Supporting local farmers and producers'
                },
                {
                    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop&auto=format&q=80',
                    title: 'Quality Assured',
                    subtitle: 'Every product meets our high standards'
                }
            ];

            // Use slides in order (no shuffling)
            const shuffledSlides = [...slideData];

            // Generate HTML for shuffled slides
            slideshowTrack.innerHTML = shuffledSlides.map(slide => `
                <div class="slide" style="background-image: url('${slide.image}');">
                    <h1>${slide.title}</h1>
                    <p>${slide.subtitle}</p>
                </div>
            `).join('');

            // Start the automatic slideshow after content is rendered
            startSlideshow();
        }

        // Show promotion modal after a short delay (1.5 seconds)
        setTimeout(showPromotionModal, 1500);

        // Set initial view state
        document.getElementById(DETAIL_VIEW).style.display = 'none';
        document.getElementById('admin-view').style.display = 'none';
        document.getElementById('search-view').style.display = 'none';
        document.getElementById('shop-view').style.display = 'block';

        document.querySelector(`.mobile-nav-item[onclick*="showShopView"]`).classList.add('active');
        console.log("App initialization complete.");
    });
}