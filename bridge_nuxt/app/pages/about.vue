<script setup lang="ts">
import { services } from '~/data/services'

useHead({ title: 'About Us' })

const whyExists = [
  'You may live alone.',
  'Your family may live in another state.',
  'You may be new to the area.',
  'Your partner may need to return to work.',
  'Or you may simply need some extra help for a little while.'
]

const difference = [
  { title: 'Personalized', text: 'Your needs are your own. We create a personalized support plan based on what you need, your schedule, and the services that work best for you.', icon: '🎯' },
  { title: 'Flexible', text: 'You may need support for a short period, occasionally, or on a more regular basis. BridgeCare is designed to provide flexible options based on your needs.', icon: '🔄' },
  { title: 'Practical', text: 'Sometimes the little things become the biggest things when you’re recovering or trying to manage everything on your own. We’re here to help make everyday life a little easier.', icon: '🧺' },
  { title: 'Reliable', text: 'When you arrange support, you should feel confident knowing someone will be there. Our support professionals are carefully selected and prepared to provide dependable, respectful service.', icon: '🤝' }
]
</script>

<template>
  <div>
    <PageBanner title="About Us" />

    <section class="section">
      <div class="container split">
        <div class="split-media">
          <div class="collage collage-single">
            <img class="collage-primary" src="/images/img/about-us.jpg" alt="Woman recovering comfortably at home on the couch with her dog" />
          </div>
        </div>
        <div>
          <div class="section-intro">
            <h6>About Us</h6>
            <h2>Born From a Firsthand Experience</h2>
            <p>BridgeCare Home Solutions was born from a firsthand experience that too many people quietly go through alone.</p>
          </div>
          <p style="color: var(--text);">After undergoing surgery, our founder faced a simple question before going home: &ldquo;Who&rsquo;s picking you up?&rdquo; For someone without a readily available support system, that question isn&rsquo;t always easy to answer.</p>
          <p style="color: var(--text);">A friend had to take time off work just to help with transportation home. A pet had to be boarded because there was no one available to help. And in the days that followed, managing everyday tasks while trying to recover made something very clear: sometimes you don&rsquo;t need medical care. You just need an extra hand.</p>
          <p style="color: var(--text);">That experience became the idea behind BridgeCare.</p>
          <div class="contact-card" style="margin-top: 1.6rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
            <div>
              <h4 style="margin-bottom: 0.2rem;">Have Questions? Let's Talk.</h4>
              <p style="margin: 0; color: var(--muted);">Call us today to discuss support options or schedule a free consultation.</p>
            </div>
            <NuxtLink class="btn btn-primary" to="/contact">Contact Us</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container split" style="align-items: start;">
        <div>
          <div class="section-intro">
            <h6>Why BridgeCare Exists</h6>
            <h2>People don't always have family or friends nearby who can drop everything when help is needed.</h2>
          </div>
          <ul class="check-list" style="color: var(--text);">
            <li v-for="reason in whyExists" :key="reason">{{ reason }}</li>
          </ul>
        </div>
        <div>
          <p style="color: var(--text);">BridgeCare provides personalized, non-medical concierge support for adults who need an extra hand during recovery or with everyday tasks.</p>
          <p style="color: var(--text);">Whether you're preparing for or recovering from surgery, adjusting after childbirth, or simply need practical help at home, our goal is simple:</p>
          <p style="color: var(--navy-dark); font-weight: 700; font-size: 1.2rem;">Make getting the right support easier.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-intro centered">
          <h6>Our Approach</h6>
          <h2>The BridgeCare Difference</h2>
        </div>
        <div class="grid grid-4">
          <article v-for="item in difference" :key="item.title" class="icon-card">
            <div class="icon-badge">{{ item.icon }}</div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container" style="max-width: 820px; text-align: center;">
        <div class="section-intro centered">
          <h6>Our Service Boundaries</h6>
          <h2>Clearly Non-Medical</h2>
          <p>BridgeCare provides practical, non-medical support. We do not provide medical, nursing, or hands-on personal care services. If you're unsure whether the help you need falls within our services, we'll be happy to discuss it during your consultation.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-intro centered">
          <h6>Our Services</h6>
          <h2>Types of Support We Provide</h2>
          <p>BridgeCare provides flexible, non-medical concierge support for adults who need an extra hand — whether you're preparing for a procedure, recovering at home, welcoming a new baby, or simply need help with everyday tasks.</p>
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
            <h2>You Don't Have to Do It All Alone</h2>
            <p>BridgeCare was created for the moments when you find yourself thinking: &ldquo;I could really use an extra hand.&rdquo; That's where we come in.</p>
          </div>
          <div style="position: relative; z-index: 1; display: flex; gap: 0.8rem; flex-wrap: wrap;">
            <ScheduleButton class="btn btn-gold cta-banner-action">Schedule a Free Consultation</ScheduleButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
