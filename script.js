const productsData = [
    // Added 'rating', 'description', 'unit', 'reviews', and 'gallery' properties
    {
        id: 1,
        name: 'Basmati Rice',
        unit: '5 kg bag',
        category: 'Groceries',
        price: 12.99,
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
        price: 3.49,
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
        price: 5.99,
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
        price: 3.99,
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
        price: 4.99,
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
        price: 4.49,
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
        price: 7.99,
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
        price: 8.99,
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
        price: 6.49,
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
        price: 7.99,
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
        price: 4.99,
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
        price: 3.99,
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
        price: 5.49,
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
        price: 2.99,
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
        price: 3.49,
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
        price: 2.99,
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
        price: 4.49,
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
        price: 2.49,
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
        price: 4.99,
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
        price: 5.99,
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
        price: 6.99,
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
        price: 7.99,
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
        price: 8.49,
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
        price: 12.99,
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
        price: 14.99,
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
        price: 6.49,
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
        price: 4.99,
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
        price: 9.99,
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
        price: 16.99,
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
        price: 7.49,
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
        price: 18.99,
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
        price: 24.99,
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
        price: 9.99,
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
        price: 22.99,
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
        price: 19.99,
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
        price: 5.99,
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
        price: 6.99,
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
        price: 11.99,
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
        price: 8.99,
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
        price: 15.99,
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
        price: 21.99,
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
        price: 4.49,
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
        price: 19.99,
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
        price: 18.99,
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
        price: 9.49,
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
        price: 6.99,
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
        price: 3.49,
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
        price: 4.99,
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
        price: 9.99,
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
        price: 12.99,
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
        price: 5.99,
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
    minPrice: 0,
    maxPrice: 100,
    userIsAdmin: false,
    previousView: 'shop-view' // Track for back button
};

const DETAIL_VIEW = 'product-detail-view';

//  Slideshow variables
let currentSlide = 0;
const SLIDE_COUNT = 2; 

// --- Utility Functions ---

/**
 * Simulates a network/data loading delay.
 * @param {number} ms - Milliseconds to delay.
 */
function simulateLoading(ms = 300) {
    const spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'flex';
    return new Promise(resolve => setTimeout(() => {
        spinner.style.display = 'none';
        resolve();
    }, ms));
}

/**
 * Handles keyboard navigation for product cards.
 * @param {Event} event - The keyboard event.
 * @param {number} productId - The product ID.
 */
function handleCardKeydown(event, productId) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showProductDetailView(productId);
    }
}

//  State Management Helpers 
function updateState(updates) {
    Object.assign(appState, updates);
}

function getState() {
    return appState;
}

//Slideshow functions
function nextSlide() {
    const track = document.getElementById('slideshow-track');
    if (!track) return;
    
    currentSlide = (currentSlide + 1) % SLIDE_COUNT;
    const offset = -currentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;
}

function startSlideshow() {
    // Clear any existing interval to prevent duplicates
    if (window.slideshowInterval) {
        clearInterval(window.slideshowInterval);
    }
    // Set the track width based on the number of slides
    const track = document.getElementById('slideshow-track');
    if (track) {
        track.style.width = `${SLIDE_COUNT * 100}%`;
    }

    // Add touch/swipe support for mobile
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        const diff = startX - currentX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            isDragging = false;
        }
    });

    track.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Start a new interval
    window.slideshowInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function prevSlide() {
    const track = document.getElementById('slideshow-track');
    if (!track) return;

    currentSlide = (currentSlide - 1 + SLIDE_COUNT) % SLIDE_COUNT;
    const offset = -currentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;
}

// NEW: Modal functions
function showModal() {
    const modal = document.getElementById('promotion-modal');
    if (modal) {
        modal.style.display = 'flex';
        // Delay adding the 'open' class to allow for the display transition
        setTimeout(() => modal.classList.add('open'), 10);
    }
}

