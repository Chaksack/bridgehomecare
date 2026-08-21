<script setup lang="ts">
import { services } from '~/data/services'
// import { posts } from '~/data/posts'

const navOpen = ref(false)
const scrolled = ref(false)
const currentYear = new Date().getFullYear()

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  // { to: '/blog', label: 'Blog' },
  { to: '/referral-partners', label: 'Referral Partners' },
  { to: '/contact', label: 'Contact Us' }
]

// const recentPosts = posts.slice(0, 2)

function toggleNav() {
  navOpen.value = !navOpen.value
}

function closeNav() {
  navOpen.value = false
}

function handleScroll() {
  scrolled.value = window.scrollY > 60
}

watch(navOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})

const route = useRoute()
watch(() => route.fullPath, () => {
  navOpen.value = false
})
</script>

<template>
  <div>
    <div class="topbar">
      <div class="container topbar-inner">
        <div class="topbar-links">
          <a href="tel:+17204600611"><span class="prefix">Phone:</span>+1 720-460-0611</a>
          <a href="mailto:Info@BridgeCareHomeSolutions.com"><span class="prefix">Email:</span>Info@BridgeCareHomeSolutions.com</a>
          <span><span class="prefix">Opening Hours:</span>08:00am to 06:00pm</span>
        </div>
        <div class="topbar-social" aria-label="Social links">
          <a href="https://www.facebook.com/profile.php?id=61591857429989" target="_blank" rel="noopener" aria-label="Facebook">f</a>
          <a href="https://www.instagram.com/bridgecarehomesolutions?igsi=MWpyZjhjcGduNzliZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
        </div>
      </div>
    </div>

    <header class="site-header" :class="{ 'is-scrolled': scrolled }">
      <div class="container navbar">
        <NuxtLink class="brand" to="/">
          <img src="/images/logo.png" alt="BridgeCare Home Solutions" />
        </NuxtLink>
        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="navOpen"
          aria-label="Toggle navigation"
          @click="toggleNav"
        >☰</button>
        <nav class="nav-links" :class="{ open: navOpen }" aria-label="Main navigation">
          <button class="nav-close" type="button" aria-label="Close navigation" @click="closeNav">&times;</button>
          <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to">{{ link.label }}</NuxtLink>
        </nav>
        <ScheduleButton class="btn navbar-cta" :class="scrolled ? 'btn-gold' : 'btn-primary'">Schedule A Consultation</ScheduleButton>
      </div>
    </header>

    <div class="nav-backdrop" :class="{ open: navOpen }" @click="closeNav" />

    <main>
      <slot />
    </main>

    <footer class="footer">
      <div class="container footer-top">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="/images/logo.png" alt="BridgeCare Home Solutions" />
            <p>We provide structured, non-medical in-home support that promotes safety, comfort, and recovery during life's transition periods.</p>
            <div class="footer-social" aria-label="Social links">
              <a href="https://www.facebook.com/profile.php?id=61591857429989" target="_blank" rel="noopener" aria-label="Facebook">f</a>
              <a href="https://www.instagram.com/bridgecarehomesolutions?igsi=MWpyZjhjcGduNzliZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
            </div>
          </div>
          <div>
            <h5>Explore</h5>
            <div class="footer-links">
              <NuxtLink to="/">Home</NuxtLink>
              <NuxtLink to="/about">About Us</NuxtLink>
              <NuxtLink to="/services">Services</NuxtLink>
              <NuxtLink to="/how-it-works">How It Works</NuxtLink>
              <!-- <NuxtLink to="/blog">Blog</NuxtLink> -->
              <NuxtLink to="/referral-partners">Referral Partners</NuxtLink>
              <NuxtLink to="/contact">Contact Us</NuxtLink>
            </div>
          </div>
          <div>
            <h5>Types Of Care</h5>
            <div class="footer-links">
              <NuxtLink v-for="service in services" :key="service.slug" :to="`/services/${service.slug}`">{{ service.title }}</NuxtLink>
            </div>
          </div>
          <!--
          <div>
            <h5>Latest News</h5>
            <NuxtLink v-for="post in recentPosts" :key="post.slug" :to="`/blog/${post.slug}`" class="footer-post">
              <img :src="post.image" :alt="post.title" />
              <span>{{ post.title }}</span>
            </NuxtLink>
          </div>
          -->
        </div>
      </div>
      <div class="container footer-bottom">
        <span>&copy; {{ currentYear }} BridgeCare Home Solutions. All Rights Reserved.</span>
        <span>Serving the Denver&ndash;Aurora Metropolitan Area</span>
      </div>
    </footer>
  </div>
</template>
