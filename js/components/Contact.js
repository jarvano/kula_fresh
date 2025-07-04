import { t } from '../app.js'

export function Contact(lang = 'en') {
  return `
    <div class="contact-page">
      <div class="container">
        <!-- Page Header -->
        <div class="contact-header">
          <h1 class="page-title">${lang === 'sw' ? 'Wasiliana Nasi' : 'Contact Us'}</h1>
          <p class="page-subtitle">${lang === 'sw' ? 'Tuko hapa kukusaidia. Wasiliana nasi kwa njia yoyote inayokufaa.' : 'We\'re here to help. Get in touch with us through any of these channels.'}</p>
        </div>

        <div class="contact-container">
          <!-- Contact Information -->
          <div class="contact-info-section">
            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">📞</div>
                <div class="method-content">
                  <h3>${lang === 'sw' ? 'Piga Simu' : 'Call Us'}</h3>
                  <p class="method-value">+254 700 123 456</p>
                  <p class="method-description">${lang === 'sw' ? 'Jumatatu - Ijumaa, 8AM - 6PM' : 'Monday - Friday, 8AM - 6PM'}</p>
                  <button class="btn btn-outline btn-small">
                    📞 ${lang === 'sw' ? 'Piga Simu' : 'Call Now'}
                  </button>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">📱</div>
                <div class="method-content">
                  <h3>WhatsApp</h3>
                  <p class="method-value">+254 700 123 456</p>
                  <p class="method-description">${lang === 'sw' ? 'Jibu la haraka, siku zote' : 'Quick response, 24/7'}</p>
                  <button class="btn btn-primary btn-small whatsapp-btn">
                    📱 ${lang === 'sw' ? 'Tuma WhatsApp' : 'Send WhatsApp'}
                  </button>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">📧</div>
                <div class="method-content">
                  <h3>${lang === 'sw' ? 'Barua Pepe' : 'Email'}</h3>
                  <p class="method-value">hello@kulafresh.co.ke</p>
                  <p class="method-description">${lang === 'sw' ? 'Tutajibu ndani ya masaa 24' : 'We\'ll respond within 24 hours'}</p>
                  <button class="btn btn-outline btn-small">
                    📧 ${lang === 'sw' ? 'Tuma Barua Pepe' : 'Send Email'}
                  </button>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">📍</div>
                <div class="method-content">
                  <h3>${lang === 'sw' ? 'Ofisi Yetu' : 'Our Office'}</h3>
                  <p class="method-value">Nairobi, Kenya</p>
                  <p class="method-description">${lang === 'sw' ? 'Westlands, Nairobi' : 'Westlands, Nairobi'}</p>
                  <button class="btn btn-outline btn-small">
                    📍 ${lang === 'sw' ? 'Ona Ramani' : 'View Map'}
                  </button>
                </div>
              </div>
            </div>

            <!-- Quick Help -->
            <div class="quick-help">
              <h3>${lang === 'sw' ? 'Msaada wa Haraka' : 'Quick Help'}</h3>
              <div class="help-categories">
                <button class="help-category">
                  <span class="category-icon">🌾</span>
                  <span class="category-text">${lang === 'sw' ? 'Kwa Wakulima' : 'For Farmers'}</span>
                </button>
                <button class="help-category">
                  <span class="category-icon">🛒</span>
                  <span class="category-text">${lang === 'sw' ? 'Kwa Wanunuzi' : 'For Buyers'}</span>
                </button>
                <button class="help-category">
                  <span class="category-icon">🚚</span>
                  <span class="category-text">${lang === 'sw' ? 'Uwasilishaji' : 'Delivery'}</span>
                </button>
                <button class="help-category">
                  <span class="category-icon">💳</span>
                  <span class="category-text">${lang === 'sw' ? 'Malipo' : 'Payments'}</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-section">
            <div class="form-container">
              <h3>${lang === 'sw' ? 'Tutumie Ujumbe' : 'Send Us a Message'}</h3>
              <p class="form-description">${lang === 'sw' ? 'Jaza fomu hii na tutawasiliana nawe haraka.' : 'Fill out this form and we\'ll get back to you quickly.'}</p>
              
              <form class="contact-form" id="contactForm">
                <div class="form-row">
                  <div class="form-group">
                    <label for="contactName" class="form-label">${lang === 'sw' ? 'Jina' : 'Name'} *</label>
                    <input type="text" id="contactName" name="contactName" class="form-input" required>
                  </div>
                  <div class="form-group">
                    <label for="contactEmail" class="form-label">${lang === 'sw' ? 'Barua Pepe' : 'Email'} *</label>
                    <input type="email" id="contactEmail" name="contactEmail" class="form-input" required>
                  </div>
                </div>

                <div class="form-group">
                  <label for="contactPhone" class="form-label">${lang === 'sw' ? 'Nambari ya Simu' : 'Phone Number'}</label>
                  <input type="tel" id="contactPhone" name="contactPhone" class="form-input" placeholder="+254 7XX XXX XXX">
                </div>

                <div class="form-group">
                  <label for="contactSubject" class="form-label">${lang === 'sw' ? 'Mada' : 'Subject'} *</label>
                  <select id="contactSubject" name="contactSubject" class="form-select" required>
                    <option value="">${lang === 'sw' ? 'Chagua mada' : 'Select subject'}</option>
                    <option value="farmer-support">${lang === 'sw' ? 'Msaada wa Wakulima' : 'Farmer Support'}</option>
                    <option value="buyer-support">${lang === 'sw' ? 'Msaada wa Wanunuzi' : 'Buyer Support'}</option>
                    <option value="delivery-issue">${lang === 'sw' ? 'Tatizo la Uwasilishaji' : 'Delivery Issue'}</option>
                    <option value="payment-issue">${lang === 'sw' ? 'Tatizo la Malipo' : 'Payment Issue'}</option>
                    <option value="technical-issue">${lang === 'sw' ? 'Tatizo la Kiufundi' : 'Technical Issue'}</option>
                    <option value="partnership">${lang === 'sw' ? 'Ushirikiano' : 'Partnership'}</option>
                    <option value="feedback">${lang === 'sw' ? 'Maoni' : 'Feedback'}</option>
                    <option value="other">${lang === 'sw' ? 'Mengineyo' : 'Other'}</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="contactMessage" class="form-label">${lang === 'sw' ? 'Ujumbe' : 'Message'} *</label>
                  <textarea id="contactMessage" name="contactMessage" class="form-textarea" rows="5" placeholder="${lang === 'sw' ? 'Andika ujumbe wako hapa...' : 'Write your message here...'}" required></textarea>
                </div>

                <div class="form-group">
                  <label class="checkbox-item">
                    <input type="checkbox" name="newsletter" value="yes">
                    <span class="checkbox-label">
                      ${lang === 'sw' ? 'Ningependa kupokea habari za KulaFresh' : 'I\'d like to receive KulaFresh updates'}
                    </span>
                  </label>
                </div>

                <button type="submit" class="btn btn-primary btn-large">
                  ${lang === 'sw' ? 'Tuma Ujumbe' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="faq-section">
          <h2 class="section-title">${lang === 'sw' ? 'Maswali Yanayoulizwa Mara kwa Mara' : 'Frequently Asked Questions'}</h2>
          
          <div class="faq-grid">
            <div class="faq-category">
              <h3>${lang === 'sw' ? 'Kwa Wakulima' : 'For Farmers'}</h3>
              <div class="faq-items">
                <div class="faq-item">
                  <h4>${lang === 'sw' ? 'Je, ni gharama gani ya kujiunga?' : 'What does it cost to join?'}</h4>
                  <p>${lang === 'sw' ? 'Kujiunga ni bure kabisa. Tunachukua kamisheni ndogo tu wakati unapouza.' : 'Joining is completely free. We only take a small commission when you make sales.'}</p>
                </div>
                <div class="faq-item">
                  <h4>${lang === 'sw' ? 'Ni muda gani wa kupata malipo?' : 'How long to receive payments?'}</h4>
                  <p>${lang === 'sw' ? 'Malipo yanafanywa ndani ya siku 2-3 baada ya uwasilishaji.' : 'Payments are made within 2-3 days after delivery.'}</p>
                </div>
              </div>
            </div>

            <div class="faq-category">
              <h3>${lang === 'sw' ? 'Kwa Wanunuzi' : 'For Buyers'}</h3>
              <div class="faq-items">
                <div class="faq-item">
                  <h4>${lang === 'sw' ? 'Je, mazao ni safi?' : 'Is the produce fresh?'}</h4>
                  <p>${lang === 'sw' ? 'Ndiyo, mazao yote yanakuja moja kwa moja kutoka kwa wakulima walioidhinishwa.' : 'Yes, all produce comes directly from verified farmers.'}</p>
                </div>
                <div class="faq-item">
                  <h4>${lang === 'sw' ? 'Ni maeneo gani mnapeleka?' : 'Which areas do you deliver to?'}</h4>
                  <p>${lang === 'sw' ? 'Tunapeleka Nairobi, Kiambu, na maeneo mengine ya karibu.' : 'We deliver to Nairobi, Kiambu, and surrounding areas.'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Media -->
        <div class="social-section">
          <h3>${lang === 'sw' ? 'Tufuate Mitandaoni' : 'Follow Us on Social Media'}</h3>
          <div class="social-links">
            <a href="#" class="social-link facebook">
              <span class="social-icon">📘</span>
              <span class="social-text">Facebook</span>
            </a>
            <a href="#" class="social-link twitter">
              <span class="social-icon">🐦</span>
              <span class="social-text">Twitter</span>
            </a>
            <a href="#" class="social-link instagram">
              <span class="social-icon">📷</span>
              <span class="social-text">Instagram</span>
            </a>
            <a href="#" class="social-link linkedin">
              <span class="social-icon">💼</span>
              <span class="social-text">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `
}