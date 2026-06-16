// Glengala Fresh — Shop JavaScript
// Complete rewrite: 2026-06-16
// Features: cart, customer details, SMS order, dark mode, search

const PHONE_NUMBER = "0434694141";
const DELIVERY_FEE = 8.00;
const FREE_DELIVERY_OVER = 50.00;

class GlengalaShop {
    constructor() {
        this.cart = [];
        this.filteredProducts = [];
        this.expandedCategories = new Set();
        this.customerDetails = {};
        this.init();
    }

    init() {
        loadProducts();
        this.loadAllData();
        this.renderShop();
        this.setupEventListeners();
        this.setupMobileOptimizations();
    }

    setupEventListeners() {
        document.getElementById('shopSearch').addEventListener('input', (e) => {
            this.searchProducts(e.target.value);
        });

        // Touch-friendly cart
        const cartSummary = document.getElementById('cartSummary');
        let touchStartY = 0;
        cartSummary.addEventListener('touchstart', (e) => { touchStartY = e.touches[0].clientY; });
        cartSummary.addEventListener('touchmove', (e) => {
            const deltaY = touchStartY - e.touches[0].clientY;
            if (deltaY > 50) cartSummary.classList.add('expanded');
            else if (deltaY < -50) cartSummary.classList.remove('expanded');
        });

        window.addEventListener('beforeunload', () => this.saveAllData());
    }

