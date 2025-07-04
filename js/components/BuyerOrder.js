import { t } from '../app.js'

export function BuyerOrder(lang = 'en') {
  return `
    <div class="buyer-order-page">
      <div class="container">
        <!-- Page Header -->
        <div class="order-header">
          <h1 class="page-title">${lang === 'sw' ? 'Agiza Mazao' : 'Order Produce'}</h1>
          <p class="page-subtitle">${lang === 'sw' ? 'Chagua mazao yako na utupatie maelezo ya uwasilishaji' : 'Select your produce and provide delivery details'}</p>
        </div>

        <div class="order-container">
          <!-- Order Form -->
          <div class="order-form-section">
            <form class="order-form" id="buyerOrderForm">
              <!-- Product Selection -->
              <div class="form-section">
                <h3 class="section-title">${lang === 'sw' ? 'Chagua Mazao' : 'Select Products'}</h3>
                
                <div class="product-search">
                  <input type="text" placeholder="${lang === 'sw' ? 'Tafuta mazao...' : 'Search products...'}" class="search-input">
                  <button type="button" class="search-btn">🔍</button>
                </div>

                <div class="selected-products" id="selectedProducts">
                  <!-- Sample selected products -->
                  <div class="selected-product">
                    <div class="product-info">
                      <img src="https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Tomatoes" class="product-image">
                      <div class="product-details">
                        <h4>${lang === 'sw' ? 'Nyanya za Kikaboni' : 'Organic Tomatoes'}</h4>
                        <p class="farmer-name">Peter Kimani - Meru</p>
                        <p class="product-price">KSh 120 ${t('perKg', lang)}</p>
                      </div>
                    </div>
                    <div class="quantity-controls">
                      <button type="button" class="qty-btn minus">-</button>
                      <input type="number" value="2" min="1" class="qty-input">
                      <button type="button" class="qty-btn plus">+</button>
                      <span class="unit-label">kg</span>
                    </div>
                    <div class="product-total">KSh 240</div>
                    <button type="button" class="remove-btn">×</button>
                  </div>

                  <div class="selected-product">
                    <div class="product-info">
                      <img src="https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Sukuma Wiki" class="product-image">
                      <div class="product-details">
                        <h4>${lang === 'sw' ? 'Sukuma Wiki Safi' : 'Fresh Sukuma Wiki'}</h4>
                        <p class="farmer-name">Mary Wanjiku - Nakuru</p>
                        <p class="product-price">KSh 50 ${t('perBunch', lang)}</p>
                      </div>
                    </div>
                    <div class="quantity-controls">
                      <button type="button" class="qty-btn minus">-</button>
                      <input type="number" value="3" min="1" class="qty-input">
                      <button type="button" class="qty-btn plus">+</button>
                      <span class="unit-label">${lang === 'sw' ? 'vichane' : 'bunches'}</span>
                    </div>
                    <div class="product-total">KSh 150</div>
                    <button type="button" class="remove-btn">×</button>
                  </div>
                </div>

                <button type="button" class="btn btn-outline add-more-btn">
                  + ${lang === 'sw' ? 'Ongeza Mazao Zaidi' : 'Add More Products'}
                </button>
              </div>

              <!-- Customer Information -->
              <div class="form-section">
                <h3 class="section-title">${lang === 'sw' ? 'Maelezo ya Mnunuzi' : 'Customer Information'}</h3>
                
                <div class="form-row">
                  <div class="form-group">
                    <label for="customerName" class="form-label">${lang === 'sw' ? 'Jina Kamili' : 'Full Name'} *</label>
                    <input type="text" id="customerName" name="customerName" class="form-input" required>
                  </div>
                  <div class="form-group">
                    <label for="customerPhone" class="form-label">${lang === 'sw' ? 'Nambari ya Simu' : 'Phone Number'} *</label>
                    <input type="tel" id="customerPhone" name="customerPhone" class="form-input" placeholder="+254 7XX XXX XXX" required>
                  </div>
                </div>

                <div class="form-group">
                  <label for="customerEmail" class="form-label">${lang === 'sw' ? 'Barua Pepe (si lazima)' : 'Email (Optional)'}</label>
                  <input type="email" id="customerEmail" name="customerEmail" class="form-input">
                </div>
              </div>

              <!-- Delivery Information -->
              <div class="form-section">
                <h3 class="section-title">${lang === 'sw' ? 'Maelezo ya Uwasilishaji' : 'Delivery Information'}</h3>
                
                <div class="form-group">
                  <label for="deliveryAddress" class="form-label">${lang === 'sw' ? 'Anwani ya Uwasilishaji' : 'Delivery Address'} *</label>
                  <textarea id="deliveryAddress" name="deliveryAddress" class="form-textarea" rows="3" placeholder="${lang === 'sw' ? 'Andika anwani kamili ya uwasilishaji...' : 'Enter complete delivery address...'}" required></textarea>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="deliveryArea" class="form-label">${lang === 'sw' ? 'Eneo la Uwasilishaji' : 'Delivery Area'} *</label>
                    <select id="deliveryArea" name="deliveryArea" class="form-select" required>
                      <option value="">${lang === 'sw' ? 'Chagua eneo' : 'Select area'}</option>
                      <option value="nairobi-cbd">Nairobi CBD</option>
                      <option value="westlands">Westlands</option>
                      <option value="karen">Karen</option>
                      <option value="kileleshwa">Kileleshwa</option>
                      <option value="kilimani">Kilimani</option>
                      <option value="lavington">Lavington</option>
                      <option value="parklands">Parklands</option>
                      <option value="kasarani">Kasarani</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="deliveryTime" class="form-label">${lang === 'sw' ? 'Wakati wa Uwasilishaji' : 'Delivery Time'} *</label>
                    <select id="deliveryTime" name="deliveryTime" class="form-select" required>
                      <option value="">${lang === 'sw' ? 'Chagua wakati' : 'Select time'}</option>
                      <option value="morning">${lang === 'sw' ? 'Asubuhi (6AM - 12PM)' : 'Morning (6AM - 12PM)'}</option>
                      <option value="afternoon">${lang === 'sw' ? 'Mchana (12PM - 6PM)' : 'Afternoon (12PM - 6PM)'}</option>
                      <option value="evening">${lang === 'sw' ? 'Jioni (6PM - 9PM)' : 'Evening (6PM - 9PM)'}</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="deliveryDate" class="form-label">${lang === 'sw' ? 'Tarehe ya Uwasilishaji' : 'Delivery Date'} *</label>
                  <input type="date" id="deliveryDate" name="deliveryDate" class="form-input" required>
                </div>

                <div class="form-group">
                  <label for="specialInstructions" class="form-label">${lang === 'sw' ? 'Maagizo Maalum (si lazima)' : 'Special Instructions (Optional)'}</label>
                  <textarea id="specialInstructions" name="specialInstructions" class="form-textarea" rows="2" placeholder="${lang === 'sw' ? 'Maagizo yoyote maalum kwa mwasilishaji...' : 'Any special instructions for the delivery person...'}}"></textarea>
                </div>
              </div>

              <!-- Payment Method -->
              <div class="form-section">
                <h3 class="section-title">${lang === 'sw' ? 'Njia ya Malipo' : 'Payment Method'}</h3>
                
                <div class="payment-options">
                  <label class="payment-option">
                    <input type="radio" name="paymentMethod" value="mpesa" checked>
                    <div class="payment-card">
                      <div class="payment-icon">📱</div>
                      <div class="payment-info">
                        <h4>M-Pesa</h4>
                        <p>${lang === 'sw' ? 'Lipa kwa M-Pesa' : 'Pay with M-Pesa'}</p>
                      </div>
                    </div>
                  </label>
                  
                  <label class="payment-option">
                    <input type="radio" name="paymentMethod" value="cash">
                    <div class="payment-card">
                      <div class="payment-icon">💵</div>
                      <div class="payment-info">
                        <h4>${lang === 'sw' ? 'Pesa Taslimu' : 'Cash on Delivery'}</h4>
                        <p>${lang === 'sw' ? 'Lipa wakati wa kupokea' : 'Pay when you receive'}</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Order Notes -->
              <div class="form-section">
                <div class="form-group">
                  <label for="orderNotes" class="form-label">${lang === 'sw' ? 'Maelezo ya Ziada (si lazima)' : 'Additional Notes (Optional)'}</label>
                  <textarea id="orderNotes" name="orderNotes" class="form-textarea" rows="3" placeholder="${lang === 'sw' ? 'Maelezo yoyote ya ziada kuhusu agizo lako...' : 'Any additional information about your order...'}}"></textarea>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="form-actions">
                <button type="submit" class="btn btn-primary btn-large submit-order-btn">
                  ${lang === 'sw' ? 'Wasilisha Agizo' : 'Submit Order'}
                </button>
              </div>
            </form>
          </div>

          <!-- Order Summary -->
          <div class="order-summary-section">
            <div class="order-summary">
              <h3>${lang === 'sw' ? 'Muhtasari wa Agizo' : 'Order Summary'}</h3>
              
              <div class="summary-items">
                <div class="summary-item">
                  <span>${lang === 'sw' ? 'Nyanya za Kikaboni (2kg)' : 'Organic Tomatoes (2kg)'}</span>
                  <span>KSh 240</span>
                </div>
                <div class="summary-item">
                  <span>${lang === 'sw' ? 'Sukuma Wiki (3 vichane)' : 'Sukuma Wiki (3 bunches)'}</span>
                  <span>KSh 150</span>
                </div>
              </div>
              
              <div class="summary-calculations">
                <div class="calc-row">
                  <span>${lang === 'sw' ? 'Jumla ya Mazao:' : 'Subtotal:'}</span>
                  <span>KSh 390</span>
                </div>
                <div class="calc-row">
                  <span>${lang === 'sw' ? 'Ada ya Uwasilishaji:' : 'Delivery Fee:'}</span>
                  <span>KSh 150</span>
                </div>
                <div class="calc-row total">
                  <span>${lang === 'sw' ? 'Jumla:' : 'Total:'}</span>
                  <span>KSh 540</span>
                </div>
              </div>

              <div class="delivery-estimate">
                <div class="estimate-item">
                  <span class="estimate-icon">🚚</span>
                  <div class="estimate-info">
                    <h4>${lang === 'sw' ? 'Muda wa Uwasilishaji' : 'Delivery Time'}</h4>
                    <p>${lang === 'sw' ? 'Siku 1-2' : '1-2 days'}</p>
                  </div>
                </div>
                <div class="estimate-item">
                  <span class="estimate-icon">📞</span>
                  <div class="estimate-info">
                    <h4>${lang === 'sw' ? 'Ufuatiliaji' : 'Tracking'}</h4>
                    <p>${lang === 'sw' ? 'Utapokea ujumbe wa ufuatiliaji' : 'You\'ll receive tracking updates'}</p>
                  </div>
                </div>
              </div>

              <div class="trust-badges">
                <div class="trust-badge">
                  <span class="badge-icon">✅</span>
                  <span>${lang === 'sw' ? 'Mazao Yalioidhinishwa' : 'Verified Produce'}</span>
                </div>
                <div class="trust-badge">
                  <span class="badge-icon">🛡️</span>
                  <span>${lang === 'sw' ? 'Malipo Salama' : 'Secure Payment'}</span>
                </div>
                <div class="trust-badge">
                  <span class="badge-icon">🚚</span>
                  <span>${lang === 'sw' ? 'Uwasilishaji wa Haraka' : 'Fast Delivery'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}