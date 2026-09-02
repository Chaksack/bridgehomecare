<script setup lang="ts">
import { services, getServiceBySlug } from '~/data/services'

definePageMeta({
  validate: (route) => !!getServiceBySlug(route.params.slug as string)
})

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const service = computed(() => getServiceBySlug(slug.value)!)

useHead(() => ({ title: service.value.title }))

const otherServices = computed(() => services.filter((s) => s.slug !== slug.value))
</script>

<template>
  <div>
    <PageBanner :title="service.title" />

    <section class="section">
      <div class="container detail-layout">
        <article class="prose">
          <div class="detail-media">
            <img :src="service.image" :alt="service.title" />
          </div>
          <h2>{{ service.title }}</h2>
          <p>{{ service.intro }}</p>

          <h3>What's Included</h3>
          <ul class="includes-list">
            <li v-for="item in service.includes" :key="item">{{ item }}</li>
          </ul>

          <p>{{ service.closing }}</p>

          <div class="article-nav">
            <NuxtLink to="/services">&larr; All Services</NuxtLink>
            <ScheduleButton class="next">Schedule A Consultation &rarr;</ScheduleButton>
          </div>
        </article>

        <aside class="sidebar">
          <div class="sidebar-card sidebar-cta">
            <h4 style="margin-bottom: 0.4rem;">Have Questions?</h4>
            <p style="color: var(--muted); margin: 0;">Call us today to discuss support options or schedule a free consultation.</p>
            <NuxtLink class="btn btn-primary" to="/contact">Contact Us</NuxtLink>
          </div>

          <div class="sidebar-card">
            <h5>Other Services</h5>
            <div class="sidebar-list">
              <NuxtLink
                v-for="other in otherServices"
                :key="other.slug"
                :to="`/services/${other.slug}`"
                class="sidebar-list-item"
              >
                <img :src="other.image" :alt="other.title" />
                <span>{{ other.title }}</span>
              </NuxtLink>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>
