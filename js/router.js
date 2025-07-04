// Simple router for handling page navigation
export class Router {
  constructor() {
    this.routes = new Map()
    this.currentPage = 'home'
    this.currentLanguage = 'en'
  }

  addRoute(path, component) {
    this.routes.set(path, component)
  }

  navigate(path, language = this.currentLanguage) {
    this.currentPage = path
    this.currentLanguage = language
    this.render()
  }

  setLanguage(language) {
    this.currentLanguage = language
    this.render()
  }

  render() {
    const app = document.querySelector('#app')
    const component = this.routes.get(this.currentPage)
    
    if (component) {
      app.innerHTML = component(this.currentLanguage)
      this.initializePageSpecificFeatures()
    }
  }

  initializePageSpecificFeatures() {
    // Initialize features specific to each page
    switch (this.currentPage) {
      case 'browse':
        this.initializeBrowseFeatures()
        break
      case 'farmer-signup':
        this.initializeFarmerSignupFeatures()
        break
      case 'order':
        this.initializeOrderFeatures()
        break
      case 'contact':
        this.initializeContactFeatures()
        break
    }
  }

  initializeBrowseFeatures() {
    // Product filtering
    const filterButtons = document.querySelectorAll('.filter-btn')
    const productCards = document.querySelectorAll('.product-card')
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'))
        button.classList.add('active')
        
        const filter = button.dataset.filter
        
        productCards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = 'block'
          } else {
            card.style.display = 'none'
          }
        })
      })
    })

    // Search functionality
    const searchInput = document.querySelector('.search-input')
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase()
        
        productCards.forEach(card => {
          const productName = card.querySelector('.product-name').textContent.toLowerCase()
          const farmerName = card.querySelector('.farmer-name').textContent.toLowerCase()
          
          if (productName.includes(searchTerm) || farmerName.includes(searchTerm)) {
            card.style.display = 'block'
          } else {
            card.style.display = 'none'
          }
        })
      })
    }

    // Wishlist functionality
    const wishlistButtons = document.querySelectorAll('.wishlist-btn')
    wishlistButtons.forEach(button => {
      button.addEventListener('click', () => {
        button.textContent = button.textContent === '♡' ? '♥' : '♡'
        button.style.color = button.textContent === '♥' ? '#EF4444' : '#6B7280'
      })
    })
  }

  initializeFarmerSignupFeatures() {
    let currentStep = 1
    const totalSteps = 3

    const nextBtn = document.querySelector('.next-btn')
    const prevBtn = document.querySelector('.prev-btn')
    const submitBtn = document.querySelector('.submit-btn')
    const form = document.querySelector('#farmerSignupForm')

    const updateStep = (step) => {
      // Update progress indicators
      document.querySelectorAll('.progress-step').forEach((stepEl, index) => {
        if (index < step) {
          stepEl.classList.add('active')
        } else {
          stepEl.classList.remove('active')
        }
      })

      // Show/hide form steps
      document.querySelectorAll('.form-step').forEach((stepEl, index) => {
        if (index === step - 1) {
          stepEl.classList.add('active')
        } else {
          stepEl.classList.remove('active')
        }
      })

      // Update navigation buttons
      prevBtn.style.display = step === 1 ? 'none' : 'block'
      nextBtn.style.display = step === totalSteps ? 'none' : 'block'
      submitBtn.style.display = step === totalSteps ? 'block' : 'none'
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentStep < totalSteps) {
          currentStep++
          updateStep(currentStep)
        }
      })
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
          currentStep--
          updateStep(currentStep)
        }
      })
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        alert(this.currentLanguage === 'sw' 
          ? 'Ombi lako limewasilishwa! Tutawasiliana nawe hivi karibuni.' 
          : 'Your application has been submitted! We\'ll contact you soon.')
      })
    }
  }

  initializeOrderFeatures() {
    // Quantity controls
    const qtyButtons = document.querySelectorAll('.qty-btn')
    qtyButtons.forEach(button => {
      button.addEventListener('click', () => {
        const input = button.parentElement.querySelector('.qty-input')
        const isPlus = button.classList.contains('plus')
        const currentValue = parseInt(input.value)
        
        if (isPlus) {
          input.value = currentValue + 1
        } else if (currentValue > 1) {
          input.value = currentValue - 1
        }
        
        this.updateOrderTotal()
      })
    })

    // Remove product
    const removeButtons = document.querySelectorAll('.remove-btn')
    removeButtons.forEach(button => {
      button.addEventListener('click', () => {
        button.closest('.selected-product').remove()
        this.updateOrderTotal()
      })
    })

    // Form submission
    const orderForm = document.querySelector('#buyerOrderForm')
    if (orderForm) {
      orderForm.addEventListener('submit', (e) => {
        e.preventDefault()
        alert(this.currentLanguage === 'sw' 
          ? 'Agizo lako limewasilishwa! Tutawasiliana nawe kwa maelezo ya ufuatiliaji.' 
          : 'Your order has been submitted! We\'ll contact you with tracking details.')
      })
    }
  }

  updateOrderTotal() {
    // This would calculate and update the order total
    // For demo purposes, we'll just show a placeholder
    console.log('Order total updated')
  }

  initializeContactFeatures() {
    // Contact form submission
    const contactForm = document.querySelector('#contactForm')
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault()
        alert(this.currentLanguage === 'sw' 
          ? 'Ujumbe wako umewasilishwa! Tutajibu hivi karibuni.' 
          : 'Your message has been sent! We\'ll respond soon.')
      })
    }

    // WhatsApp button
    const whatsappBtn = document.querySelector('.whatsapp-btn')
    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', () => {
        const message = this.currentLanguage === 'sw' 
          ? 'Hujambo! Ningependa kupata msaada kutoka KulaFresh.'
          : 'Hello! I would like to get help from KulaFresh.'
        const whatsappUrl = `https://wa.me/254700123456?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')
      })
    }

    // Help category buttons
    const helpCategories = document.querySelectorAll('.help-category')
    helpCategories.forEach(category => {
      category.addEventListener('click', () => {
        const categoryText = category.querySelector('.category-text').textContent
        const subject = document.querySelector('#contactSubject')
        if (subject) {
          // Map category to subject options
          const subjectMap = {
            'For Farmers': 'farmer-support',
            'Kwa Wakulima': 'farmer-support',
            'For Buyers': 'buyer-support',
            'Kwa Wanunuzi': 'buyer-support',
            'Delivery': 'delivery-issue',
            'Uwasilishaji': 'delivery-issue',
            'Payments': 'payment-issue',
            'Malipo': 'payment-issue'
          }
          subject.value = subjectMap[categoryText] || 'other'
        }
      })
    })
  }
}