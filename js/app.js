import { Header } from './components/Header.js'
import { Hero } from './components/Hero.js'
import { ProductGrid } from './components/ProductGrid.js'
import { BusinessModel } from './components/BusinessModel.js'
import { LaunchPlan } from './components/LaunchPlan.js'
import { Footer } from './components/Footer.js'
import { BrowseProduce } from './components/BrowseProduce.js'
import { FarmerSignUp } from './components/FarmerSignUp.js'
import { BuyerOrder } from './components/BuyerOrder.js'
import { AboutUs } from './components/AboutUs.js'
import { Contact } from './components/Contact.js'
import { Router } from './router.js'
import { translations } from './translations.js'

let currentLanguage = 'en'
let router

export function createApp() {
  // Initialize router
  router = new Router()
  
  // Add routes
  router.addRoute('home', renderHomePage)
  router.addRoute('browse', renderBrowsePage)
  router.addRoute('farmer-signup', renderFarmerSignupPage)
  router.addRoute('order', renderOrderPage)
  router.addRoute('about', renderAboutPage)
  router.addRoute('contact', renderContactPage)
  
  // Render initial page
  renderApp()
  
  // Initialize interactive components
  initializeNavigation()
  initializeLanguageToggle()
  initializeProductFilters()
  initializeMobileMenu()
}

function renderHomePage(lang = 'en') {
  return `
    ${Header(lang)}
    ${Hero(lang)}
    ${ProductGrid(lang)}
    ${BusinessModel(lang)}
    ${LaunchPlan(lang)}
    ${Footer(lang)}
  `
}

function renderBrowsePage(lang = 'en') {
  return `
    ${Header(lang)}
    ${BrowseProduce(lang)}
    ${Footer(lang)}
  `
}

function renderFarmerSignupPage(lang = 'en') {
  return `
    ${Header(lang)}
    ${FarmerSignUp(lang)}
    ${Footer(lang)}
  `
}

function renderOrderPage(lang = 'en') {
  return `
    ${Header(lang)}
    ${BuyerOrder(lang)}
    ${Footer(lang)}
  `
}

function renderAboutPage(lang = 'en') {
  return `
    ${Header(lang)}
    ${AboutUs(lang)}
    ${Footer(lang)}
  `
}

function renderContactPage(lang = 'en') {
  return `
    ${Header(lang)}
    ${Contact(lang)}
    ${Footer(lang)}
  `
}

function renderApp() {
  const app = document.querySelector('#app')
  app.innerHTML = renderHomePage(currentLanguage)
  
  // Re-initialize components after render
  initializeNavigation()
  initializeLanguageToggle()
  initializeProductFilters()
  initializeMobileMenu()
}

function initializeNavigation() {
  // Handle navigation clicks
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a, button')
    if (!target) return

    // Handle navigation links
    if (target.getAttribute('href') === '#marketplace' || target.textContent.includes('Browse') || target.textContent.includes('Vinjari')) {
      e.preventDefault()
      router.navigate('browse', currentLanguage)
    } else if (target.textContent.includes('Join as Farmer') || target.textContent.includes('Jiunge kama Mkulima')) {
      e.preventDefault()
      router.navigate('farmer-signup', currentLanguage)
    } else if (target.textContent.includes('Order') || target.textContent.includes('Agiza')) {
      e.preventDefault()
      router.navigate('order', currentLanguage)
    } else if (target.getAttribute('href') === '#about' || target.textContent.includes('About') || target.textContent.includes('Kuhusu')) {
      e.preventDefault()
      router.navigate('about', currentLanguage)
    } else if (target.textContent.includes('Contact') || target.textContent.includes('Wasiliana')) {
      e.preventDefault()
      router.navigate('contact', currentLanguage)
    } else if (target.textContent.includes('Home') || target.textContent.includes('Nyumbani')) {
      e.preventDefault()
      router.navigate('home', currentLanguage)
    }

    // Handle CTA buttons
    if (target.textContent.includes('Start Shopping') || target.textContent.includes('Anza Ununuzi')) {
      e.preventDefault()
      router.navigate('browse', currentLanguage)
    } else if (target.textContent.includes('Start Buying') || target.textContent.includes('Anza Ununuzi')) {
      e.preventDefault()
      router.navigate('browse', currentLanguage)
    } else if (target.textContent.includes('View Details') || target.textContent.includes('Ona Zaidi')) {
      e.preventDefault()
      router.navigate('order', currentLanguage)
    } else if (target.textContent.includes('Order Now') || target.textContent.includes('Agiza Sasa')) {
      e.preventDefault()
      router.navigate('order', currentLanguage)
    }
  })
}

function initializeLanguageToggle() {
  const langToggle = document.querySelector('.lang-toggle')
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'en' ? 'sw' : 'en'
      document.documentElement.lang = currentLanguage
      
      // Update router language and re-render
      router.setLanguage(currentLanguage)
      
      // Re-initialize components after language change
      initializeNavigation()
      initializeLanguageToggle()
      initializeProductFilters()
      initializeMobileMenu()
    })
  }
}

function initializeProductFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn')
  const productCards = document.querySelectorAll('.product-card')
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active filter
      filterButtons.forEach(btn => btn.classList.remove('active'))
      button.classList.add('active')
      
      const filter = button.dataset.filter
      
      // Filter products
      productCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block'
        } else {
          card.style.display = 'none'
        }
      })
    })
  })
}

function initializeMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle')
  const mobileMenu = document.querySelector('.mobile-menu')
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active')
    })
  }
}

export function t(key, lang = currentLanguage) {
  return translations[lang]?.[key] || translations.en[key] || key
}