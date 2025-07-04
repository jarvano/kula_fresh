import { t } from '../app.js'

export function AboutUs(lang = 'en') {
  return `
    <div class="about-us-page">
      <div class="container">
        <!-- Hero Section -->
        <div class="about-hero">
          <div class="hero-content">
            <h1 class="page-title">${lang === 'sw' ? 'Kuhusu KulaFresh' : 'About KulaFresh'}</h1>
            <p class="hero-subtitle">${lang === 'sw' ? 'Tunajenga daraja kati ya wakulima wa vijijini na wateja wa mijini, tukiunda mfumo wa chakula unaoendelea na wa haki.' : 'Building bridges between rural farmers and urban consumers, creating a sustainable and fair food system.'}</p>
          </div>
          <div class="hero-image">
            <img src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Kenyan farmers" class="about-hero-img">
          </div>
        </div>

        <!-- Mission Section -->
        <div class="mission-section">
          <div class="section-content">
            <h2 class="section-title">${lang === 'sw' ? 'Dhamira Yetu' : 'Our Mission'}</h2>
            <p class="mission-text">
              ${lang === 'sw' 
                ? 'Dhamira yetu ni kuwawezesha wakulima wadogo wa Kenya kwa kuwapatia ufikiaji wa moja kwa moja wa soko, huku tukiwapa wateja wa mijini mazao safi, ya bei nafuu, na ya ndani. Tunaamini katika kujenga mfumo wa chakula ambao ni wa haki, endelevu, na unaofaidisha kila mtu.'
                : 'Our mission is to empower Kenyan smallholder farmers by providing direct market access, while giving urban consumers fresh, affordable, and locally-sourced produce. We believe in building a food system that is fair, sustainable, and beneficial for everyone.'
              }
            </p>
          </div>
        </div>

        <!-- Story Section -->
        <div class="story-section">
          <h2 class="section-title">${lang === 'sw' ? 'Hadithi Yetu' : 'Our Story'}</h2>
          
          <div class="story-timeline">
            <div class="timeline-item">
              <div class="timeline-marker">
                <div class="timeline-icon">💡</div>
              </div>
              <div class="timeline-content">
                <h3>${lang === 'sw' ? 'Wazo Lilianza' : 'The Idea Was Born'}</h3>
                <p class="timeline-year">2024</p>
                <p>${lang === 'sw' 
                  ? 'Baada ya kuona changamoto za wakulima wadogo wa Kenya katika kupata soko la haki na wateja wa mijini kutafuta mazao safi ya ndani, tuliamua kuunda suluhisho.'
                  : 'After witnessing the challenges faced by Kenyan smallholder farmers in accessing fair markets and urban consumers seeking fresh local produce, we decided to create a solution.'
                }</p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-marker">
                <div class="timeline-icon">🤝</div>
              </div>
              <div class="timeline-content">
                <h3>${lang === 'sw' ? 'Kushirikiana na Wakulima' : 'Partnering with Farmers'}</h3>
                <p class="timeline-year">2024</p>
                <p>${lang === 'sw'
                  ? 'Tulianza kushirikiana na wakulima wa Kiambu, Nakuru, na Meru, tukijifunza changamoto zao na kujenga jukwaa ambalo linawafaa.'
                  : 'We began partnering with farmers in Kiambu, Nakuru, and Meru, learning about their challenges and building a platform that serves their needs.'
                }</p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-marker">
                <div class="timeline-icon">🚀</div>
              </div>
              <div class="timeline-content">
                <h3>${lang === 'sw' ? 'Uzinduzi wa Jukwaa' : 'Platform Launch'}</h3>
                <p class="timeline-year">2025</p>
                <p>${lang === 'sw'
                  ? 'KulaFresh inazinduliwa rasmi, ikiwa na wakulima 100+ walioidhinishwa na wateja 1,000+ wa mijini.'
                  : 'KulaFresh officially launches with 100+ verified farmers and 1,000+ urban customers.'
                }</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Values Section -->
        <div class="values-section">
          <h2 class="section-title">${lang === 'sw' ? 'Maadili Yetu' : 'Our Values'}</h2>
          
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">🤝</div>
              <h3>${lang === 'sw' ? 'Uwazi' : 'Transparency'}</h3>
              <p>${lang === 'sw'
                ? 'Tunahakikisha uwazi katika bei, ubora, na chanzo cha mazao yote kwenye jukwaa letu.'
                : 'We ensure transparency in pricing, quality, and sourcing of all produce on our platform.'
              }</p>
            </div>

            <div class="value-card">
              <div class="value-icon">⚖️</div>
              <h3>${lang === 'sw' ? 'Haki' : 'Fairness'}</h3>
              <p>${lang === 'sw'
                ? 'Wakulima wanapata bei za haki kwa mazao yao, na wateja wanapata thamani nzuri kwa pesa zao.'
                : 'Farmers receive fair prices for their produce, and customers get great value for their money.'
              }</p>
            </div>

            <div class="value-card">
              <div class="value-icon">🌱</div>
              <h3>${lang === 'sw' ? 'Mazingira' : 'Sustainability'}</h3>
              <p>${lang === 'sw'
                ? 'Tunaunga mkono mbinu za kilimo endelevu na kupunguza upotevu wa chakula.'
                : 'We support sustainable farming practices and reduce food waste.'
              }</p>
            </div>

            <div class="value-card">
              <div class="value-icon">💪</div>
              <h3>${lang === 'sw' ? 'Uwezo' : 'Empowerment'}</h3>
              <p>${lang === 'sw'
                ? 'Tunawawezesha wakulima wadogo kupata ufikiaji wa teknolojia na soko.'
                : 'We empower smallholder farmers with access to technology and markets.'
              }</p>
            </div>

            <div class="value-card">
              <div class="value-icon">🏘️</div>
              <h3>${lang === 'sw' ? 'Jamii' : 'Community'}</h3>
              <p>${lang === 'sw'
                ? 'Tunajenga jamii imara ya wakulima na wateja wanaoshirikiana.'
                : 'We build a strong community of farmers and customers working together.'
              }</p>
            </div>

            <div class="value-card">
              <div class="value-icon">🎯</div>
              <h3>${lang === 'sw' ? 'Ubora' : 'Quality'}</h3>
              <p>${lang === 'sw'
                ? 'Tunahakikisha mazao yote yanakidhi viwango vya juu vya ubora na usalama.'
                : 'We ensure all produce meets high standards of quality and safety.'
              }</p>
            </div>
          </div>
        </div>

        <!-- Team Section -->
        <div class="team-section">
          <h2 class="section-title">${lang === 'sw' ? 'Timu Yetu' : 'Our Team'}</h2>
          <p class="team-intro">${lang === 'sw'
            ? 'Timu yetu ni ya watu wenye shauku ya kujenga mfumo wa chakula ulio bora kwa Kenya.'
            : 'Our team is passionate about building a better food system for Kenya.'
          }</p>
          
          <div class="team-grid">
            <div class="team-member">
              <div class="member-avatar">👨🏿‍💼</div>
              <h4>James Kariuki</h4>
              <p class="member-role">${lang === 'sw' ? 'Mkurugenzi Mkuu' : 'CEO & Co-Founder'}</p>
              <p class="member-bio">${lang === 'sw'
                ? 'Uzoefu wa miaka 10 katika teknolojia ya kilimo na maendeleo ya vijijini.'
                : '10 years experience in agricultural technology and rural development.'
              }</p>
            </div>

            <div class="team-member">
              <div class="member-avatar">👩🏿‍💼</div>
              <h4>Sarah Wanjiku</h4>
              <p class="member-role">${lang === 'sw' ? 'Mkurugenzi wa Teknolojia' : 'CTO & Co-Founder'}</p>
              <p class="member-bio">${lang === 'sw'
                ? 'Mtaalamu wa teknolojia na uzoefu wa kujenga mifumo ya simu kwa masoko ya Afrika.'
                : 'Technology expert with experience building mobile systems for African markets.'
              }</p>
            </div>

            <div class="team-member">
              <div class="member-avatar">👨🏿‍🌾</div>
              <h4>Peter Mwangi</h4>
              <p class="member-role">${lang === 'sw' ? 'Mkurugenzi wa Wakulima' : 'Head of Farmer Relations'}</p>
              <p class="member-bio">${lang === 'sw'
                ? 'Mkulima mwenye uzoefu na mshauri wa vyama vya ushirika wa kilimo.'
                : 'Experienced farmer and agricultural cooperative advisor.'
              }</p>
            </div>
          </div>
        </div>

        <!-- Impact Section -->
        <div class="impact-section">
          <h2 class="section-title">${lang === 'sw' ? 'Athari Yetu' : 'Our Impact'}</h2>
          
          <div class="impact-stats">
            <div class="impact-stat">
              <div class="stat-number">500+</div>
              <div class="stat-label">${lang === 'sw' ? 'Wakulima Walioidhinishwa' : 'Verified Farmers'}</div>
            </div>
            <div class="impact-stat">
              <div class="stat-number">1,000+</div>
              <div class="stat-label">${lang === 'sw' ? 'Wateja Hai' : 'Active Customers'}</div>
            </div>
            <div class="impact-stat">
              <div class="stat-number">30%</div>
              <div class="stat-label">${lang === 'sw' ? 'Ongezeko la Mapato ya Wakulima' : 'Farmer Income Increase'}</div>
            </div>
            <div class="impact-stat">
              <div class="stat-number">50+</div>
              <div class="stat-label">${lang === 'sw' ? 'Aina za Mazao' : 'Product Varieties'}</div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="cta-section">
          <div class="cta-content">
            <h2>${lang === 'sw' ? 'Jiunge Nasi' : 'Join Us'}</h2>
            <p>${lang === 'sw'
              ? 'Uwe sehemu ya mabadiliko ya mfumo wa chakula wa Kenya. Jiunge nasi leo!'
              : 'Be part of transforming Kenya\'s food system. Join us today!'
            }</p>
            <div class="cta-buttons">
              <button class="btn btn-primary btn-large">
                ${lang === 'sw' ? 'Jiunge kama Mkulima' : 'Join as Farmer'}
              </button>
              <button class="btn btn-outline btn-large">
                ${lang === 'sw' ? 'Anza Ununuzi' : 'Start Shopping'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}