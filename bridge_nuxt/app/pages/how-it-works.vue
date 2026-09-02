<script setup lang="ts">
useHead({ title: 'How It Works' })

const steps = [
  { title: 'Reach Out', text: 'Contact BridgeCare directly to tell us what kind of support you’re looking for. A healthcare professional may also refer you to us. We welcome both direct requests and professional referrals and will get back to you promptly to start the conversation.' },
  { title: 'Free Consultation', text: 'We’ll talk with you — or a family member helping you — to understand what you need, when you need it, and how BridgeCare may be able to help. No pressure. No commitment. Just a conversation to make sure our services are the right fit for your needs.' },
  { title: 'Your Personalized Support Plan', text: 'Based on your consultation, we’ll create a personalized support plan built around what you need, your schedule, and how long you’d like support. BridgeCare is private-pay and flexible, so your plan is based on your needs — not a one-size-fits-all package.' },
  { title: 'We Show Up', text: 'Your BridgeCare support professional arrives ready to help with the services outlined in your support plan. Whether you need an extra hand during recovery, help around the home, or support with everyday tasks, we’re there to make things easier.' },
  { title: 'Support That Adjusts With You', text: 'Need us for a short time or a little longer? Your support can adjust as your needs change. When you no longer need the extra hand, we step back. It’s that simple.' }
]
</script>

<template>
  <div>
    <PageBanner title="How It Works" />

    <section class="section">
      <div class="container">
        <div class="section-intro centered">
          <h6>Getting Started</h6>
          <h2>Getting Support Shouldn&rsquo;t Be Complicated</h2>
          <p>Whether you're preparing for a procedure, recovering at home, welcoming a new baby, or simply need an extra hand, getting started with BridgeCare is easy. Here&rsquo;s how it works.</p>
        </div>
        <div class="grid grid-3">
          <article v-for="(step, i) in steps" :key="step.title" class="icon-card">
            <div class="icon-badge">{{ i + 1 }}</div>
            <h4>Step {{ i + 1 }} &ndash; {{ step.title }}</h4>
            <p>{{ step.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-sm">
      <div class="container">
        <div class="cta-banner">
          <div class="cta-banner-bg"><img src="/images/refer-a-patient-bg.jpg" alt="" /></div>
          <div class="cta-banner-content">
            <h2>Ready to Get Started?</h2>
            <p>Schedule a free consultation and let&rsquo;s figure out the best way to support your recovery.</p>
          </div>
          <div style="position: relative; z-index: 1; display: flex; gap: 0.8rem; flex-wrap: wrap;">
            <ScheduleButton class="btn btn-gold cta-banner-action">Schedule A Consultation</ScheduleButton>
            <NuxtLink class="btn btn-outline cta-banner-action" to="/contact">Contact Us</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
