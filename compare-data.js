// Glengala Fresh — Price Comparison Data
// 30 key products tracked weekly against Coles & Woolworths
// Last updated: 2026-06-16
// Prices in AUD. Chain prices are indicative (standard price, not special).

const compareData = [
    // ═══ VEGETABLES ═══
    { name: "Red capsicum", unit: "kg", you: 4.99, coles: 12.41, woolies: 11.90, category: "veg" },
    { name: "Green capsicum", unit: "kg", you: 3.99, coles: 8.90, woolies: 7.90, category: "veg" },
    { name: "Brushed potatoes", unit: "kg", you: 1.99, coles: 3.85, woolies: 3.93, category: "veg" },
    { name: "Washed potatoes", unit: "kg", you: 2.49, coles: 4.50, woolies: 4.20, category: "veg" },
    { name: "Brown onions", unit: "kg", you: 2.49, coles: 4.20, woolies: 3.50, category: "veg" },
    { name: "Red onions", unit: "kg", you: 3.99, coles: 5.50, woolies: 4.90, category: "veg" },
    { name: "Broccoli", unit: "kg", you: 3.99, coles: 6.90, woolies: 5.90, category: "veg" },
    { name: "Cauliflower", unit: "each", you: 3.99, coles: 5.90, woolies: 5.50, category: "veg" },
    { name: "Carrots, loose", unit: "kg", you: 1.99, coles: 2.90, woolies: 2.50, category: "veg" },
    { name: "Sweet potato", unit: "kg", you: 3.99, coles: 5.90, woolies: 5.50, category: "veg" },
    { name: "Butternut pumpkin", unit: "kg", you: 2.49, coles: 3.90, woolies: 3.50, category: "veg" },
    { name: "Zucchini", unit: "kg", you: 2.99, coles: 5.90, woolies: 4.90, category: "veg" },
    { name: "Eggplant", unit: "kg", you: 2.99, coles: 6.90, woolies: 5.90, category: "veg" },
    { name: "Gourmet tomatoes", unit: "kg", you: 3.49, coles: 5.90, woolies: 5.50, category: "veg" },
    { name: "Cherry tomato punnet", unit: "punnet", you: 3.49, coles: 4.90, woolies: 4.50, category: "veg" },
    { name: "Lebanese cucumber", unit: "kg", you: 7.99, coles: 12.90, woolies: 11.90, category: "veg" },
    { name: "Continental cucumber", unit: "each", you: 1.59, coles: 2.90, woolies: 2.50, category: "veg" },
    { name: "Celery", unit: "bunch", you: 2.99, coles: 4.90, woolies: 4.50, category: "veg" },
    { name: "Green beans", unit: "kg", you: 4.99, coles: 8.90, woolies: 7.90, category: "veg" },
    { name: "Mushrooms", unit: "kg", you: 12.99, coles: 18.90, woolies: 16.90, category: "veg" },

    // ═══ FRUITS ═══
    { name: "Bananas", unit: "kg", you: 3.49, coles: 3.80, woolies: 3.20, category: "fruit" },
    { name: "Granny Smith apples", unit: "kg", you: 3.49, coles: 4.90, woolies: 4.50, category: "fruit" },
    { name: "Pink Lady apples", unit: "kg", you: 3.49, coles: 4.90, woolies: 4.50, category: "fruit" },
    { name: "Navel oranges", unit: "kg", you: 1.99, coles: 5.50, woolies: 4.90, category: "fruit" },
    { name: "Lemons", unit: "kg", you: 2.99, coles: 4.90, woolies: 4.50, category: "fruit" },
    { name: "Avocados, large", unit: "each", you: 1.99, coles: 1.50, woolies: 1.30, category: "fruit" },
    { name: "Strawberries", unit: "punnet", you: 3.49, coles: 4.90, woolies: 4.50, category: "fruit" },
    { name: "Pineapples", unit: "each", you: 2.99, coles: 3.90, woolies: 3.50, category: "fruit" },
    { name: "Watermelon", unit: "kg", you: 2.49, coles: 3.90, woolies: 3.50, category: "fruit" },
    { name: "Grapes, red", unit: "kg", you: 3.99, coles: 6.90, woolies: 5.90, category: "fruit" },
];

function renderCompareTable() {
    const tbody = document.getElementById('compareTableBody');
    let wins = 0, losses = 0, close = 0;

    tbody.innerHTML = compareData.map(item => {
        const prices = [item.you, item.coles, item.woolies];
        const min = Math.min(...prices);
        const max = Math.max(...prices);
        const savings = item.coles > 0 ? Math.round((1 - item.you / item.coles) * 100) : 0;

        let cheapestHtml;
        let rowClass = '';
        let badge = '';

        if (item.you <= item.coles && item.you <= item.woolies) {
            cheapestHtml = `<span class="price-you">$${item.you.toFixed(2)}</span> <span class="badge-win">✅ YOU</span>`;
            rowClass = 'winner-you';
            wins++;
            if (savings > 10) badge = `<br><span class="savings">Save ${savings}% vs Coles</span>`;
        } else if (Math.abs(item.you - min) < 0.3) {
            cheapestHtml = `<span class="price-you">$${item.you.toFixed(2)}</span> <span class="badge-close">🤝 Close</span>`;
            close++;
        } else {
            cheapestHtml = `<span class="price-chain">$${min.toFixed(2)}</span> <span class="badge-lose">❌ Chains</span>`;
            rowClass = 'winner-chain';
            losses++;
        }

        return `
            <tr class="${rowClass}">
                <td>${item.name}</td>
                <td><span class="price-you">$${item.you.toFixed(2)}</span></td>
                <td><span class="price-chain">$${item.coles.toFixed(2)}</span></td>
                <td><span class="price-chain">$${item.woolies.toFixed(2)}</span></td>
                <td>${cheapestHtml}${badge}</td>
            </tr>`;
    }).join('');

    document.getElementById('winCount').textContent = wins;
    document.getElementById('closeCount').textContent = close;
    document.getElementById('loseCount').textContent = losses;
    document.getElementById('updateDate').textContent = new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
}
