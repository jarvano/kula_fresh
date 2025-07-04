import { t } from '../app.js'

export function FarmerSignUp(lang = 'en') {
  return `
    <div class="farmer-signup-page">
      <div class="container">
        <!-- Page Header -->
        <div class="signup-header">
          <div class="header-content">
            <h1 class="page-title">${lang === 'sw' ? 'Jiunge na KulaFresh kama Mkulima' : 'Join KulaFresh as a Farmer'}</h1>
            <p class="page-subtitle">${lang === 'sw' ? 'Uza mazao yako moja kwa moja kwa wateja wa mijini na upate bei za haki' : 'Sell your produce directly to urban customers and get fair prices'}</p>
          </div>
          <div class="benefits-preview">
            <div class="benefit">
              <span class="benefit-icon">💰</span>
              <span class="benefit-text">${lang === 'sw' ? 'Bei za haki' : 'Fair prices'}</span>
            </div>
            <div class="benefit">
              <span class="benefit-icon">🚚</span>
              <span class="benefit-text">${lang === 'sw' ? 'Uwasilishaji wa haraka' : 'Fast delivery'}</span>
            </div>
            <div class="benefit">
              <span class="benefit-icon">📱</span>
              <span class="benefit-text">${lang === 'sw' ? 'Rahisi kutumia' : 'Easy to use'}</span>
            </div>
          </div>
        </div>

        <!-- Sign Up Form -->
        <div class="signup-form-container">
          <div class="form-progress">
            <div class="progress-step active">
              <div class="step-number">1</div>
              <div class="step-label">${lang === 'sw' ? 'Maelezo ya Kibinafsi' : 'Personal Info'}</div>
            </div>
            <div class="progress-step">
              <div class="step-number">2</div>
              <div class="step-label">${lang === 'sw' ? 'Maelezo ya Shamba' : 'Farm Details'}</div>
            </div>
            <div class="progress-step">
              <div class="step-number">3</div>
              <div class="step-label">${lang === 'sw' ? 'Uthibitisho' : 'Verification'}</div>
            </div>
          </div>

          <form class="signup-form" id="farmerSignupForm">
            <!-- Step 1: Personal Information -->
            <div class="form-step active" data-step="1">
              <h3 class="step-title">${lang === 'sw' ? 'Maelezo ya Kibinafsi' : 'Personal Information'}</h3>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName" class="form-label">${lang === 'sw' ? 'Jina la Kwanza' : 'First Name'} *</label>
                  <input type="text" id="firstName" name="firstName" class="form-input" required>
                </div>
                <div class="form-group">
                  <label for="lastName" class="form-label">${lang === 'sw' ? 'Jina la Mwisho' : 'Last Name'} *</label>
                  <input type="text" id="lastName" name="lastName" class="form-input" required>
                </div>
              </div>

              <div class="form-group">
                <label for="phone" class="form-label">${lang === 'sw' ? 'Nambari ya Simu' : 'Phone Number'} *</label>
                <input type="tel" id="phone" name="phone" class="form-input" placeholder="+254 7XX XXX XXX" required>
                <small class="form-help">${lang === 'sw' ? 'Tutakutumia ujumbe wa uthibitisho' : 'We\'ll send you a verification message'}</small>
              </div>

              <div class="form-group">
                <label for="email" class="form-label">${lang === 'sw' ? 'Barua Pepe (si lazima)' : 'Email (Optional)'}</label>
                <input type="email" id="email" name="email" class="form-input">
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="county" class="form-label">${lang === 'sw' ? 'Kaunti' : 'County'} *</label>
                  <select id="county" name="county" class="form-select" required>
                    <option value="">${lang === 'sw' ? 'Chagua kaunti' : 'Select county'}</option>
                    <option value="nairobi">Nairobi</option>
                    <option value="kiambu">Kiambu</option>
                    <option value="nakuru">Nakuru</option>
                    <option value="meru">Meru</option>
                    <option value="kisumu">Kisumu</option>
                    <option value="eldoret">Eldoret</option>
                    <option value="machakos">Machakos</option>
                    <option value="nyeri">Nyeri</option>
                    <option value="kericho">Kericho</option>
                    <option value="kisii">Kisii</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="location" class="form-label">${lang === 'sw' ? 'Eneo/Kijiji' : 'Area/Village'} *</label>
                  <input type="text" id="location" name="location" class="form-input" required>
                </div>
              </div>
            </div>

            <!-- Step 2: Farm Details -->
            <div class="form-step" data-step="2">
              <h3 class="step-title">${lang === 'sw' ? 'Maelezo ya Shamba' : 'Farm Details'}</h3>
              
              <div class="form-group">
                <label for="farmSize" class="form-label">${lang === 'sw' ? 'Ukubwa wa Shamba' : 'Farm Size'} *</label>
                <select id="farmSize" name="farmSize" class="form-select" required>
                  <option value="">${lang === 'sw' ? 'Chagua ukubwa' : 'Select size'}</option>
                  <option value="less-than-1">${lang === 'sw' ? 'Chini ya ekari 1' : 'Less than 1 acre'}</option>
                  <option value="1-2">${lang === 'sw' ? 'Ekari 1-2' : '1-2 acres'}</option>
                  <option value="3-5">${lang === 'sw' ? 'Ekari 3-5' : '3-5 acres'}</option>
                  <option value="5-10">${lang === 'sw' ? 'Ekari 5-10' : '5-10 acres'}</option>
                  <option value="more-than-10">${lang === 'sw' ? 'Zaidi ya ekari 10' : 'More than 10 acres'}</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">${lang === 'sw' ? 'Aina za Mazao Unayolima' : 'Types of Produce You Grow'} *</label>
                <div class="checkbox-grid">
                  <label class="checkbox-item">
                    <input type="checkbox" name="produce" value="vegetables">
                    <span class="checkbox-label">🥬 ${t('vegetables', lang)}</span>
                  </label>
                  <label class="checkbox-item">
                    <input type="checkbox" name="produce" value="fruits">
                    <span class="checkbox-label">🍌 ${t('fruits', lang)}</span>
                  </label>
                  <label class="checkbox-item">
                    <input type="checkbox" name="produce" value="grains">
                    <span class="checkbox-label">🌾 ${t('grains', lang)}</span>
                  </label>
                  <label class="checkbox-item">
                    <input type="checkbox" name="produce" value="herbs">
                    <span class="checkbox-label">🌿 ${lang === 'sw' ? 'Viungo' : 'Herbs'}</span>
                  </label>
                </div>
              </div>

              <div class="form-group">
                <label for="specificProduce" class="form-label">${lang === 'sw' ? 'Mazao Maalum (mfano: nyanya, sukuma wiki)' : 'Specific Produce (e.g., tomatoes, sukuma wiki)'}</label>
                <textarea id="specificProduce" name="specificProduce" class="form-textarea" rows="3" placeholder="${lang === 'sw' ? 'Orodhesha mazao unayolima...' : 'List the produce you grow...'}"></textarea>
              </div>

              <div class="form-group">
                <label for="harvestSchedule" class="form-label">${lang === 'sw' ? 'Ratiba ya Mavuno' : 'Harvest Schedule'}</label>
                <select id="harvestSchedule" name="harvestSchedule" class="form-select">
                  <option value="">${lang === 'sw' ? 'Chagua ratiba' : 'Select schedule'}</option>
                  <option value="weekly">${lang === 'sw' ? 'Kila wiki' : 'Weekly'}</option>
                  <option value="bi-weekly">${lang === 'sw' ? 'Kila wiki mbili' : 'Bi-weekly'}</option>
                  <option value="monthly">${lang === 'sw' ? 'Kila mwezi' : 'Monthly'}</option>
                  <option value="seasonal">${lang === 'sw' ? 'Kwa msimu' : 'Seasonal'}</option>
                </select>
              </div>

              <div class="form-group">
                <label for="experience" class="form-label">${lang === 'sw' ? 'Uzoefu wa Kilimo (miaka)' : 'Farming Experience (years)'}</label>
                <select id="experience" name="experience" class="form-select">
                  <option value="">${lang === 'sw' ? 'Chagua uzoefu' : 'Select experience'}</option>
                  <option value="0-2">${lang === 'sw' ? 'Miaka 0-2' : '0-2 years'}</option>
                  <option value="3-5">${lang === 'sw' ? 'Miaka 3-5' : '3-5 years'}</option>
                  <option value="6-10">${lang === 'sw' ? 'Miaka 6-10' : '6-10 years'}</option>
                  <option value="10+">${lang === 'sw' ? 'Zaidi ya miaka 10' : '10+ years'}</option>
                </select>
              </div>
            </div>

            <!-- Step 3: Verification -->
            <div class="form-step" data-step="3">
              <h3 class="step-title">${lang === 'sw' ? 'Uthibitisho' : 'Verification'}</h3>
              
              <div class="verification-info">
                <div class="info-card">
                  <h4>${lang === 'sw' ? 'Kwa nini Uthibitisho?' : 'Why Verification?'}</h4>
                  <p>${lang === 'sw' ? 'Uthibitisho unasaidia kujenga uaminifu na kuhakikisha ubora wa mazao kwa wateja wetu.' : 'Verification helps build trust and ensures quality produce for our customers.'}</p>
                </div>
              </div>

              <div class="form-group">
                <label for="idNumber" class="form-label">${lang === 'sw' ? 'Nambari ya Kitambulisho' : 'ID Number'} *</label>
                <input type="text" id="idNumber" name="idNumber" class="form-input" required>
                <small class="form-help">${lang === 'sw' ? 'Kitambulisho chako cha kitaifa au pasipoti' : 'Your national ID or passport number'}</small>
              </div>

              <div class="form-group">
                <label class="form-label">${lang === 'sw' ? 'Picha za Shamba' : 'Farm Photos'}</label>
                <div class="file-upload-area">
                  <input type="file" id="farmPhotos" name="farmPhotos" multiple accept="image/*" class="file-input">
                  <div class="upload-placeholder">
                    <div class="upload-icon">📷</div>
                    <p>${lang === 'sw' ? 'Bofya kupakia picha za shamba lako' : 'Click to upload photos of your farm'}</p>
                    <small>${lang === 'sw' ? 'Picha 2-5 (si lazima)' : '2-5 photos (optional)'}</small>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label class="checkbox-item agreement">
                  <input type="checkbox" name="agreement" required>
                  <span class="checkbox-label">
                    ${lang === 'sw' ? 'Ninakubali' : 'I agree to the'} 
                    <a href="#" class="link">${lang === 'sw' ? 'masharti ya huduma' : 'terms of service'}</a> 
                    ${lang === 'sw' ? 'na' : 'and'} 
                    <a href="#" class="link">${lang === 'sw' ? 'sera ya faragha' : 'privacy policy'}</a>
                  </span>
                </label>
              </div>
            </div>

            <!-- Form Navigation -->
            <div class="form-navigation">
              <button type="button" class="btn btn-outline prev-btn" style="display: none;">
                ${lang === 'sw' ? 'Nyuma' : 'Previous'}
              </button>
              <button type="button" class="btn btn-primary next-btn">
                ${lang === 'sw' ? 'Endelea' : 'Next'}
              </button>
              <button type="submit" class="btn btn-primary submit-btn" style="display: none;">
                ${lang === 'sw' ? 'Wasilisha Ombi' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>

        <!-- Success Stories -->
        <div class="success-stories">
          <h3>${lang === 'sw' ? 'Hadithi za Mafanikio' : 'Success Stories'}</h3>
          <div class="stories-grid">
            <div class="story-card">
              <div class="story-avatar">👨🏿‍🌾</div>
              <div class="story-content">
                <h4>John Mwangi</h4>
                <p class="story-location">Kiambu County</p>
                <p class="story-text">"${lang === 'sw' ? 'Mapato yangu yameongezeka kwa 40% tangu nijunge na KulaFresh. Sasa ninauza moja kwa moja kwa wateja bila wapatanishi.' : 'My income has increased by 40% since joining KulaFresh. Now I sell directly to customers without middlemen.'}"</p>
              </div>
            </div>
            <div class="story-card">
              <div class="story-avatar">👩🏿‍🌾</div>
              <div class="story-content">
                <h4>Mary Wanjiku</h4>
                <p class="story-location">Nakuru County</p>
                <p class="story-text">"${lang === 'sw' ? 'Jukwaa ni rahisi kutumia na nina uhakika wa soko kwa mazao yangu. Wateja wananiamini kwa ubora wa mazao yangu.' : 'The platform is easy to use and I have guaranteed market for my produce. Customers trust me for quality produce.'}"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}