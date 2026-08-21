<script setup lang="ts">
useHead({ title: 'Referral Partners' })

const partnerTypes = [
  'Outpatient surgery centers',
  'Hospitals and discharge planners',
  'Specialty clinics',
  'OB/GYN and maternity practices'
]

const eligibility = [
  'Individuals recovering from outpatient surgery',
  'New mothers during postpartum recovery, including C-section recovery',
  'Adults and seniors needing non-medical home support',
  'Traveling patients recovering locally in the Denver-Aurora area'
]

const form = reactive({
  patientName: '',
  referrerName: '',
  organization: '',
  phone: '',
  email: '',
  notes: ''
})
const note = ref('')

function handleSubmit() {
  note.value = 'Thank you for the referral. Our team will follow up within one business day.'
  form.patientName = ''
  form.referrerName = ''
  form.organization = ''
  form.phone = ''
  form.email = ''
  form.notes = ''
}
</script>

<template>
  <div>
    <PageBanner title="Referral Partners" />

    <section class="section">
      <div class="container split" style="align-items: start;">
        <div>
          <div class="section-intro">
            <h6>Who We Partner With</h6>
            <h2>Relationship-Based Care</h2>
            <p>BridgeCare Home Solutions partners with healthcare providers and community organizations to ensure a safe, supported transition from hospital or clinic to home.</p>
          </div>
          <ul class="check-list" style="color: var(--text); margin-bottom: 2rem;">
            <li v-for="partner in partnerTypes" :key="partner">{{ partner }}</li>
          </ul>

          <div class="section-intro">
            <h6>Patient Eligibility Guidelines</h6>
            <h2>Who We Can Support</h2>
          </div>
          <ul class="check-list" style="color: var(--text);">
            <li v-for="item in eligibility" :key="item">{{ item }}</li>
          </ul>

          <p style="margin-top: 1.6rem; color: var(--muted);">Our non-medical services supplement — but do not replace — medical or nursing care, and are designed to align with Colorado guidelines. Our goal is to support safe recovery after discharge and reduce stress for families.</p>
        </div>

        <aside class="sidebar">
          <div class="sidebar-card">
            <h5>Direct Referral Contact</h5>
            <div class="contact-detail">
              <div class="icon-badge">📞</div>
              <div><strong>Phone</strong><span><a href="tel:+17204600611">+1 720-460-0611</a></span></div>
            </div>
            <div class="contact-detail">
              <div class="icon-badge">✉️</div>
              <div><strong>Email</strong><span><a href="mailto:Info@BridgeCareHomeSolutions.com">Info@BridgeCareHomeSolutions.com</a></span></div>
            </div>
            <div class="contact-detail" style="margin-bottom: 0;">
              <div class="icon-badge">🕒</div>
              <div><strong>Hours</strong><span>Monday&ndash;Friday, 8:00am&ndash;6:00pm</span></div>
            </div>
          </div>
          <div class="sidebar-card sidebar-cta">
            <h4 style="margin-bottom: 0.4rem;">Response Expectations</h4>
            <p style="color: var(--muted); margin: 0;">We aim to respond to all referrals within one business day.</p>
          </div>
        </aside>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container" style="max-width: 720px;">
        <div class="section-intro centered">
          <h6>Referral Intake</h6>
          <h2>Refer a Patient</h2>
          <p>Complete the form below and our team will follow up to coordinate care.</p>
        </div>
        <div class="contact-card">
          <form @submit.prevent="handleSubmit">
            <label>Patient Name
              <input v-model="form.patientName" type="text" placeholder="Patient's full name" required />
            </label>
            <label>Referring Name
              <input v-model="form.referrerName" type="text" placeholder="Your name" required />
            </label>
            <label>Organization
              <input v-model="form.organization" type="text" placeholder="Hospital, clinic, or practice" />
            </label>
            <label>Phone
              <input v-model="form.phone" type="tel" placeholder="Your phone number" />
            </label>
            <label>Email
              <input v-model="form.email" type="email" placeholder="you@example.com" required />
            </label>
            <label>Notes
              <textarea v-model="form.notes" rows="5" placeholder="Tell us about the patient's recovery or household support needs"></textarea>
            </label>
            <button class="btn btn-primary" type="submit">Submit Referral</button>
            <div class="form-note" aria-live="polite">{{ note }}</div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
