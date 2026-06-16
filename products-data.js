// Glengala Fresh — Product Database
// Prices sourced from inventory-system.md (single source of truth)
// Last updated: 2026-06-16
let products = [
    // ═══════════════════════════════════════
    // VEGETABLES
    // ═══════════════════════════════════════
    { id: 1, name: "Beetroot", category: "vegetables", price: 3.49, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 2, name: "Carrots, loose", category: "vegetables", price: 1.99, unit: "kg", active: true, mostPopular: true, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 3, name: "Carrots, 1kg bag", category: "vegetables", price: 1.99, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 4, name: "Brushed potatoes, loose", category: "vegetables", price: 1.99, unit: "kg", active: true, mostPopular: true, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 5, name: "Brushed potatoes, 5kg bag", category: "vegetables", price: 6.99, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 6, name: "Washed potatoes, loose", category: "vegetables", price: 2.49, unit: "kg", active: true, mostPopular: true, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 7, name: "Washed potatoes, 5kg bag", category: "vegetables", price: 9.99, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 8, name: "Red/Desiree potatoes, loose", category: "vegetables", price: 2.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 9, name: "Red/Desiree potatoes, 5kg bag", category: "vegetables", price: 9.99, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 10, name: "Brown onions, loose", category: "vegetables", price: 2.49, unit: "kg", active: true, mostPopular: true, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 11, name: "Brown onions, 1kg bag", category: "vegetables", price: 1.99, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 12, name: "Brown onions, 10kg bag", category: "vegetables", price: 15.00, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 13, name: "Red onions, loose", category: "vegetables", price: 3.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 14, name: "Red onions, 2kg bag", category: "vegetables", price: 7.99, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 15, name: "Leeks", category: "vegetables", price: 2.99, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: true, specialPrice: 4.50, specialQuantity: 2, specialUnit: "each" },
    { id: 16, name: "Garlic, Australian loose", category: "vegetables", price: 19.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 17, name: "Garlic, imported bag", category: "vegetables", price: 3.99, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 18, name: "Cauliflower", category: "vegetables", price: 3.99, unit: "each", active: true, mostPopular: true, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 19, name: "Broccoli", category: "vegetables", price: 3.99, unit: "kg", active: true, mostPopular: true, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 20, name: "Green cabbage", category: "vegetables", price: 4.99, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 21, name: "Red cabbage", category: "vegetables", price: 4.99, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 22, name: "Savoy cabbage", category: "vegetables", price: 4.99, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 23, name: "Sweet potato, gold", category: "vegetables", price: 3.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 24, name: "Sweet potato, red", category: "vegetables", price: 3.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 25, name: "Butternut pumpkin", category: "vegetables", price: 2.49, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 26, name: "Japanese pumpkin", category: "vegetables", price: 2.49, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 27, name: "Zucchini", category: "vegetables", price: 2.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 28, name: "Eggplant, round", category: "vegetables", price: 2.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 29, name: "Red capsicum", category: "vegetables", price: 4.99, unit: "kg", active: true, mostPopular: true, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 30, name: "Green capsicum", category: "vegetables", price: 3.99, unit: "kg", active: true, mostPopular: true, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 31, name: "Yellow sweet chili", category: "vegetables", price: 8.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 32, name: "Green beans", category: "vegetables", price: 4.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 33, name: "Mushrooms", category: "vegetables", price: 12.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 34, name: "Celery", category: "vegetables", price: 2.99, unit: "bunch", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 35, name: "Gourmet tomatoes", category: "vegetables", price: 3.49, unit: "kg", active: true, mostPopular: true, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 36, name: "Roma tomatoes", category: "vegetables", price: 7.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 37, name: "Truss tomatoes", category: "vegetables", price: 7.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 38, name: "Cherry tomato punnet", category: "vegetables", price: 3.49, unit: "punnet", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 39, name: "Lebanese cucumber", category: "vegetables", price: 7.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 40, name: "Continental cucumber", category: "vegetables", price: 1.59, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 41, name: "Corn", category: "vegetables", price: 1.99, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 42, name: "Artichoke, small", category: "vegetables", price: 1.99, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: true, specialPrice: 3.00, specialQuantity: 2, specialUnit: "each" },
    { id: 43, name: "Artichoke, large", category: "vegetables", price: 3.49, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 44, name: "Asparagus", category: "vegetables", price: 1.99, unit: "bunch", active: true, mostPopular: false, photo: "", hasSpecial: true, specialPrice: 3.00, specialQuantity: 2, specialUnit: "bunch" },

    // ═══════════════════════════════════════
    // FRUITS
    // ═══════════════════════════════════════
    { id: 50, name: "Bananas", category: "fruits", price: 3.49, unit: "kg", active: true, mostPopular: true, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 51, name: "Granny Smith apples", category: "fruits", price: 3.49, unit: "kg", active: true, mostPopular: true, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 52, name: "Pink Lady apples", category: "fruits", price: 3.49, unit: "kg", active: true, mostPopular: true, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 53, name: "Royal Gala apples", category: "fruits", price: 3.49, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 54, name: "Navel oranges, large", category: "fruits", price: 1.99, unit: "kg", active: true, mostPopular: true, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 55, name: "Navel oranges, small", category: "fruits", price: 3.00, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 56, name: "Navel oranges, bag", category: "fruits", price: 5.00, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 57, name: "Navel oranges, box (10kg)", category: "fruits", price: 14.00, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 58, name: "Daisy mandarins", category: "fruits", price: 3.49, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 59, name: "Imperial mandarins", category: "fruits", price: 3.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 60, name: "Lemons", category: "fruits", price: 2.99, unit: "kg", active: true, mostPopular: true, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 61, name: "Limes", category: "fruits", price: 6.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 62, name: "Avocados, large", category: "fruits", price: 1.99, unit: "each", active: true, mostPopular: true, photo: "", hasSpecial: true, specialPrice: 3.50, specialQuantity: 2, specialUnit: "each" },
    { id: 63, name: "Avocados, medium", category: "fruits", price: 1.79, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: true, specialPrice: 3.00, specialQuantity: 2, specialUnit: "each" },
    { id: 64, name: "Pineapples", category: "fruits", price: 2.99, unit: "each", active: true, mostPopular: true, photo: "", hasSpecial: true, specialPrice: 5.00, specialQuantity: 2, specialUnit: "each" },
    { id: 65, name: "Strawberries", category: "fruits", price: 3.49, unit: "punnet", active: true, mostPopular: true, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 66, name: "Blueberries", category: "fruits", price: 4.99, unit: "punnet", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 67, name: "Raspberries", category: "fruits", price: 5.99, unit: "punnet", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 68, name: "Blackberries", category: "fruits", price: 5.99, unit: "punnet", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 69, name: "Watermelon", category: "fruits", price: 2.49, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 70, name: "Rockmelon", category: "fruits", price: 3.99, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 71, name: "Seedless watermelon", category: "fruits", price: 2.49, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 72, name: "Packham pears", category: "fruits", price: 2.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 73, name: "Corella pears", category: "fruits", price: 3.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 74, name: "Gold kiwi", category: "fruits", price: 9.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 75, name: "Grapes, red", category: "fruits", price: 3.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 76, name: "Grapes, black", category: "fruits", price: 3.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 77, name: "Grapes, Jewel", category: "fruits", price: 8.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 78, name: "Passionfruit", category: "fruits", price: 8.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 79, name: "Persimmons", category: "fruits", price: 2.00, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: true, specialPrice: 3.00, specialQuantity: 2, specialUnit: "each" },
    { id: 80, name: "Chestnuts", category: "fruits", price: 4.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },

    // ═══════════════════════════════════════
    // HERBS, SALADS & GREENS
    // ═══════════════════════════════════════
    { id: 85, name: "Salad mix, bag", category: "herbs", price: 1.99, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 86, name: "Baby spinach, bag", category: "herbs", price: 1.99, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 87, name: "Rocket", category: "herbs", price: 1.99, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 88, name: "Spring onion", category: "herbs", price: 1.49, unit: "bunch", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 89, name: "Continental parsley", category: "herbs", price: 1.49, unit: "bunch", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 90, name: "Coriander", category: "herbs", price: 1.49, unit: "bunch", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 91, name: "Basil", category: "herbs", price: 1.99, unit: "bunch", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 92, name: "Iceberg lettuce", category: "herbs", price: 1.99, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 93, name: "Celery, half bunch", category: "herbs", price: 1.59, unit: "each", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },

    // ═══════════════════════════════════════
    // EGGS
    // ═══════════════════════════════════════
    { id: 95, name: "Free Range Eggs, 800g", category: "eggs", price: 5.99, unit: "dozen", active: true, mostPopular: true, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 96, name: "Cage Eggs, 700g", category: "eggs", price: 4.99, unit: "dozen", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },

    // ═══════════════════════════════════════
    // NUTS, DRIED FRUIT & LEGUMES
    // ═══════════════════════════════════════
    { id: 100, name: "Organic Medjool dates", category: "nuts", price: 28.00, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 101, name: "Organic prunes", category: "nuts", price: 4.49, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 102, name: "Red lentils", category: "nuts", price: 3.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 103, name: "Green lentils", category: "nuts", price: 5.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 104, name: "Whole walnuts", category: "nuts", price: 11.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 105, name: "Natural almonds", category: "nuts", price: 15.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 106, name: "Raw cashews", category: "nuts", price: 23.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 107, name: "Raw peanuts", category: "nuts", price: 6.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 108, name: "Sultanas", category: "nuts", price: 8.99, unit: "kg", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },

    // ═══════════════════════════════════════
    // FRESH JUICES & BEVERAGES
    // Sizes: 300ml = $3.99, 500ml = $5.99, 1L = $11.99
    // Lemonade: 300ml = $1.99, 500ml = $2.99, 1L = $5.99
    // ═══════════════════════════════════════
    { id: 120, name: "Beetroid", category: "juices", price: 3.99, unit: "ml300", active: true, mostPopular: true, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 121, name: "Beetroid", category: "juices", price: 5.99, unit: "ml500", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 122, name: "Beetroid", category: "juices", price: 11.99, unit: "ml1000", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 123, name: "Immuni-Tea", category: "juices", price: 3.99, unit: "ml300", active: true, mostPopular: true, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 124, name: "Immuni-Tea", category: "juices", price: 5.99, unit: "ml500", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 125, name: "Immuni-Tea", category: "juices", price: 11.99, unit: "ml1000", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 126, name: "Immuni-Fire", category: "juices", price: 3.99, unit: "ml300", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 127, name: "Immuni-Fire", category: "juices", price: 5.99, unit: "ml500", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 128, name: "Immuni-Fire", category: "juices", price: 11.99, unit: "ml1000", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 129, name: "Golden Fire", category: "juices", price: 3.99, unit: "ml300", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 130, name: "Golden Fire", category: "juices", price: 5.99, unit: "ml500", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 131, name: "Golden Fire", category: "juices", price: 11.99, unit: "ml1000", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 132, name: "Straight Celery", category: "juices", price: 3.99, unit: "ml300", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 133, name: "Straight Celery", category: "juices", price: 5.99, unit: "ml500", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 134, name: "Straight Celery", category: "juices", price: 11.99, unit: "ml1000", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 135, name: "Straight Watermelon", category: "juices", price: 3.99, unit: "ml300", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 136, name: "Straight Watermelon", category: "juices", price: 5.99, unit: "ml500", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 137, name: "Straight Watermelon", category: "juices", price: 11.99, unit: "ml1000", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    // Traditional Lemonade — whole lemons, sugar, ozonated water
    { id: 138, name: "Traditional Lemonade", category: "juices", price: 1.99, unit: "ml300", active: true, mostPopular: true, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 139, name: "Traditional Lemonade", category: "juices", price: 2.99, unit: "ml500", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
    { id: 140, name: "Traditional Lemonade", category: "juices", price: 5.99, unit: "ml1000", active: true, mostPopular: false, photo: "", hasSpecial: false, specialPrice: 0, specialQuantity: 0, specialUnit: "" },
];

// Unit display mappings
const unitDisplay = {
    "kg": "kg",
    "each": "each",
    "bunch": "bunch",
    "punnet": "punnet",
    "dozen": "dozen",
    "ml300": "300ml",
    "ml500": "500ml",
    "ml1000": "1L"
};

// Save products to localStorage
function saveProducts() {
    localStorage.setItem('glengalaProducts', JSON.stringify(products));
}

// Load products from localStorage
function loadProducts() {
    const saved = localStorage.getItem('glengalaProducts');
    if (saved) {
        products = JSON.parse(saved);
    }
}