    setupMobileOptimizations() {
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.addEventListener('focus', () => { input.style.fontSize = '16px'; });
            input.addEventListener('blur', () => { input.style.fontSize = ''; });
        });
    }

    getActiveProducts() {
        return products.filter(p => p.active && p.name.trim() !== "");
    }

    getProductsByCategory(category) {
        return this.getActiveProducts()
            .filter(p => p.category === category)
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    renderShop() {
        ['vegetables', 'fruits', 'herbs', 'eggs', 'juices', 'nuts'].forEach(cat => {
            this.renderCategory(cat);
        });
        this.updateCartDisplay();
    }

    renderCategory(category) {
        const container = document.getElementById(`${category}Products`);
        const categoryProducts = this.getProductsByCategory(category);
        if (categoryProducts.length === 0) {
            container.innerHTML = '<div class="no-products">No items available in this category</div>';
            return;
        }
        container.innerHTML = categoryProducts.map(p => this.createProductCard(p)).join('');
    }

    createProductCard(product) {
        const qtyOpts = this.getQuantityOptions(product);
        const emoji = this.getProductEmoji(product);
        const unitLabel = unitDisplay[product.unit] || product.unit;
        const sizeLabel = this.getSizeLabel(product);

        return `
            <div class="product-card fade-in">
                ${product.mostPopular ? '<div class="special-badge">🔥 Popular</div>' : ''}
                ${product.hasSpecial ? `<div class="special-badge" style="background:#dd6b20;">2 for $${product.specialPrice.toFixed(2)}</div>` : ''}
                <div class="product-photo">
                    ${product.photo ? `<img src="${product.photo}" alt="${product.name}">` : emoji}
                </div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-unit">${sizeLabel}</div>
                <div class="quantity-selector">
                    <input type="number" id="qty-${product.id}" class="quantity-input"
                        value="${qtyOpts.min}" min="${qtyOpts.min}" max="${qtyOpts.max}" step="${qtyOpts.step}">
                    <div class="quantity-controls">
                        <button class="quantity-btn up-btn" onclick="shop.updateQuantity(${product.id}, 1)">▲</button>
                        <button class="quantity-btn down-btn" onclick="shop.updateQuantity(${product.id}, -1)">▼</button>
                    </div>
                </div>
                <button class="add-to-cart" onclick="shop.addToCart(${product.id})">🛒 Add to Cart</button>
            </div>`;
    }

    getSizeLabel(product) {
        if (product.unit === 'ml300') return '300ml bottle';
        if (product.unit === 'ml500') return '500ml bottle';
        if (product.unit === 'ml1000') return '1L bottle';
        if (product.unit === 'kg') return 'per kg';
        if (product.unit === 'each') return 'each';
        if (product.unit === 'bunch') return 'per bunch';
        if (product.unit === 'punnet') return 'per punnet';
        if (product.unit === 'dozen') return 'per dozen';
        return product.unit;
    }

    getProductEmoji(product) {
        const emojis = {
            'vegetables': '🥬', 'fruits': '🍎', 'herbs': '🌿',
            'juices': '🧃', 'nuts': '🥜', 'eggs': '🥚'
        };
        return emojis[product.category] || '🥒';
    }

    getQuantityOptions(product) {
        const opts = {
            'kg': { step: 0.5, min: 0.5, max: 20 },
            'each': { step: 1, min: 1, max: 50 },
            'bunch': { step: 1, min: 1, max: 10 },
            'punnet': { step: 1, min: 1, max: 20 },
            'dozen': { step: 1, min: 1, max: 10 },
            'ml300': { step: 1, min: 1, max: 20 },
            'ml500': { step: 1, min: 1, max: 20 },
            'ml1000': { step: 1, min: 1, max: 10 }
        };
        return opts[product.unit] || { step: 1, min: 1, max: 10 };
    }

    updateQuantity(productId, change) {
        const input = document.getElementById(`qty-${productId}`);
        const product = products.find(p => p.id === productId);
        const opts = this.getQuantityOptions(product);
        let val = parseFloat(input.value) + change;
        val = Math.max(opts.min, Math.min(opts.max, val));
        if (opts.step === 0.1) val = Math.round(val * 10) / 10;
        else if (opts.step < 1) val = Math.round(val * 2) / 2;
        else val = Math.round(val);
        input.value = val;
    }

    addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        const quantity = parseFloat(document.getElementById(`qty-${productId}`).value);
        const existingIndex = this.cart.findIndex(item => item.id === productId);
        if (existingIndex > -1) {
            this.cart[existingIndex].quantity += quantity;
            this.cart[existingIndex].total = this.cart[existingIndex].price * this.cart[existingIndex].quantity;
        } else {
            this.cart.push({
                id: product.id, name: product.name, price: product.price,
                unit: product.unit, quantity: quantity,
                total: product.price * quantity
            });
        }
        this.saveAllData();
        this.updateCartDisplay();
        this.showNotification(`✅ ${product.name} added to cart!`);
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveAllData();
        this.updateCartDisplay();
    }

    updateCartDisplay() {
        const cartItems = document.getElementById('cartItems');
        const cartCount = document.getElementById('cartCount');
        const cartTotal = document.getElementById('cartTotal');
        if (this.cart.length === 0) {
            cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
            cartCount.textContent = '0';
            cartTotal.textContent = 'Total: $0.00';
            return;
        }
        cartItems.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <div>
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-quantity">${item.quantity} × ${unitDisplay[item.unit] || item.unit}</div>
                </div>
                <div style="text-align:right;">
                    <div class="cart-item-price">$${item.total.toFixed(2)}</div>
                    <button onclick="shop.removeFromCart(${item.id})" style="background:none;border:none;color:#e53e3e;cursor:pointer;font-size:1.1em;padding:4px;">✕</button>
                </div>
            </div>
        `).join('');
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = this.cart.reduce((sum, item) => sum + item.total, 0);
        cartCount.textContent = totalItems;
        const delivery = totalPrice >= FREE_DELIVERY_OVER ? 0 : DELIVERY_FEE;
        cartTotal.innerHTML = `Subtotal: $${totalPrice.toFixed(2)}${delivery > 0 ? `<br>+ $${delivery.toFixed(2)} delivery` : '<br>🚚 FREE delivery!'}<br><strong>Total: $${(totalPrice + delivery).toFixed(2)}</strong>`;
    }

    searchProducts(query) {
        if (!query.trim()) { this.renderShop(); return; }
        const allActive = this.getActiveProducts();
        const results = allActive.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
        const categoriesWithResults = new Set(results.map(p => p.category));
        ['vegetables', 'fruits', 'herbs', 'eggs', 'juices', 'nuts'].forEach(cat => {
            if (categoriesWithResults.has(cat)) {
                this.expandCategory(cat);
                this.renderCategoryWithResults(cat, results);
            } else {
                this.collapseCategory(cat);
            }
        });
    }

    renderCategoryWithResults(category, searchResults) {
        const container = document.getElementById(`${category}Products`);
        const catResults = searchResults.filter(p => p.category === category);
        if (catResults.length === 0) {
            container.innerHTML = '<div class="no-products">No items found</div>';
            return;
        }
        container.innerHTML = catResults.map(p => this.createProductCard(p)).join('');
    }

    showNotification(text) {
        const n = document.createElement('div');
        n.innerHTML = text;
        n.style.cssText = `position:fixed;top:20px;left:50%;transform:translateX(-50%);background:#38a169;color:white;padding:12px 24px;border-radius:8px;font-weight:700;z-index:2000;animation:slideDown 0.3s ease;max-width:90vw;text-align:center;font-size:0.9rem;box-shadow:0 4px 12px rgba(0,0,0,0.2);`;
        document.body.appendChild(n);
        setTimeout(() => n.remove(), 2500);
    }

    // ── Checkout Flow ──
    checkout() {
        if (this.cart.length === 0) { alert("Your cart is empty!"); return; }
        this.showOrderSummary();
    }

    showOrderSummary() {
        const totalPrice = this.cart.reduce((sum, item) => sum + item.total, 0);
        const delivery = totalPrice >= FREE_DELIVERY_OVER ? 0 : DELIVERY_FEE;
        const grandTotal = totalPrice + delivery;
        const orderDate = new Date().toLocaleDateString("en-AU", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
        const orderNumber = "GF" + Date.now().toString().slice(-8);

        const html = `
            <div class="order-summary-overlay" id="orderSummaryOverlay">
                <div class="order-summary-container">
                    <div class="order-summary-header">
                        <h2>🌱 Order Summary</h2>
                        <button class="close-btn" onclick="closeOrderSummary()">✕</button>
                    </div>
                    <div class="order-info">
                        <div class="order-number">Order #${orderNumber}</div>
                        <div class="order-date">${orderDate}</div>
                    </div>

                    <!-- Customer Details Form -->
                    <div class="customer-form">
                        <h4>📋 Your Details</h4>
                        <div class="form-group">
                            <label>Name *</label>
                            <input type="text" id="custName" placeholder="Your name" value="${this.customerDetails.name || ''}">
                        </div>
                        <div class="form-group">
                            <label>Phone *</label>
                            <input type="tel" id="custPhone" placeholder="Your phone number" value="${this.customerDetails.phone || ''}">
                        </div>
                        <div class="form-group">
                            <label>Delivery Address *</label>
                            <input type="text" id="custAddress" placeholder="Street address, suburb" value="${this.customerDetails.address || ''}">
                        </div>
                        <div class="form-group">
                            <label>Delivery Notes (optional)</label>
                            <textarea id="custNotes" placeholder="Leave on porch, call on arrival, etc.">${this.customerDetails.notes || ''}</textarea>
                        </div>
                    </div>

                    <!-- Order Items -->
                    <div class="order-items">
                        <h3>Items</h3>
                        ${this.cart.map(item => `
                            <div class="order-item">
                                <div class="item-name">${item.name}</div>
                                <div class="item-details">
                                    <span>${item.quantity} × ${unitDisplay[item.unit] || item.unit}</span>
                                    <span>$${item.total.toFixed(2)}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="order-total">
                        <div>
                            Subtotal:<br>
                            ${delivery > 0 ? `Delivery:$${delivery.toFixed(2)}<br>` : '🚚 FREE delivery<br>'}
                        </div>
                        <div class="total-amount">$${grandTotal.toFixed(2)}</div>
                    </div>

                    <div class="order-actions">
                        <button class="copy-order-btn" onclick="copyOrderToClipboard()">📋 Copy Order</button>
                        <button class="text-order-btn" onclick="proceedToTextOrder()">📱 Send via Text</button>
                    </div>
                </div>
            </div>`;

        document.body.insertAdjacentHTML('beforeend', html);

        this.currentOrder = {
            orderNumber, orderDate, items: this.cart, total: grandTotal, delivery,
            formattedText: this.formatOrderForText(orderNumber, orderDate, this.cart, totalPrice, delivery, grandTotal, {})
        };
    }

    formatOrderForText(orderNumber, orderDate, cart, subtotal, delivery, grandTotal, customer) {
        const items = cart.map(item =>
            `• ${item.name} — ${item.quantity} ${unitDisplay[item.unit] || item.unit} — $${item.total.toFixed(2)}`
        ).join("\n");

        let text = `🌱 GLENGALA FRESH — ORDER\n`;
        text += `\nOrder #${orderNumber} | ${orderDate}\n`;
        if (customer.name) text += `\nCustomer: ${customer.name}`;
        if (customer.phone) text += `\nPhone: ${customer.phone}`;
        if (customer.address) text += `\nAddress: ${customer.address}`;
        if (customer.notes) text += `\nNotes: ${customer.notes}`;
        text += `\n\nITEMS:\n${items}`;
        text += `\n\nSubtotal: $${subtotal.toFixed(2)}`;
        if (delivery > 0) text += `\nDelivery: $${delivery.toFixed(2)}`;
        else text += `\nDelivery: FREE`;
        text += `\nTOTAL: $${grandTotal.toFixed(2)}`;
        text += `\n\nPlease confirm delivery time. Thank you! 🌱`;
        return text;
    }

    // ── Category Management ──
    expandCategory(category) {
        const content = document.getElementById(`${category}Content`);
        const header = content.previousElementSibling;
        header.classList.add('active');
        content.classList.add('expanded');
        this.expandedCategories.add(category);
    }

    collapseCategory(category) {
        const content = document.getElementById(`${category}Content`);
        const header = content.previousElementSibling;
        header.classList.remove('active');
        content.classList.remove('expanded');
        this.expandedCategories.delete(category);
    }

    toggleCategory(category) {
        if (this.expandedCategories.has(category)) this.collapseCategory(category);
        else this.expandCategory(category);
    }

    // ── Persistence ──
    saveAllData() {
        localStorage.setItem('glengalaShopData', JSON.stringify({
            cart: this.cart,
            expandedCategories: Array.from(this.expandedCategories),
            customerDetails: this.customerDetails,
            lastVisit: new Date().toISOString()
        }));
    }

    loadAllData() {
        const saved = localStorage.getItem('glengalaShopData');
        if (saved) {
            const data = JSON.parse(saved);
            this.cart = data.cart || [];
            this.expandedCategories = new Set(data.expandedCategories || []);
            this.customerDetails = data.customerDetails || {};
        }
    }
}

