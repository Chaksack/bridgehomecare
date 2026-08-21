<script setup lang="ts">
// import { posts as allPosts } from '~/data/posts'
import { services } from '~/data/services'

useHead({ title: undefined })

// const posts = allPosts.slice(0, 3)

const whoWeServe = [
  { title: 'Individuals Recovering From Outpatient Surgery', text: 'Many patients are discharged the same day after procedures and may need temporary support while anesthesia, pain, or limited mobility affects independence.', icon: '🏥' },
  { title: 'New Mothers During Postpartum Recovery', text: 'Including mothers recovering from cesarean deliveries who need additional help with household responsibilities.', icon: '🤱' },
  { title: 'Adults and Seniors Needing Non-Medical Home Support', text: 'For those who need assistance with daily activities but do not require skilled nursing care.', icon: '🏡' },
  { title: 'Traveling Patients Recovering Locally', text: 'The Denver-Aurora area attracts patients traveling for outpatient and specialty procedures who may need temporary recovery support before returning home.', icon: '✈️' }
]

const trustIndicators = [
  {
    title: 'Professional & Reliable Care',
    icon: '✓',
    items: [
      'Non-medical services designed to support recovery and safety at home',
      'Structured service plans and documentation',
      'Caregivers trained on safety protocols and care boundaries'
    ]
  },
  {
    title: 'Responsible & Compliant Operations',
    icon: '🛡️',
    items: [
      'Non-medical care aligned with Colorado guidelines',
      'Caregivers do not perform clinical or nursing tasks'
    ]
  },
  {
    title: 'Relationship-Based Care',
    icon: '🤝',
    items: [
      'Outpatient surgery centers',
      'Hospitals and discharge planners',
      'Specialty clinics',
      'OB/GYN and maternity practices'
    ]
  }
]

const faqs = reactive([
  { q: 'What services do you offer?', a: 'We provide non-medical home care including pre and post operative recovery support, postpartum and new mother household support, and traditional non-medical home care for adults and seniors.', open: true },
  { q: 'Are your caregivers trained and certified?', a: 'Yes, all our caregivers are thoroughly screened and trained on safety protocols and care boundaries. Our caregivers do not perform clinical or nursing tasks.', open: false },
  { q: 'How do I know which type of care is right for me or my loved one?', a: 'We offer a free initial consultation where we learn about your recovery or household support needs and recommend a personalized support plan.', open: false },
  { q: 'Does BridgeCare provide medical or nursing care?', a: 'No. Our non-medical services supplement — but do not replace — medical or nursing care, and are designed to align with Colorado guidelines.', open: false },
  { q: 'Do you work with hospitals and healthcare providers?', a: 'Yes, we partner with outpatient surgery centers, hospitals and discharge planners, specialty clinics, and OB/GYN and maternity practices to support safe recovery after discharge.', open: false }
])

