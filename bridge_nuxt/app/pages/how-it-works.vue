<script setup lang="ts">
useHead({ title: 'How It Works' })

const steps = [
  { title: 'Reach Out', text: 'Contact us directly or ask your doctor, hospital discharge coordinator, or a care team to refer you. We welcome both self-referrals and provider referrals and will respond promptly to get the conversation started.' },
  { title: 'Free Consultation', text: 'We’ll connect with you (or your family member) to understand your situation, your needs, and your timeline. No pressure, no commitment – just a real conversation so we can figure out the best way to support you.' },
  { title: 'Your Care Plan', text: 'Based on your consultation, we will put together a personalized support plan that fits your recovery timeline, daily needs, and schedule. Every plan is private-pay and fully flexible – no insurance hoops, no rigid packages.' },
  { title: 'We Show Up', text: 'Your caregiver arrives ready to help. Whether that’s escorting you home from the hospital, settling you in, helping around the house, or supporting you through your recovery day by day. We handle the details so you can focus on healing.' },
  { title: 'Ongoing Support', text: 'Need us for one day or several weeks? We adjust as your needs change. When you’re back on your feet, we step back. It’s that simple.' }
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
          <p>Especially when you&rsquo;re already navigating a procedure, a new baby, or a recovery. Here&rsquo;s how BridgeCare works.</p>
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