// ── Global Functions ──
let shop;
document.addEventListener('DOMContentLoaded', () => { shop = new GlengalaShop(); });

function toggleCart() {
    const cart = document.getElementById('cartSummary');
    const icon = document.getElementById('cartToggleIcon');
    if (cart.classList.contains('expanded')) {
        cart.classList.remove('expanded');
        icon.textContent = '▲';
    } else {
        cart.classList.add('expanded');
        icon.textContent = '▼';
    }
}

function toggleCategory(category) { shop.toggleCategory(category); }

function closeOrderSummary() {
    const overlay = document.getElementById("orderSummaryOverlay");
    if (overlay) overlay.remove();
}

function copyOrderToClipboard() {
    const order = shop.currentOrder;
    // Build text with customer details
    const name = document.getElementById('custName')?.value || '';
    const phone = document.getElementById('custPhone')?.value || '';
    const address = document.getElementById('custAddress')?.value || '';
    const notes = document.getElementById('custNotes')?.value || '';
    const text = shop.formatOrderForText(order.orderNumber, order.orderDate, order.items, order.total - order.delivery, order.delivery, order.total, { name, phone, address, notes });
    navigator.clipboard.writeText(text).then(() => {
        alert("📋 Order copied! Paste it into any message app.");
    }).catch(() => {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        alert("📋 Order copied to clipboard!");
    });
}

