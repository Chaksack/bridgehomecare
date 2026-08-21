<script setup lang="ts">
import { services } from '~/data/services'

useHead({ title: 'Services' })
</script>

<template>
  <div>
    <PageBanner title="Services Grid" />

    <section class="section">
      <div class="container">
        <div class="section-intro centered">
          <h6>Our Service List</h6>
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

    <section class="section-sm">
      <div class="container">
        <div class="cta-banner">
          <div class="cta-banner-bg"><img src="/images/refer-a-patient-bg.jpg" alt="" /></div>
          <div class="cta-banner-content">
            <h2>Not sure which service fits your family?</h2>
            <p>Reach out for a free consultation — we'll help you build a support plan tailored to your needs.</p>
          </div>
          <div style="position: relative; z-index: 1; display: flex; gap: 0.8rem; flex-wrap: wrap;">
            <ScheduleButton class="btn btn-gold cta-banner-action">Schedule A Consultation</ScheduleButton>
            <NuxtLink class="btn btn-outline cta-banner-action" to="/referral-partners">Refer A Patient</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
