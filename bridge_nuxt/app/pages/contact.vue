<script setup lang="ts">
useHead({ title: 'Contact Us' })

const { initInline } = useCalendly()
const calendlyEmbed = ref<HTMLElement | null>(null)

onMounted(() => {
  if (calendlyEmbed.value) initInline(calendlyEmbed.value)
})

const supportTypes = [
  'Pre & Post-Surgery Recovery Support',
  'Postpartum & New Mother Support',
  'Everyday Concierge Support',
  "I'm Not Sure Yet"
]

const form = reactive({
  name: '',
  phone: '',
  email: '',
  supportType: '',
  timing: '',
  notes: '',
  consent: false
})
const note = ref('')

function handleSubmit() {
  note.value = 'Thanks for reaching out. We will reply within one business day.'
  form.name = ''
  form.phone = ''
  form.email = ''
  form.supportType = ''
  form.timing = ''
  form.notes = ''
  form.consent = false
}

const steps = [
  { title: "We'll Connect", text: "We'll contact you to learn more about what you need and answer any questions." },
  { title: "We'll Create Your Support Plan", text: "If BridgeCare is the right fit, we'll create a personalized support plan based on your needs and schedule." },
  { title: 'Support Begins', text: 'Your BridgeCare support professional arrives ready to provide the services outlined in your support plan.' }
]
</script>

<template>
  <div>
    <PageBanner title="Contact Us" />

    <section class="section">
      <div class="container">
        <div class="section-intro centered">
          <h6>Serving the Denver&ndash;Aurora Metropolitan Area</h6>
          <h2>Need an Extra Hand?</h2>
          <p>Whether you're planning ahead, recovering at home, welcoming a new baby, or simply need help with everyday tasks, we're here to make getting support simple. Tell us a little about what you need and we'll help determine whether BridgeCare is the right fit.</p>
        </div>
      </div>
    </section>

    <section class="section-sm">
      <div class="container split" style="align-items: start;">
        <div class="contact-card">
          <h2>Contact BridgeCare</h2>
          <div class="contact-detail">
            <div class="icon-badge">📞</div>
            <div><strong>Phone</strong><span><a href="tel:+17204600611">720-460-0611</a></span></div>
          </div>
          <div class="contact-detail">
            <div class="icon-badge">✉️</div>
            <div><strong>Email</strong><span><a href="mailto:Info@BridgeCareHomeSolutions.com">Info@BridgeCareHomeSolutions.com</a></span></div>
          </div>
          <div class="contact-detail">
            <div class="icon-badge">🕒</div>
            <div><strong>Hours</strong><span>Monday&ndash;Friday, 8:00 AM&ndash;6:00 PM</span></div>
          </div>
          <div class="contact-detail" style="margin-bottom: 0;">
            <div class="icon-badge">📋</div>
            <div><strong>Referral Partners</strong><span><NuxtLink to="/referral-partners" style="color: var(--gold-dark); font-weight: 600;">Make a referral &rarr;</NuxtLink></span></div>
          </div>
        </div>

        <div class="contact-card">
          <h2>Request Support</h2>
          <p style="color: var(--muted); margin-top: -0.6rem;">Tell us a little about yourself and what you're looking for. We'll follow up to discuss your needs and next steps.</p>
          <form @submit.prevent="handleSubmit">
            <label>Your Name
              <input v-model="form.name" type="text" placeholder="Your name" required />
            </label>
            <label>Phone Number
              <input v-model="form.phone" type="tel" placeholder="Your phone number" />
            </label>
            <label>Email Address
              <input v-model="form.email" type="email" placeholder="you@example.com" required />
            </label>
            <label>What type of support are you looking for?
              <select v-model="form.supportType">
                <option value="" disabled>Select an option</option>
                <option v-for="type in supportTypes" :key="type" :value="type">{{ type }}</option>
              </select>
            </label>
            <label>When do you need support?
              <input v-model="form.timing" type="text" placeholder="e.g. Right away, next month, just planning ahead" />
            </label>
            <label>Anything you'd like us to know?
              <textarea v-model="form.notes" rows="4" placeholder="Optional"></textarea>
            </label>
            <div class="consent">
              <h4>Consent</h4>
              <label>
                <input v-model="form.consent" type="checkbox" required />
                <span>I agree that BridgeCare Home Solutions may contact me by phone, text, or email regarding my request.</span>
              </label>
              <p>By submitting this form, you acknowledge that the information you provide will be handled as described in our <NuxtLink to="/privacy-terms">Privacy Policy &amp; Terms of Use</NuxtLink>.</p>
            </div>
            <button class="btn btn-primary" type="submit">Request Support</button>
            <div class="form-note" aria-live="polite">{{ note }}</div>
          </form>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-intro centered">
          <h6>How It Works</h6>
          <h2>What Happens Next?</h2>
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
          <h2>Prefer to Schedule a Consultation?</h2>
          <p>Choose a convenient time to speak with BridgeCare about what you're looking for.</p>
        </div>
        <div ref="calendlyEmbed" class="calendly-embed" style="min-width: 320px; height: 700px;" />
      </div>
    </section>
  </div>
</template>
