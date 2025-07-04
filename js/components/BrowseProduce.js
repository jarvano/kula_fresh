import { t } from '../app.js'

export function BrowseProduce(lang = 'en') {
  const products = [
    {
      id: 1,
      name: t('freshSukumaWiki', lang),
      farmer: 'Mary Wanjiku',
      location: 'Nakuru',
      price: 'KSh 50',
      unit: t('perBunch', lang),
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'vegetables',
      available: lang === 'sw' ? '15 vichane' : '15 bunches',
      delivery: t('sameDay', lang),
      verified: true,
      rating: 4.9,
      reviews: 127
    },
    {
      id: 2,
      name: t('organicTomatoes', lang),
      farmer: 'Peter Kimani',
      location: 'Meru',
      price: 'KSh 120',
      unit: t('perKg', lang),
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'vegetables',
      available: lang === 'sw' ? '25 kilo' : '25 kg',
      delivery: t('nextDay', lang),
      verified: true,
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      name: t('sweetBananas', lang),
      farmer: 'Grace Akinyi',
      location: 'Kisumu',
      price: 'KSh 80',
      unit: t('perDozen', lang),
      image: 'https://images.pexels.com/photos/2238309/pexels-photo-2238309.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'fruits',
      available: lang === 'sw' ? '40 dazeni' : '40 dozens',
      delivery: t('twoDays', lang),
      verified: true,
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: t('whiteMaize', lang),
      farmer: 'Samuel Kiprop',
      location: 'Eldoret',
      price: 'KSh 60',
      unit: t('perKg', lang),
      image: 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'grains',
      available: lang === 'sw' ? '100 kilo' : '100 kg',
      delivery: t('threeDays', lang),
      verified: true,
      rating: 4.6,
      reviews: 73
    },
    {
      id: 5,
      name: t('freshSpinach', lang),
      farmer: 'Rose Nyong\'o',
      location: 'Kisii',
      price: 'KSh 40',
      unit: t('perBunch', lang),
      image: 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'vegetables',
      available: lang === 'sw' ? '20 vichane' : '20 bunches',
      delivery: t('sameDay', lang),
      verified: true,
      rating: 4.9,
      reviews: 94
    },
    {
      id: 6,
      name: t('passionFruits', lang),
      farmer: 'David Mutua',
      location: 'Machakos',
      price: 'KSh 200',
      unit: t('perKg', lang),
      image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'fruits',
      available: lang === 'sw' ? '12 kilo' : '12 kg',
      delivery: t('nextDay', lang),
      verified: true,
      rating: 4.8,
      reviews: 67
    },
    {
      id: 7,
      name: lang === 'sw' ? 'Karoti Safi' : 'Fresh Carrots',
      farmer: 'Jane Muthoni',
      location: 'Nyeri',
      price: 'KSh 90',
      unit: t('perKg', lang),
      image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'vegetables',
      available: lang === 'sw' ? '30 kilo' : '30 kg',
      delivery: t('nextDay', lang),
      verified: true,
      rating: 4.7,
      reviews: 112
    },
    {
      id: 8,
      name: lang === 'sw' ? 'Maharagwe ya Kijani' : 'Green Beans',
      farmer: 'Joseph Kiprotich',
      location: 'Kericho',
      price: 'KSh 150',
      unit: t('perKg', lang),
      image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'vegetables',
      available: lang === 'sw' ? '18 kilo' : '18 kg',
      delivery: t('twoDays', lang),
      verified: true,
      rating: 4.6,
      reviews: 45
    }
  ]

  return `
    <div class="browse-produce-page">
      <div class="container">
        <!-- Page Header -->
        <div class="page-header">
          <div class="breadcrumb">
            <a href="#" class="breadcrumb-link">${lang === 'sw' ? 'Nyumbani' : 'Home'}</a>
            <span class="breadcrumb-separator">›</span>
            <span class="breadcrumb-current">${t('browseProducts', lang)}</span>
          </div>
          <h1 class="page-title">${t('freshProduceMarketplace', lang)}</h1>
          <p class="page-description">${t('browseDescription', lang)}</p>
        </div>

        <!-- Search and Filters -->
        <div class="search-filters">
          <div class="search-bar">
            <input type="text" placeholder="${lang === 'sw' ? 'Tafuta mazao...' : 'Search produce...'}" class="search-input">
            <button class="search-btn">🔍</button>
          </div>
          
          <div class="filter-section">
            <div class="filter-group">
              <label class="filter-label">${lang === 'sw' ? 'Aina:' : 'Category:'}</label>
              <div class="filters">
                <button class="filter-btn active" data-filter="all">${t('allProducts', lang)}</button>
                <button class="filter-btn" data-filter="vegetables">${t('vegetables', lang)}</button>
                <button class="filter-btn" data-filter="fruits">${t('fruits', lang)}</button>
                <button class="filter-btn" data-filter="grains">${t('grains', lang)}</button>
              </div>
            </div>
            
            <div class="filter-group">
              <label class="filter-label">${lang === 'sw' ? 'Panga kwa:' : 'Sort by:'}</label>
              <select class="sort-select">
                <option value="newest">${lang === 'sw' ? 'Mpya zaidi' : 'Newest'}</option>
                <option value="price-low">${lang === 'sw' ? 'Bei ya chini' : 'Price: Low to High'}</option>
                <option value="price-high">${lang === 'sw' ? 'Bei ya juu' : 'Price: High to Low'}</option>
                <option value="rating">${lang === 'sw' ? 'Ukadiriaji wa juu' : 'Highest Rated'}</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="products-section">
          <div class="products-header">
            <h2>${lang === 'sw' ? 'Mazao Yalipatikana' : 'Available Products'} (${products.length})</h2>
            <div class="view-toggle">
              <button class="view-btn active" data-view="grid">⊞</button>
              <button class="view-btn" data-view="list">☰</button>
            </div>
          </div>
          
          <div class="product-grid" id="productGrid">
            ${products.map(product => `
              <div class="product-card enhanced" data-category="${product.category}">
                <div class="product-image">
                  <img src="${product.image}" alt="${product.name}" loading="lazy">
                  ${product.verified ? `<div class="verified-badge">${t('verified', lang)}</div>` : ''}
                  <div class="delivery-badge">${product.delivery}</div>
                  <button class="wishlist-btn">♡</button>
                </div>
                
                <div class="product-info">
                  <h3 class="product-name">${product.name}</h3>
                  
                  <div class="farmer-info">
                    <div class="farmer-details">
                      <span class="farmer-name">👨🏿‍🌾 ${product.farmer}</span>
                      <span class="farmer-location">📍 ${product.location}</span>
                    </div>
                    <div class="farmer-rating">
                      <span class="rating">⭐ ${product.rating}</span>
                      <span class="review-count">(${product.reviews})</span>
                    </div>
                  </div>
                  
                  <div class="product-details">
                    <div class="price">
                      <span class="price-amount">${product.price}</span>
                      <span class="price-unit">${product.unit}</span>
                    </div>
                    <div class="availability">
                      <span class="available-amount">${product.available}</span>
                      <span class="available-label">${t('available', lang)}</span>
                    </div>
                  </div>
                  
                  <div class="product-actions">
                    <button class="btn btn-outline btn-small quick-add" data-product-id="${product.id}">
                      ${lang === 'sw' ? 'Ongeza Haraka' : 'Quick Add'}
                    </button>
                    <button class="btn btn-primary btn-small view-details" data-product-id="${product.id}">
                      ${lang === 'sw' ? 'Ona Zaidi' : 'View Details'}
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          
          <!-- Load More -->
          <div class="load-more-section">
            <button class="btn btn-outline load-more-btn">
              ${lang === 'sw' ? 'Pakia Zaidi' : 'Load More Products'}
            </button>
          </div>
        </div>

        <!-- Trust Indicators -->
        <div class="trust-section">
          <div class="trust-stats">
            <div class="trust-stat">
              <div class="stat-icon">✅</div>
              <div class="stat-content">
                <div class="stat-number">500+</div>
                <div class="stat-label">${lang === 'sw' ? 'Wakulima Walioidhinishwa' : 'Verified Farmers'}</div>
              </div>
            </div>
            <div class="trust-stat">
              <div class="stat-icon">🚚</div>
              <div class="stat-content">
                <div class="stat-number">24h</div>
                <div class="stat-label">${lang === 'sw' ? 'Uwasilishaji wa Haraka' : 'Fast Delivery'}</div>
              </div>
            </div>
            <div class="trust-stat">
              <div class="stat-icon">💰</div>
              <div class="stat-content">
                <div class="stat-number">100%</div>
                <div class="stat-label">${lang === 'sw' ? 'Malipo Salama' : 'Secure Payment'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}