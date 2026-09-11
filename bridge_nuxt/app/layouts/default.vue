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
          <a href="tel:+17204600611">
            <svg class="topbar-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"/></svg>
            <span class="prefix">Phone:</span>+1 720-460-0611
          </a>
          <a href="mailto:Info@BridgeCareHomeSolutions.com" aria-label="Email BridgeCare Home Solutions">
            <svg class="topbar-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2.4-.2 7.1 6.1a1 1 0 0 0 1.3 0l7.1-6.1a.5.5 0 0 0-.3-.8H4.7a.5.5 0 0 0-.3.8z"/></svg>
            <span class="prefix">Email:</span><span class="topbar-email">Info@BridgeCareHomeSolutions.com</span>
          </a>
          <span class="topbar-hours">
            <svg class="topbar-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.4 4.2 2.5-.8 1.3-5-3V6h1.6v6.4z"/></svg>
            <span class="prefix">Opening Hours:</span>08:00am to 06:00pm
          </span>
        </div>
        <div class="topbar-social" aria-label="Social links">
          <a href="https://www.facebook.com/profile.php?id=61591857429989" target="_blank" rel="noopener" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z"/></svg>
          </a>
          <a href="https://www.instagram.com/bridgecarehomesolutions?igsi=MWpyZjhjcGduNzliZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47-.66.26-1.22.6-1.77 1.16-.56.55-.9 1.11-1.16 1.77-.25.64-.42 1.37-.47 2.43C2 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43.26.66.6 1.22 1.16 1.77.55.56 1.11.9 1.77 1.16.64.25 1.37.42 2.43.47C8.94 22 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47.66-.26 1.22-.6 1.77-1.16.56-.55.9-1.11 1.16-1.77.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.16-1.77 4.9 4.9 0 0 0-1.77-1.16c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.72 2 12 2zm0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.5.21 1.86.35.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.36.31.88.35 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.21 1.5-.35 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.14-.88.31-1.86.35-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.21-1.86-.35-.47-.18-.8-.4-1.15-.75-.35-.35-.57-.68-.75-1.15-.14-.36-.31-.88-.35-1.86C3.81 14.99 3.8 14.67 3.8 12s.01-2.99.06-4.04c.04-.98.21-1.5.35-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.14.88-.31 1.86-.35C9.01 3.81 9.33 3.8 12 3.8zm0 3.06a5.14 5.14 0 1 0 0 10.28 5.14 5.14 0 0 0 0-10.28zm0 8.48a3.34 3.34 0 1 1 0-6.68 3.34 3.34 0 0 1 0 6.68zm6.54-8.68a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>
          </a>
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
            <p>Personalized, non-medical concierge support for adults who need an extra hand during recovery or with everyday tasks.</p>
            <div class="footer-social" aria-label="Social links">
              <a href="https://www.facebook.com/profile.php?id=61591857429989" target="_blank" rel="noopener" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z"/></svg>
              </a>
              <a href="https://www.instagram.com/bridgecarehomesolutions?igsi=MWpyZjhjcGduNzliZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47-.66.26-1.22.6-1.77 1.16-.56.55-.9 1.11-1.16 1.77-.25.64-.42 1.37-.47 2.43C2 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43.26.66.6 1.22 1.16 1.77.55.56 1.11.9 1.77 1.16.64.25 1.37.42 2.43.47C8.94 22 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47.66-.26 1.22-.6 1.77-1.16.56-.55.9-1.11 1.16-1.77.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.16-1.77 4.9 4.9 0 0 0-1.77-1.16c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.72 2 12 2zm0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.5.21 1.86.35.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.36.31.88.35 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.21 1.5-.35 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.14-.88.31-1.86.35-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.21-1.86-.35-.47-.18-.8-.4-1.15-.75-.35-.35-.57-.68-.75-1.15-.14-.36-.31-.88-.35-1.86C3.81 14.99 3.8 14.67 3.8 12s.01-2.99.06-4.04c.04-.98.21-1.5.35-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.14.88-.31 1.86-.35C9.01 3.81 9.33 3.8 12 3.8zm0 3.06a5.14 5.14 0 1 0 0 10.28 5.14 5.14 0 0 0 0-10.28zm0 8.48a3.34 3.34 0 1 1 0-6.68 3.34 3.34 0 0 1 0 6.68zm6.54-8.68a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>
              </a>
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
            <h5>Our Services</h5>
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