function proceedToTextOrder() {
    // Save customer details
    shop.customerDetails = {
        name: document.getElementById('custName')?.value || '',
        phone: document.getElementById('custPhone')?.value || '',
        address: document.getElementById('custAddress')?.value || '',
        notes: document.getElementById('custNotes')?.value || ''
    };
    shop.saveAllData();

    const order = shop.currentOrder;
    const name = shop.customerDetails.name;
    const phone = shop.customerDetails.phone;
    const address = shop.customerDetails.address;
    const notes = shop.customerDetails.notes;
    const text = shop.formatOrderForText(order.orderNumber, order.orderDate, order.items, order.total - order.delivery, order.delivery, order.total, { name, phone, address, notes });

    const smsLink = `sms:${PHONE_NUMBER}?body=${encodeURIComponent(text)}`;
    window.location.href = smsLink;

    setTimeout(() => {
        alert(`📱 To send your order via text:\n\n1. Your SMS app should have opened\n2. If not, send to: ${PHONE_NUMBER}\n3. The order details are ready to paste\n\nOr call us directly: ${PHONE_NUMBER}`);
    }, 1500);
}

// ── Dark Mode ──
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('themeIcon');
    const text = document.getElementById('themeText');
    if (document.body.classList.contains('dark-mode')) {
        icon.textContent = '🌙';
        text.textContent = 'Dark';
        localStorage.setItem('glengalaDarkMode', 'true');
    } else {
        icon.textContent = '☀️';
        text.textContent = 'Light';
        localStorage.setItem('glengalaDarkMode', 'false');
    }
}

// Load dark mode preference
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('glengalaDarkMode') === 'true') {
        document.body.classList.add('dark-mode');
        const icon = document.getElementById('themeIcon');
        const text = document.getElementById('themeText');
        if (icon) icon.textContent = '🌙';
        if (text) text.textContent = 'Dark';
    }
});

// ── Story Modal ──
function showOurStory() {
    document.getElementById('ourStoryModal').style.display = 'flex';
}
function closeOurStory() {
    document.getElementById('ourStoryModal').style.display = 'none';
}
