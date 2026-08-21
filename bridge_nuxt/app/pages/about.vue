<script setup lang="ts">
import { services } from '~/data/services'

useHead({ title: 'About Us' })

const features = [
  { title: 'Recovery-Focused Care', text: 'Structured, non-medical support for individuals discharged after surgery or hospitalization.', icon: '🏡' },
  { title: 'Postpartum Support', text: 'Household help for new mothers recovering from childbirth, including C-section recovery.', icon: '🤱' },
  { title: 'Caring, Trained Staff', text: 'Caregivers trained on safety protocols and clear care boundaries — never clinical or nursing tasks.', icon: '🤝' }
]
</script>

<template>
  <div>
    <PageBanner title="About Us" />

    <section class="section">
      <div class="container split">
        <div class="split-media">
          <div class="collage">
            <img class="collage-primary" src="/images/about-photo-1.jpg" alt="Caregiver supporting a client" />
            <img class="collage-secondary" src="/images/about-photo-2.jpg" alt="Senior client at home" />
          </div>
        </div>
        <div>
          <div class="section-intro">
            <h6>About Us</h6>
            <h2>Born From a Firsthand Experience</h2>
            <p>Bridge Care Home Solutions was born from a firsthand experience that too many people quietly go through alone.</p>
          </div>
          <p style="color: var(--text);">After undergoing surgery, our founder faced what so many patients do &ndash; the moment of discharge when the hospital asks, &ldquo;Who&rsquo;s picking you up?&rdquo; For people without a readily available support system, that question carries real weight. A friend had to take time off work just to help with transport home. A pet had to be boarded because there was no one to help with daily care. And the days that followed &ndash; recovering alone, managing the basics of daily life while healing &ndash; made one thing clear: this gap in care is real, and it affects more people than anyone talks about.</p>
          <p style="color: var(--text);">Many patients today are discharged faster than ever &ndash; from outpatient procedures, same-day surgeries, and short hospital stays &ndash; and sent home to figure it out. For those who live alone, are new to a city, or simply don&rsquo;t have family nearby, &ldquo;just going home&rdquo; isn&rsquo;t simple at all.</p>
          <p style="color: var(--text);">BridgeCare Home Solutions exists to bridge that gap. We provide short-term, non-medical in-home support during recovery and transition periods so that getting the care you need doesn&rsquo;t depend on who you happen to have around. Whether you&rsquo;re recovering from a procedure, navigating a new baby, or simply need a steady hand during a vulnerable season, we show up so you don&rsquo;t have to do it alone.</p>
          <ul class="check-list" style="color: var(--text);">
            <li>Focus on short-term recovery and transition support</li>
            <li>Flexible scheduling</li>
            <li>Private-pay model allowing quick service access</li>
            <li>Local care serving the Denver-Aurora community</li>
            <li>Non-medical services that supplement — not replace — medical care</li>
          </ul>
          <div class="contact-card" style="margin-top: 1.6rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
            <div>
              <h4 style="margin-bottom: 0.2rem;">Have Questions? Let's Talk.</h4>
              <p style="margin: 0; color: var(--muted);">Call us today to discuss care options or schedule a free consultation.</p>
            </div>
            <NuxtLink class="btn btn-primary" to="/contact">Contact Us</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="grid grid-3">
          <article v-for="feature in features" :key="feature.title" class="icon-card">
            <div class="icon-badge">{{ feature.icon }}</div>
            <h4>{{ feature.title }}</h4>
            <p>{{ feature.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-intro centered">
          <h6>Our Service List</h6>
          <h2>Types Of Care</h2>
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
  </div>
</template>
