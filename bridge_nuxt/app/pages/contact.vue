<script setup lang="ts">
useHead({ title: 'Contact Us' })

const { calendlyUrl } = useCalendly()

const form = reactive({
  name: '',
  email: '',
  message: ''
})
const note = ref('')

function handleSubmit() {
  note.value = 'Thanks for reaching out. We will reply within one business day.'
  form.name = ''
  form.email = ''
  form.message = ''
}

const steps = [
  { title: 'Initial Consultation', text: 'We learn about your recovery or household support needs.' },
  { title: 'Personalized Support Plan', text: 'Services are scheduled in structured service blocks.' },
  { title: 'In-Home Support', text: 'Our caregivers assist with recovery-focused non-medical tasks.' }
]
</script>

<template>
  <div>
    <PageBanner title="Contact Us" />

    <section class="section">
      <div class="container">
        <div class="section-intro centered">
          <h6>Serving the Denver&ndash;Aurora Metropolitan Area</h6>
          <h2>Need Recovery Support at Home?</h2>
          <p>BridgeCare provides reliable non-medical assistance when individuals need extra help after surgery, during postpartum recovery, or while transitioning home.</p>
        </div>
      </div>
    </section>

    <section class="section-sm">
      <div class="container split" style="align-items: start;">
        <div class="contact-card">
          <h2>Contact Options</h2>
          <div class="contact-detail">
            <div class="icon-badge">📞</div>
            <div><strong>Phone</strong><span><a href="tel:+17204600611">+1 720-460-0611</a></span></div>
          </div>
          <div class="contact-detail">
            <div class="icon-badge">✉️</div>
            <div><strong>Email</strong><span><a href="mailto:Info@BridgeCareHomeSolutions.com">Info@BridgeCareHomeSolutions.com</a></span></div>
          </div>
          <div class="contact-detail">
            <div class="icon-badge">📋</div>
            <div><strong>Online Referral Form</strong><span><NuxtLink to="/referral-partners" style="color: var(--gold-dark); font-weight: 600;">Refer a patient &rarr;</NuxtLink></span></div>
          </div>
        </div>

        <div class="contact-card">
          <h2>Send a Message</h2>
          <form @submit.prevent="handleSubmit">
            <label>Your Name
              <input v-model="form.name" type="text" placeholder="Your name" required />
            </label>
            <label>Your Email
              <input v-model="form.email" type="email" placeholder="you@example.com" required />
            </label>
            <label>Your Message
              <textarea v-model="form.message" rows="5" placeholder="Tell us about your needs"></textarea>
            </label>
            <button class="btn btn-primary" type="submit">Send Message</button>
            <div class="form-note" aria-live="polite">{{ note }}</div>
          </form>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-intro centered">
          <h6>How It Works</h6>
          <h2>Getting Started Is Simple</h2>
        </div>
        <div class="grid grid-3">
          <article v-for="(step, i) in steps" :key="step.title" class="icon-card">
            <div class="icon-badge">{{ i + 1 }}</div>
            <h4>{{ step.title }}</h4>
            <p>{{ step.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-sm">
      <div class="container">
        <div class="section-intro centered">
          <h6>Book Online</h6>
          <h2>Prefer to Pick a Time Yourself?</h2>
          <p>Choose a time that works for you and we'll confirm your free consultation right away.</p>
        </div>
        <ClientOnly>
          <div class="calendly-inline-widget" :data-url="calendlyUrl" style="min-width: 320px; height: 700px;" />
        </ClientOnly>
      </div>
    </section>
  </div>
</template>
