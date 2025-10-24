// Utility functions - appState will be passed from main script
let appStateRef = null;

export function setAppStateReference(state) {
    appStateRef = state;
}

export function updateState(updates) {
    if (!appStateRef) {
        console.error('appState reference not set');
        return;
    }
    Object.assign(appStateRef, updates);
}

export function getState() {
    return appStateRef;
}

// Debounce function for search input
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Error handling for localStorage
export function safeLocalStorageGet(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.error(`Error reading from localStorage for key "${key}":`, error);
        return defaultValue;
    }
}

export function safeLocalStorageSet(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error writing to localStorage for key "${key}":`, error);
    }
}

// Firebase error handling
export function handleFirebaseError(error) {
    console.error('Firebase error:', error);
    showMessage('Connection error. Please try again later.', 'danger');
}

// Focus management for accessibility
export function trapFocus(container) {
    const focusableElements = container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    function handleKeyDown(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    }

    container.addEventListener('keydown', handleKeyDown);
    firstElement.focus();

    return () => container.removeEventListener('keydown', handleKeyDown);
}

// Constants
export const DETAIL_VIEW = 'product-detail-view';
export const SLIDE_COUNT = 5;
export const MIN_PRICE = 0;
export const MAX_PRICE = 100;