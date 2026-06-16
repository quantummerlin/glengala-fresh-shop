// Glengala Fresh — Translations
// Placeholder for future i18n support
// Currently English only

const translations = {
    en: {
        shopTitle: "Glengala Fresh",
        shopDetails: "Fresh Produce & Cold-Pressed Juice • Sunshine 3020",
        vegetables: "Fresh Vegetables",
        fruits: "Fresh Fruits",
        herbs: "Herbs, Salads & Greens",
        eggs: "Eggs",
        juices: "Fresh Juices & Beverages",
        nuts: "Nuts, Dried Fruit & Legumes",
        addToCart: "🛒 Add to Cart",
        cart: "Cart",
        confirmOrder: "Confirm Order",
        emptyCart: "Your cart is empty",
        orderSummary: "Order Summary",
        copyOrder: "📋 Copy Order",
        sendText: "📱 Send via Text",
        total: "Total",
        searchPlaceholder: "🔍 Search fresh produce & juice..."
    },
    el: {
        shopTitle: "Glengala Fresh",
        shopDetails: "Φρέσκα Πρϊόντα & Χυμοί • Sunshine 3020",
        vegetables: "Φρέσκα Λαχανικά",
        fruits: "Φρέσκα Φρούτα",
        herbs: "Μυρωδικά, Σαλάτες & Πράσινα",
        eggs: "Αυγά",
        juices: "Φρέσκοι Χυμοί & Ποτά",
        nuts: "Ξηροί Καρποί & Όσπρια",
        addToCart: "🛒 Προσθήκη στο Καλάθι",
        cart: "Καλάθι",
        confirmOrder: "Επιβεβαίωση Παραγγελίας",
        emptyCart: "Το καλάθι σας είναι άδειο",
        orderSummary: "Σύνοψη Παραγγελίας",
        copyOrder: "📋 Αντιγραφή",
        sendText: "📱 Αποστολή με SMS",
        total: "Σύνολο",
        searchPlaceholder: "🔍 Αναζήτηση..."
    },
    vi: {
        shopTitle: "Glengala Fresh",
        shopDetails: "Nông Sản Tươi & Nước Ép • Sunshine 3020",
        vegetables: "Rau Củ Tươi",
        fruits: "Trái Cây Tươi",
        herbs: "Rau Thơm, Xà Lách & Rau Xanh",
        eggs: "Trứng",
        juices: "Nước Ép & Đồ Uống",
        nuts: "Hạt, Trái Cây Khô & Đậu",
        addToCart: "🛒 Thêm vào Giỏ",
        cart: "Giỏ Hàng",
        confirmOrder: "Xác Nhận Đơn Hàng",
        emptyCart: "Giỏ hàng trống",
        orderSummary: "Tóm Tắt Đơn Hàng",
        copyOrder: "📋 Sao Chép",
        sendText: "📱 Gửi qua SMS",
        total: "Tổng",
        searchPlaceholder: "🔍 Tìm kiếm..."
    }
};

function applyTranslations(lang) {
    const t = translations[lang] || translations.en;
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key]) el.textContent = t[key];
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            applyTranslations(e.target.value);
            localStorage.setItem('glengalaLang', e.target.value);
        });
        const saved = localStorage.getItem('glengalaLang');
        if (saved) {
            langSelect.value = saved;
            applyTranslations(saved);
        }
    }
});