function toggleFaq(item: (typeof faqs)[number]) {
  item.open = !item.open
}
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/hero-home.jpg" alt="Caregiver supporting a client during recovery at home" />
      </div>
      <div class="container">
        <div class="hero-content">
          <p class="eyebrow">Non-Medical Recovery Support</p>
          <h1>Non-Medical Recovery Support at Home<span class="text-gold">.</span></h1>
          <p>Helping individuals and families safely transition from hospital to home with short term recovery care, postpartum household support, and non-medical home assistance throughout the Denver-Aurora metropolitan area.</p>
          <div class="hero-actions">
            <ScheduleButton class="btn btn-gold">Schedule A Consultation</ScheduleButton>
            <NuxtLink class="btn btn-outline" to="/referral-partners">Refer A Patient</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <div class="section-intro">
            <h6>About Us</h6>
            <h2>You're Never Meant to Navigate It Alone</h2>
            <p>BridgeCare was born from a simple but painful realization &ndash; too many people are sent home from surgery or a hospital stay with no real support waiting for them. For those who live alone, are new to a city, or just don&rsquo;t have family nearby, recovery can be isolating and overwhelming. We exist to change that. BridgeCare provides short-term, non-medical in-home care during recovery and transition periods, so you never have to navigate it alone.</p>
          </div>
          <ul class="check-list" style="color: var(--text);">
            <li>Focus on short-term recovery and transition support</li>
            <li>Flexible scheduling</li>
            <li>Private-pay model allowing quick service access</li>
            <li>Serving the Denver-Aurora metropolitan area</li>
          </ul>
          <div class="stat-row">
            <div><strong>Trained Caregivers</strong><span>Screened and trained on safety protocols and care boundaries.</span></div>
            <div><strong>Non-Medical Focus</strong><span>Care that supplements — never replaces — medical or nursing care.</span></div>
          </div>
        </div>
        <div class="split-media">
          <div class="collage">
            <img class="collage-primary" src="/images/why-bridgecare-1.jpg" alt="Caregiver with client" />
            <img class="collage-secondary" src="/images/why-bridgecare-2.jpg" alt="Caregiver assisting client" />
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-intro centered">
          <h6>Our Services</h6>
          <h2>Non-Medical Home Care Designed for Recovery</h2>
          <p>BridgeCare provides non-medical home care services designed to support individuals during recovery and transition periods. Our services supplement — but do not replace — medical or nursing care.</p>
        </div>
        <div class="grid grid-3">
          <article v-for="service in services" :key="service.slug" class="service-card">
            <NuxtLink :to="`/services/${service.slug}`">
              <img :src="service.image" :alt="service.title" />
            </NuxtLink>
            <div class="service-card-body">
              <h3><NuxtLink :to="`/services/${service.slug}`">{{ service.title }}</NuxtLink></h3>
              <p>{{ service.excerpt }}</p>
              <NuxtLink class="read-more" :to="`/services/${service.slug}`">Learn More &rarr;</NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-intro centered">
          <h6>Who We Serve</h6>
          <h2>Short-Term and Transitional Support at Home</h2>
          <p>BridgeCare serves individuals and families who need short-term or transitional support at home.</p>
        </div>
        <div class="grid grid-4">
          <article v-for="item in whoWeServe" :key="item.title" class="icon-card">
            <div class="icon-badge">{{ item.icon }}</div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-intro centered">
          <h6>Trust Indicators</h6>
          <h2>Professional, Compliant, Relationship-Based Care</h2>
        </div>
        <div class="grid grid-3">
          <article v-for="indicator in trustIndicators" :key="indicator.title" class="icon-card">
            <div class="icon-badge">{{ indicator.icon }}</div>
            <h4>{{ indicator.title }}</h4>
            <ul class="check-list" style="color: var(--text); margin-top: 0.6rem;">
              <li v-for="point in indicator.items" :key="point">{{ point }}</li>
            </ul>
          </article>
        </div>
        <p style="text-align: center; color: var(--muted); margin-top: 2rem;">Our goal is to support safe recovery after discharge and reduce stress for families.</p>
      </div>
    </section>

    <section class="section-sm">
      <div class="container">
        <div class="cta-banner">
          <div class="cta-banner-bg"><img src="/images/refer-a-patient-bg.jpg" alt="" /></div>
          <div class="cta-banner-content">
            <h2>Need Recovery Support at Home?</h2>
            <p>BridgeCare provides reliable non-medical assistance when individuals need extra help after surgery, during postpartum recovery, or while transitioning home.</p>
          </div>
          <div style="position: relative; z-index: 1; display: flex; gap: 0.8rem; flex-wrap: wrap;">
            <ScheduleButton class="btn btn-gold cta-banner-action">Schedule A Consultation</ScheduleButton>
            <NuxtLink class="btn btn-outline cta-banner-action" to="/referral-partners">Refer A Patient</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="split-media">
          <div class="collage">
            <img class="collage-primary" src="/images/about-photo-2.jpg" alt="Client at home during recovery" />
          </div>
        </div>
        <div>
          <div class="section-intro">
            <h6>Frequently Asked Questions</h6>
            <h2>Caring Answers That Bring Peace of Mind</h2>
          </div>
          <div class="faq-list">
            <div v-for="item in faqs" :key="item.q" class="faq-item" :class="{ open: item.open }">
              <button class="faq-question" type="button" @click="toggleFaq(item)">
                {{ item.q }}
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                <p>{{ item.a }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--
    <section class="section">
      <div class="container">
        <div class="section-intro centered">
          <h6>From the Blog</h6>
          <h2>News &amp; Articles</h2>
        </div>
        <div class="grid grid-3">
          <article v-for="post in posts" :key="post.slug" class="article-card">
            <NuxtLink :to="`/blog/${post.slug}`">
              <img :src="post.image" :alt="post.title" />
            </NuxtLink>
            <div class="article-card-body">
              <div class="article-meta"><span>By admin</span><span>{{ post.date }}</span></div>
              <h3><NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink></h3>
              <p>{{ post.excerpt }}</p>
              <NuxtLink class="read-more" :to="`/blog/${post.slug}`">Read More &rarr;</NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>
    -->
  </div>
</template>