function closeModal() {
    const modal = document.getElementById('promotion-modal');
    if (modal) {
        modal.classList.remove('open');
        // Wait for transition to complete before setting display to none
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

//  Helper Functions and Components

function renderQuantityInput(productId, initialQty = 1) {
    return `
        <div class="quantity-input">
            <button onclick="changeQuantityOnCard(${productId}, -1)">-</button>
            <input type="number" id="qty-input-${productId}" value="${initialQty}" min="1" onchange="validateQuantityInput(${productId}, this)" />
            <button onclick="changeQuantityOnCard(${productId}, 1)">+</button>
        </div>
    `;
}

function changeQuantityOnCard(productId, delta) {
    const inputEl = document.getElementById(`qty-input-${productId}`);
    if (!inputEl) return;
    let newQty = parseInt(inputEl.value, 10) + delta;
    
    if (newQty < 1) {
        newQty = 1;
    }

    inputEl.value = newQty;
    validateQuantityInput(productId, inputEl);
}

function validateQuantityInput(productId, inputEl) {
    const product = productsData.find(p => p.id === productId);
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

function renderRatingStars(rating) {
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

function updateCartCount() {
    const totalItems = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
    const elements = document.querySelectorAll('.cart-count');
    elements.forEach(el => {
        el.textContent = totalItems;
        el.style.display = totalItems > 0 ? 'inline-block' : 'none';
    });
}

function updateWishlistCount() {
    const totalItems = appState.wishlist.length;
    const elements = document.querySelectorAll('.wishlist-count');
    elements.forEach(el => {
        el.textContent = totalItems;
        el.style.display = totalItems > 0 ? 'inline-block' : 'none';
    });
}

function showMessage(message, type = 'success') {
    const snackbar = document.getElementById('success-message');
    if (!snackbar) return;

    snackbar.textContent = message;
    snackbar.className = `message-snackbar show ${type}`;
    
    setTimeout(() => {
        snackbar.classList.remove('show');
        setTimeout(() => snackbar.className = 'message-snackbar', 400); 
    }, 3000);
}

function closeAll() {
    document.getElementById('cart-sidebar').classList.remove('open');
    document.getElementById('wishlist-sidebar').classList.remove('open');
    document.getElementById('comparison-sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
}

function openCartSidebar() {
    document.getElementById('cart-sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('show');
    renderCart();
}

/**
 * Handles switching between the main views.
 * @param {string} viewId - The ID of the view to show.
 */
async function showView(viewId) {
    if (viewId !== appState.currentView) {
        updateState({ previousView: appState.currentView }); // Store the current view before switching
    }

    await simulateLoading(); // Show spinner for smooth transition/data fetching simulation

    closeAll();
    ['shop-view', 'search-view', 'admin-view', DETAIL_VIEW].forEach(id => {
        const view = document.getElementById(id);
        if (view) view.style.display = id === viewId ? 'block' : 'none';
    });
    updateState({ currentView: viewId });

    // Update mobile nav active state
    document.querySelectorAll('.mobile-nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Only set active for primary nav items (Home/Shop)
    if (viewId === 'shop-view') {
        document.querySelector(`.mobile-nav-item[onclick*="showShopView"]`).classList.add('active');
    } else if (viewId === 'search-view') {
        document.querySelector(`.mobile-nav-item[onclick*="showSearchView"]`).classList.add('active');
    }
}

const showShopView = () => { 
    showView('shop-view'); 
    renderHomeProducts();
};

const showSearchView = () => {
    showView('search-view');
    const searchInput = document.getElementById('desktop-search-input');
    if (searchInput) {
        searchInput.value = appState.currentSearchQuery;
    }
    applyFilters();
    renderRecentlyViewed();
};

const showAdminView = () => {
    if (!appState.userIsAdmin) {
        openAuthModal();
        return;
    }
    showView('admin-view');
    renderAdminProducts();
    renderAdminStats();
    document.querySelectorAll('.mobile-nav-item').forEach(item => item.classList.remove('active'));
};

const goBackFromDetail = () => {
    // Navigate back to the view before the detail view
    showView(appState.previousView);
    if (appState.previousView === 'search-view') {
        applyFilters(); // Re-apply filters if coming from search
    }
};

// Detail View Logic 

function showProductDetailView(productId) {
    updateState({ previousView: appState.currentView }); // Ensure previous view is saved correctly
    const product = productsData.find(p => p.id === productId);
    if (!product) {
        showMessage('Product not found.', 'danger');
        return;
    }

    // Add to recently viewed
    addToRecentlyViewed(productId);

    renderProductDetail(product);
    showView(DETAIL_VIEW);

    // Update recently viewed section if on search view
    if (appState.currentView === 'search-view') {
        renderRecentlyViewed();
    }
}

function addToRecentlyViewed(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    // Remove if already exists
    const filtered = appState.recentlyViewed.filter(p => p.id !== productId);
    // Add to beginning
    filtered.unshift(product);
    // Keep only last 10
    const updated = filtered.slice(0, 10);
    updateState({ recentlyViewed: updated });
    localStorage.setItem('recentlyViewed', JSON.stringify(updated));
}

function toggleWishlist(productId) {
    const product = productsData.find(p => p.id === productId);
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

function addToComparison(productId) {
    const product = productsData.find(p => p.id === productId);
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

function removeFromComparison(productId) {
    const updatedComparison = appState.comparison.filter(p => p.id !== productId);
    updateState({ comparison: updatedComparison });
    renderComparison();
}

function openWishlist() {
    renderWishlist();
    document.getElementById('wishlist-sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('show');
}

function openComparison() {
    renderComparison();
    document.getElementById('comparison-sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('show');
}

function renderWishlist() {
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

function renderComparison() {
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

function renderProductDetail(product) {
    const detailContent = document.getElementById('detail-content');
    if (!detailContent) return;

    // Check if the item is already in the cart to set initial quantity in the detail view input
    const cartItem = appState.cart.find(item => item.product.id === product.id);
    const initialQty = cartItem ? cartItem.quantity : 1;

    // Add magnetic hover effect to the detail view
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

    // Render image gallery
    const galleryHtml = product.gallery ? product.gallery.map((img, index) =>
        `<img src="${img}" alt="${product.name} view ${index + 1}" onclick="changeGalleryImage(${product.id}, ${index})" class="gallery-thumb" onerror="this.onerror=null;this.src='https://placehold.co/100x100/F3F4F6/6B7280?text=Img';">`
    ).join('') : '';

    // Render reviews
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
                <span class="product-price">$${product.price.toFixed(2)}</span>
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

    // Ensure the detail view quantity input is properly validated
    validateQuantityInput(product.id, document.getElementById(`qty-input-${product.id}`));
}

function changeGalleryImage(productId, index) {
    const product = productsData.find(p => p.id === productId);
    if (product && product.gallery && product.gallery[index]) {
        const mainImage = document.getElementById(`main-detail-image-${productId}`);
        if (mainImage) {
            mainImage.src = product.gallery[index];
        }
    }
}

function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out this amazing product!');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

function copyShareLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showMessage('Link copied to clipboard!', 'success');
    }).catch(() => {
        showMessage('Failed to copy link', 'danger');
    });
}

// --- Core Logic ---

/**
 * Renders products to a specific grid element.
 */
function renderProducts(targetGridId, products) {
    const productGrid = document.getElementById(targetGridId);
    if (!productGrid) return;

    const viewMode = appState.currentViewMode || 'grid';
    const isListView = viewMode === 'list';

    const productHtml = products.length > 0 ? products.map(product => {
        const stockBadgeClass = product.stock > 10 ? 'stock-badge' : 'stock-badge low';
        const stockText = product.stock > 0 ? `${product.stock} in stock` : '';
        const isInWishlist = appState.wishlist.some(p => p.id === product.id);

        if (isListView) {
            return `
                <div class="product-card list-view" data-id="${product.id}" role="gridcell" tabindex="0" aria-label="${product.name}, ${product.unit}, $${product.price.toFixed(2)}, ${product.stock > 0 ? stockText : 'Out of stock'}" onkeydown="handleCardKeydown(event, ${product.id})">
                    <div class="list-image-container" onclick="showProductDetailView(${product.id})" role="button" tabindex="-1" aria-label="View details for ${product.name}">
                        <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='https://placehold.co/120x120/F3F4F6/6B7280?text=Image';">
                        ${product.stock === 0 ? '<span class="out-of-stock-badge">Out of Stock</span>' : `<span class="${stockBadgeClass}">${stockText}</span>`}
                    </div>
                    <div class="list-content">
                        <div class="list-info" onclick="showProductDetailView(${product.id})" style="cursor: pointer;" role="button" tabindex="-1" aria-label="View details for ${product.name}">
                            <h3 class="product-name">${product.name}</h3>
                            <p class="product-unit-info">${product.unit} • ${product.category}</p>
                            <div class="product-meta">
                                ${renderRatingStars(product.rating || 4.0)}
                                <span class="product-price">$${product.price.toFixed(2)}</span>
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
                <div class="product-card" data-id="${product.id}" role="gridcell" tabindex="0" aria-label="${product.name}, ${product.unit}, $${product.price.toFixed(2)}, ${product.stock > 0 ? stockText : 'Out of stock'}" onkeydown="handleCardKeydown(event, ${product.id})">
                    <div class="product-image-container" onclick="showProductDetailView(${product.id})" role="button" tabindex="-1" aria-label="View details for ${product.name}">
                        <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='https://placehold.co/400x300/F3F4F6/6B7280?text=Image';">
                        ${product.stock === 0 ? '<span class="out-of-stock-badge">Out of Stock</span>' : `<span class="${stockBadgeClass}">${stockText}</span>`}
                    </div>
                    <div class="product-info" onclick="showProductDetailView(${product.id})" style="cursor: pointer;" role="button" tabindex="-1" aria-label="View details for ${product.name}">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-unit-info">${product.unit}</p>
                        <div class="product-meta">
                            ${renderRatingStars(product.rating || 4.0)}
                            <span class="product-price">$${product.price.toFixed(2)}</span>
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

    // Update results count
    const resultsCountEl = document.getElementById('results-count');
    if (resultsCountEl) {
        resultsCountEl.textContent = `${products.length} product${products.length !== 1 ? 's' : ''}`;
    }

    products.forEach(p => {
        const inputEl = document.getElementById(`qty-input-${p.id}`);
        // Reset quantity input to 1 after rendering, unless it's in the detail view
        if(inputEl && appState.currentView !== DETAIL_VIEW) inputEl.value = '1';
    });
}

function renderHomeProducts() {
    const featuredProducts = [...productsData]
        .filter(p => p.stock > 0)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);
        
    renderProducts('featured-products-grid', featuredProducts);

    // Show all products on the home page as well
    renderProducts('shop-all-products-grid', productsData);
}

function applyFilters() {
    let filteredProducts = productsData;

    if (appState.currentFilter !== 'All') {
        filteredProducts = filteredProducts.filter(p => p.category === appState.currentFilter);
    }

    if (appState.currentSearchQuery) {
        const query = appState.currentSearchQuery.toLowerCase();
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
        );
    }

    // Apply price range filter
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    if (minPriceInput && maxPriceInput) {
        const min = parseFloat(minPriceInput.value) || 0;
        const max = parseFloat(maxPriceInput.value) || 100;
        filteredProducts = filteredProducts.filter(p => p.price >= min && p.price <= max);
    }

    // Apply sorting
    filteredProducts = applySortingToProducts(filteredProducts, appState.currentSort);

    renderProducts('search-products-grid', filteredProducts);
}

function applySorting(sortType) {
    updateState({ currentSort: sortType });
    applyFilters();
}

function applySortingToProducts(products, sortType) {
    switch (sortType) {
        case 'price-low':
            return products.sort((a, b) => a.price - b.price);
        case 'price-high':
            return products.sort((a, b) => b.price - a.price);
        case 'rating':
            return products.sort((a, b) => b.rating - a.rating);
        case 'newest':
            return products.sort((a, b) => b.id - a.id); // Assuming higher ID = newer
        case 'name':
        default:
            return products.sort((a, b) => a.name.localeCompare(b.name));
    }
}

function addToCartWithQuantity(productId, isFromDetailView) {
    const inputEl = document.getElementById(`qty-input-${productId}`);
    const quantity = inputEl ? parseInt(inputEl.value, 10) : 1;

    if (quantity < 1) {
        showMessage('Please select a quantity of 1 or more.', 'danger');
        return;
    }
    
    // Reset input only if not from the detail view, as detail view might be for updating cart quantity
    if (!isFromDetailView && inputEl) {
        inputEl.value = '1'; 
    }

    addToCart(productId, quantity, isFromDetailView);
}

function addToCart(productId, quantity = 1, isFromDetailView = false) {
    const product = productsData.find(p => p.id === productId);
    if (!product || product.stock === 0) {
        showMessage('Product is out of stock.', 'danger');
        return;
    }
    if (quantity > product.stock) {
        showMessage(`Cannot add ${quantity}. Only ${product.stock} in stock.`, 'danger');
        return;
    }

    const cartItemIndex = appState.cart.findIndex(item => item.product.id === productId);
    let finalQuantity = quantity;

    if (cartItemIndex > -1) {
        // If coming from detail view, assume the quantity input is the final desired quantity
        if (isFromDetailView) {
            finalQuantity = quantity;
        } else {
            // If coming from card, add to existing quantity
            finalQuantity = appState.cart[cartItemIndex].quantity + quantity;
        }

        if (finalQuantity > product.stock) {
            showMessage(`Cannot add more. Total exceeds stock (${product.stock}).`, 'danger');
            return;
        }
        appState.cart[cartItemIndex].quantity = finalQuantity;
    } else {
        appState.cart.push({ product: product, quantity: quantity });
    }

    showMessage(`${finalQuantity}x ${product.name} added to cart!`, 'success');
    renderCart();
    renderHomeProducts();
    if (isFromDetailView) {
          renderProductDetail(product); // Re-render detail view to update quantity input value
    }
    updateCartCount();
    // Persist cart to localStorage
    localStorage.setItem('cart', JSON.stringify(appState.cart));
}

// --- Cart Logic ---

function calculateSubtotal() {
    return appState.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
}

function renderCart() {
    const cartItemsEl = document.getElementById('cart-items');
    const subtotalEl = document.getElementById('cart-subtotal');

    if (!cartItemsEl || !subtotalEl) return;

    if (appState.cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="empty-state" style="padding: 1rem;">Your cart is empty. Start shopping now!</p>';
        subtotalEl.textContent = '$0.00';
    } else {
        const itemsHtml = appState.cart.map(item => `
            <div class="cart-item">
                <img src="${item.product.image}" alt="${item.product.name}" onerror="this.onerror=null;this.src='https://placehold.co/50x50/F3F4F6/6B7280?text=Img';">
                <div class="item-details">
                    <span class="item-name">${item.product.name}</span>
                    <span class="item-price">$${item.product.price.toFixed(2)} / ${item.product.unit}</span>
                </div>
                <div class="item-controls">
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.product.id}, -1)">-</button>
                        <span class="item-quantity">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.product.id}, 1)">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.product.id})">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                </div>
                <span class="item-total">$${(item.product.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');

        cartItemsEl.innerHTML = itemsHtml;
        subtotalEl.textContent = `$${calculateSubtotal().toFixed(2)}`;
    }
    updateCartCount();
}

function updateQuantity(productId, delta) {
    const cartItemIndex = appState.cart.findIndex(item => item.product.id === productId);
    const product = productsData.find(p => p.id === productId);

    if (cartItemIndex > -1) {
        const currentQty = appState.cart[cartItemIndex].quantity;
        const newQty = currentQty + delta;

        if (newQty < 1) {
            removeFromCart(productId);
            return;
        }

        if (newQty > product.stock) {
            showMessage(`Cannot increase quantity. Max stock is ${product.stock}.`, 'danger');
            return;
        }

        appState.cart[cartItemIndex].quantity = newQty;
        renderCart();
        // If in detail view, update the input there too
        const inputEl = document.getElementById(`qty-input-${productId}`);
        if(inputEl) inputEl.value = newQty;
    }
}

function removeFromCart(productId) {
    updateState({ cart: appState.cart.filter(item => item.product.id !== productId) });
    showMessage('Item removed from cart.', 'danger');
    renderCart();
    renderHomeProducts(); // To update card buttons/quantities
    // Persist cart to localStorage
    localStorage.setItem('cart', JSON.stringify(appState.cart));
    // If in detail view, re-render it
    if (appState.currentView === DETAIL_VIEW) {
          const product = productsData.find(p => p.id === productId);
          if (product) renderProductDetail(product);
    }
}


// --- Search/Filter Logic ---

function updateSearchQuery(inputElement) {
    updateState({ currentSearchQuery: inputElement.value });
    applyFilters();
}

function applyCategoryFilter(category) {
    updateState({ currentFilter: category });

    // Update active button state
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });

    applyFilters();
}


// --- Admin Logic ---

function toggleAdminAccess() {
    updateState({ userIsAdmin: !appState.userIsAdmin });
    updateProfileUI();
    showMessage(`Admin mode ${appState.userIsAdmin ? 'ENABLED' : 'DISABLED'}.`, appState.userIsAdmin ? 'success' : 'danger');
}

function updateProfileUI() {
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

function openAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('open'), 10);
    }
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
        modal.classList.remove('open');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

function handleAuthSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication for demo
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

function logoutAdmin() {
    updateState({ userIsAdmin: false, isLoggedIn: false });
    showShopView();
    showMessage('Logged out successfully.', 'secondary');
    updateProfileUI();
}

function renderAdminStats() {
    const totalProducts = productsData.length;
    const categories = [...new Set(productsData.map(p => p.category))].length;
    const totalValue = productsData.reduce((sum, p) => sum + (p.price * p.stock), 0);
    const lowStockCount = productsData.filter(p => p.stock <= 5).length;

    document.getElementById('total-products').textContent = totalProducts;
    document.getElementById('total-categories').textContent = categories;
    document.getElementById('total-value').textContent = `$${totalValue.toFixed(2)}`;
    document.getElementById('low-stock-count').textContent = lowStockCount;
}


function renderAdminProducts() {
    const listEl = document.getElementById('admin-product-list');
    if (!listEl) return;

    listEl.innerHTML = productsData.map(p => `
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

function updateStock(productId, delta) {
    const productIndex = productsData.findIndex(p => p.id === productId);
    if (productIndex > -1) {
        const currentStock = productsData[productIndex].stock;
        const newStock = currentStock + delta;
        
        if (newStock < 0) {
            showMessage('Stock cannot be negative.', 'danger');
            return;
        }

        productsData[productIndex].stock = newStock;
        showMessage(`Stock for ${productsData[productIndex].name} updated to ${newStock}.`, 'success');
        
        renderAdminProducts(); 
        renderHomeProducts(); // Update shop view if needed
        applyFilters(); // Update search view if needed
        if (currentView === DETAIL_VIEW) {
            renderProductDetail(productsData[productIndex]);
        }
    }
}

function handleProductFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('new-name').value;
    const category = document.getElementById('new-category').value;
    const price = parseFloat(document.getElementById('new-price').value);
    const stock = parseInt(document.getElementById('new-stock').value);
    const rating = parseFloat(document.getElementById('new-rating').value);
    const unit = document.getElementById('new-unit').value;
    const description = document.getElementById('new-description').value;
    const image = document.getElementById('new-image').value || 'https://placehold.co/400x300/F3F4F6/6B7280?text=New+Product';

    if (isNaN(price) || isNaN(stock) || isNaN(rating) || rating < 1 || rating > 5) {
        showMessage('Please enter valid numeric values for Price, Stock, and Rating (1.0-5.0).', 'danger');
        return;
    }

    const newProduct = {
        id: productsData.length + 1, // Simple ID generation
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

    productsData.push(newProduct);
    document.getElementById('add-product-form').reset();
    showMessage(`Product '${name}' added successfully!`, 'success');

    renderAdminProducts();
    renderHomeProducts();
    applyFilters();
    updateAnalytics(); // Update analytics after adding product
}

// --- Analytics Functions ---
function updateAnalytics() {
    const totalProducts = productsData.length;
    const totalCategories = new Set(productsData.map(p => p.category)).size;
    const inventoryValue = productsData.reduce((sum, p) => sum + (p.price * p.stock), 0);
    const lowStockCount = productsData.filter(p => p.stock > 0 && p.stock <= 10).length;

    // Update DOM elements
    const totalProductsEl = document.getElementById('total-products');
    const totalCategoriesEl = document.getElementById('total-categories');
    const inventoryValueEl = document.getElementById('inventory-value');
    const lowStockCountEl = document.getElementById('low-stock-count');

    if (totalProductsEl) totalProductsEl.textContent = totalProducts;
    if (totalCategoriesEl) totalCategoriesEl.textContent = totalCategories;
    if (inventoryValueEl) inventoryValueEl.textContent = `$${inventoryValue.toFixed(2)}`;
    if (lowStockCountEl) lowStockCountEl.textContent = lowStockCount;
}

// --- Bulk Operations ---
function selectAllProducts() {
    const checkboxes = document.querySelectorAll('.product-checkbox');
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);

    checkboxes.forEach(cb => cb.checked = !allChecked);
    updateBulkActionsVisibility();
}

function updateBulkActionsVisibility() {
    const checkedBoxes = document.querySelectorAll('.product-checkbox:checked');
    const bulkDeleteBtn = document.getElementById('bulk-delete-btn');
    const bulkUpdateBtn = document.getElementById('bulk-update-btn');

    const hasSelections = checkedBoxes.length > 0;
    if (bulkDeleteBtn) bulkDeleteBtn.style.display = hasSelections ? 'inline-block' : 'none';
    if (bulkUpdateBtn) bulkUpdateBtn.style.display = hasSelections ? 'inline-block' : 'none';
}

function bulkDelete() {
    const checkedBoxes = document.querySelectorAll('.product-checkbox:checked');
    if (checkedBoxes.length === 0) return;

    if (!confirm(`Are you sure you want to delete ${checkedBoxes.length} product(s)?`)) return;

    const idsToDelete = Array.from(checkedBoxes).map(cb => parseInt(cb.value));
    productsData = productsData.filter(p => !idsToDelete.includes(p.id));

    showMessage(`${checkedBoxes.length} product(s) deleted successfully!`, 'success');
    renderAdminProducts();
    renderHomeProducts();
    applyFilters();
    updateAnalytics();
}

function bulkUpdateStock() {
    const checkedBoxes = document.querySelectorAll('.product-checkbox:checked');
    if (checkedBoxes.length === 0) return;

    const newStock = prompt('Enter new stock quantity for selected products:');
    if (newStock === null || isNaN(newStock) || newStock < 0) return;

    const stockValue = parseInt(newStock);
    const idsToUpdate = Array.from(checkedBoxes).map(cb => parseInt(cb.value));

    productsData.forEach(p => {
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

// --- Additional Admin Functions ---
function exportData() {
    const data = {
        products: productsData,
        exportDate: new Date().toISOString(),
        totalProducts: productsData.length,
        totalValue: productsData.reduce((sum, p) => sum + (p.price * p.stock), 0)
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

function bulkImport() {
    showMessage('Bulk import feature coming soon!', 'secondary');
}

function generateReport() {
    const report = {
        summary: {
            totalProducts: productsData.length,
            totalCategories: new Set(productsData.map(p => p.category)).size,
            totalInventoryValue: productsData.reduce((sum, p) => sum + (p.price * p.stock), 0),
            lowStockItems: productsData.filter(p => p.stock > 0 && p.stock <= 10).length,
            outOfStockItems: productsData.filter(p => p.stock === 0).length
        },
        categoryBreakdown: {},
        topRatedProducts: productsData.sort((a, b) => b.rating - a.rating).slice(0, 5),
        generatedAt: new Date().toISOString()
    };

    // Category breakdown
    productsData.forEach(p => {
        if (!report.categoryBreakdown[p.category]) {
            report.categoryBreakdown[p.category] = {
                count: 0,
                totalValue: 0,
                averageRating: 0
            };
        }
        report.categoryBreakdown[p.category].count++;
        report.categoryBreakdown[p.category].totalValue += p.price * p.stock;
    });

    // Calculate average ratings
    Object.keys(report.categoryBreakdown).forEach(cat => {
        const categoryProducts = productsData.filter(p => p.category === cat);
        const avgRating = categoryProducts.reduce((sum, p) => sum + p.rating, 0) / categoryProducts.length;
        report.categoryBreakdown[cat].averageRating = avgRating.toFixed(1);
    });

    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `supermarket-report-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showMessage('Report generated successfully!', 'success');
}

function showSettings() {
    showMessage('Settings panel coming soon!', 'secondary');
}

function logoutAdmin() {
    updateState({ userIsAdmin: false });
    updateProfileUI();
    showShopView();
    showMessage('Logged out successfully.', 'secondary');
}

function showAddProductModal() {
    document.getElementById('add-product-form').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('new-name').focus();
}


// --- Initialization ---

function initApp() {
    console.log("App initializing...");

    // Load persisted data from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        try {
            const parsedCart = JSON.parse(savedCart);
            updateState({ cart: parsedCart });
        } catch (e) {
            console.error('Failed to load cart from localStorage:', e);
        }
    }

    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
        try {
            const parsedWishlist = JSON.parse(savedWishlist);
            updateState({ wishlist: parsedWishlist });
        } catch (e) {
            console.error('Failed to load wishlist from localStorage:', e);
        }
    }

    const savedRecentlyViewed = localStorage.getItem('recentlyViewed');
    if (savedRecentlyViewed) {
        try {
            const parsedRecentlyViewed = JSON.parse(savedRecentlyViewed);
            updateState({ recentlyViewed: parsedRecentlyViewed });
        } catch (e) {
            console.error('Failed to load recently viewed from localStorage:', e);
        }
    }

    const savedOrderHistory = localStorage.getItem('orderHistory');
    if (savedOrderHistory) {
        try {
            const parsedOrderHistory = JSON.parse(savedOrderHistory);
            updateState({ orderHistory: parsedOrderHistory });
        } catch (e) {
            console.error('Failed to load order history from localStorage:', e);
        }
    }

    // Load view mode preference
    const savedViewMode = localStorage.getItem('viewMode') || 'grid';
    updateState({ currentViewMode: savedViewMode });

    // Initialize analytics
    updateAnalytics();

    // Simulate initial loading before rendering
    simulateLoading(500).then(() => {
        renderHomeProducts();
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
            // Updated slide content with attractive background images
            slideshowTrack.innerHTML = `
                <div class="slide" style="background-image: url('https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlc2glMjBwcm9kdWNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500=80&w=1200&auto=format&fit=crop');">
                    <h1>Freshness Delivered.</h1>
                    <p>Curated selection, straight to your door.</p>
                </div>
                <div class="slide" style="background-image: url('https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1cGVybWFya2V0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500=80&w=1200&auto=format&fit=crop');">
                    <h1>Sustainable Shopping.</h1>
                    <p>High quality products, responsibly sourced.</p>
                </div>
            `;
            // Start the automatic slideshow after content is rendered
            startSlideshow();
        }

        // Show promotion modal after a short delay (1.5 seconds)
        setTimeout(showModal, 1500);

        // Set initial view state
        document.getElementById(DETAIL_VIEW).style.display = 'none';
        document.getElementById('admin-view').style.display = 'none';
        document.getElementById('search-view').style.display = 'none';
        document.getElementById('shop-view').style.display = 'block';

        document.querySelector(`.mobile-nav-item[onclick*="showShopView"]`).classList.add('active');
        console.log("App initialization complete.");
    });
}