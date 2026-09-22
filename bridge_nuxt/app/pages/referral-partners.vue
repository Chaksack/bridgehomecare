<script setup lang="ts">
useHead({ title: 'Referral Partners' })

const partnerTypes = [
  'Outpatient surgery centers',
  'Hospitals and discharge professionals',
  'Specialty clinics and medical practices',
  'OB/GYN and maternity practices',
  'Other healthcare and community organizations'
]

const eligibility = [
  'Patients preparing for or recovering from outpatient surgery or a procedure',
  'Individuals returning home after a hospital stay',
  'New mothers needing practical postpartum household support',
  'Patients traveling to the Denver-Aurora area for a procedure or recovery',
  'Adults who need temporary, non-medical support at home',
  'Individuals who may not have family or another support system nearby'
]

const howWeHelp = [
  'Getting settled at home after a procedure or discharge',
  'Light household tasks and laundry',
  'Simple meal preparation',
  'Errands and household essentials',
  'Postpartum household support',
  'Transportation coordination through third-party providers',
  'Practical recovery support',
  'Non-medical companionship',
  'Personalized short-term or ongoing support'
]

const referralSteps = [
  { title: 'Submit a Referral', text: 'Complete our referral form or contact BridgeCare directly.' },
  { title: 'We Follow Up', text: 'Our team will review the referral and contact the prospective client to learn more about their needs.' },
  { title: 'We Determine Fit', text: 'We’ll make sure the requested services fall within BridgeCare’s scope and discuss scheduling and service options.' },
  { title: 'Support Begins', text: 'When BridgeCare is an appropriate fit and the client chooses to move forward, we’ll create a personalized support plan and coordinate the start of services.' }
]

const form = reactive({
  clientName: '',
  referrerName: '',
  organization: '',
  phone: '',
  email: '',
  notes: '',
  authorized: false
})
const note = ref('')

function handleSubmit() {
  note.value = 'Thank you for the referral. Our team will follow up within one business day.'
  form.clientName = ''
  form.referrerName = ''
  form.organization = ''
  form.phone = ''
  form.email = ''
  form.notes = ''
  form.authorized = false
}
</script>

<template>
  <div>
    <PageBanner title="Referral Partners" />

    <section class="section">
      <div class="container">
        <div class="section-intro centered">
          <h2>A Trusted Non-Medical Support Option for Your Patients</h2>
          <p>BridgeCare Home Solutions partners with healthcare providers and community organizations throughout the Denver-Aurora area to help adults access practical, non-medical support when they return home. Whether a patient is preparing for outpatient surgery, recovering after discharge, entering the postpartum period, or simply needs additional support at home, BridgeCare provides flexible services based on the individual's needs.</p>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container split" style="align-items: start;">
        <div>
          <div class="section-intro">
            <h6>Who We Partner With</h6>
            <h2>Referrals We Welcome</h2>
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
            <p style="color: var(--muted); margin: 0;">We aim to respond to referrals within one business day.</p>
          </div>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-intro centered">
          <h6>How BridgeCare Can Help</h6>
          <h2>Depending on Needs and Selected Services</h2>
        </div>
        <ul class="check-list grid grid-3" style="color: var(--text);">
          <li v-for="item in howWeHelp" :key="item">{{ item }}</li>
        </ul>
        <p style="text-align: center; color: var(--muted); margin-top: 2rem; max-width: 720px; margin-left: auto; margin-right: auto;">BridgeCare provides non-medical support and does not replace medical, nursing, or hands-on personal care services. During the consultation process, we review the individual's needs to determine whether BridgeCare's services are an appropriate fit.</p>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-intro centered">
          <h6>A Simple Referral Process</h6>
          <h2>How Referrals Work</h2>
        </div>
        <div class="grid grid-4">
          <article v-for="(step, i) in referralSteps" :key="step.title" class="icon-card">
            <div class="icon-badge">{{ i + 1 }}</div>
            <h4>{{ step.title }}</h4>
            <p>{{ step.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container" style="max-width: 720px;">
        <div class="section-intro centered">
          <h6>Referral Intake</h6>
          <h2>Refer a Patient</h2>
          <p>Know someone who could benefit from an extra layer of non-medical support at home? Complete the referral form below and our team will follow up to determine how BridgeCare may be able to help.</p>
        </div>
        <div class="contact-card">
          <form @submit.prevent="handleSubmit">
            <label>Client Name
              <input v-model="form.clientName" type="text" placeholder="Client's full name" required />
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
              <textarea v-model="form.notes" rows="5" placeholder="Tell us about the client's recovery or household support needs"></textarea>
            </label>
            <div class="consent">
              <h4>Referral Authorization</h4>
              <label>
                <input v-model="form.authorized" type="checkbox" required />
                <span>I confirm that I am authorized to provide the information submitted and that the person being referred has agreed to be contacted by BridgeCare Home Solutions regarding this referral.</span>
              </label>
              <p>By submitting this referral, you agree that BridgeCare may contact you regarding the referral. Information submitted through this form will be handled as described in our <NuxtLink to="/privacy-terms">Privacy Policy &amp; Terms of Use</NuxtLink>.</p>
            </div>
            <button class="btn btn-primary" type="submit">Submit Referral</button>
            <div class="form-note" aria-live="polite">{{ note }}</div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
