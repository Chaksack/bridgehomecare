<script setup lang="ts">
// import { posts as allPosts } from '~/data/posts'
import { services } from '~/data/services'

useHead({ title: undefined })

// const posts = allPosts.slice(0, 3)

const whoWeServe = [
  { title: 'Adults Recovering From Surgery or a Procedure', text: 'Coming home after surgery doesn’t always mean you’re ready to do everything on your own. We provide practical, non-medical support to make recovery at home more comfortable and manageable.', icon: '🏥' },
  { title: 'New Mothers During Postpartum Recovery', text: 'Recovering from childbirth takes time. We provide an extra hand with everyday household needs so you can focus on yourself, your recovery, and your new baby.', icon: '🤱' },
  { title: 'Adults Needing Everyday Support', text: 'Sometimes you simply need help getting things done. BridgeCare provides flexible support with appropriate everyday tasks, errands, and household needs — whether you need us temporarily or a little more regularly.', icon: '🏡' },
  { title: 'Visitors Recovering Away From Home', text: 'Traveling to the Denver-Aurora area for surgery or a procedure can mean recovering without your usual support system nearby. BridgeCare provides local, non-medical support while you recover before returning home.', icon: '✈️' }
]

const trustIndicators = [
  {
    title: 'Trusted & Reliable',
    icon: '✓',
    text: 'Our support professionals are carefully screened and prepared to provide dependable, respectful assistance in your home.',
    items: [
      'Carefully screened support professionals',
      'Clear service expectations',
      'Reliable, professional support'
    ]
  },
  {
    title: 'Practical Support',
    icon: '🛡️',
    text: 'Flexible, non-medical assistance designed around your everyday needs, recovery, or circumstances.',
    items: [
      'Clear non-medical service boundaries',
      'Safety-focused practices',
      'Designed to complement medical care when applicable'
    ]
  },
  {
    title: 'Personalized & Flexible',
    icon: '🤝',
    text: 'Your needs may look different from someone else’s. We create a personalized support plan based on what you need, when you need it.',
    items: [
      'Flexible scheduling',
      'Short-term or ongoing options',
      'Support tailored to your needs'
    ]
  }
]

const faqs = reactive([
  { q: 'What services does BridgeCare provide?', a: 'BridgeCare provides personalized, non-medical concierge support for adults who need an extra hand during recovery or with everyday tasks. Our services include pre- and post-surgery recovery support, postpartum and new mother support, and everyday concierge support.', open: true },
  { q: 'What does “non-medical support” mean?', a: 'Non-medical support means we help with practical, everyday needs — not medical, nursing, or clinical care. During your consultation, we’ll talk about what you need and make sure it falls within the services BridgeCare provides.', open: false },
  { q: 'Who provides the support?', a: 'BridgeCare support professionals are carefully screened and prepared to provide reliable, respectful, non-medical assistance. We match services to your needs while maintaining clear professional and service boundaries.', open: false },
  { q: 'How do I know which service is right for me?', a: 'You don’t have to figure that out before contacting us. During your initial consultation, we’ll learn what kind of help you need and determine whether BridgeCare is a good fit. If so, we’ll create a personalized support plan based on your needs and schedule.', open: false },
  { q: 'Can I use BridgeCare for short-term support?', a: 'Yes. BridgeCare is designed to offer flexible support, including short-term assistance during recovery, postpartum periods, temporary changes in routine, or other times when you could use an extra hand.', open: false },
  { q: 'Do I need a doctor’s referral?', a: 'No. You can contact BridgeCare directly to request services. Healthcare professionals may also refer individuals to BridgeCare when non-medical support may be helpful.', open: false },
  { q: 'Does BridgeCare accept insurance?', a: 'BridgeCare is a private-pay service. Contact us to discuss your needs, scheduling, and current service options.', open: false },
  { q: 'Does BridgeCare work with hospitals and healthcare providers?', a: 'Yes. BridgeCare welcomes referrals from hospitals, outpatient surgery centers, specialty practices, discharge professionals, OB/GYN practices, and other healthcare providers seeking non-medical support options for their patients.', open: false }
])

function toggleFaq(item: (typeof faqs)[number]) {
  item.open = !item.open
}
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/img/Picture1.jpg" alt="Client relaxing at home during post-surgery recovery" />
      </div>
      <div class="container">
        <div class="hero-content">
          <p class="eyebrow">Personalized Non-Medical Support</p>
          <h1>An Extra Hand When You Need It Most</h1>
          <p>Personalized concierge support for adults who need an extra hand during recovery or with everyday tasks. From post-surgery and postpartum support to help around the home, BridgeCare provides flexible, non-medical assistance throughout the Denver-Aurora area.</p>
          <div class="hero-actions">
            <ScheduleButton class="btn btn-gold">Schedule A Consultation</ScheduleButton>
            <NuxtLink class="btn btn-outline" to="/referral-partners">Make a Referral</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <div class="section-intro">
            <h6>About Us</h6>
            <h2>You Don't Have to Do It All Alone</h2>
            <p>BridgeCare was created around a simple idea: sometimes you just need an extra hand. Whether you're recovering from surgery, adjusting after childbirth, living on your own, or simply need temporary help with everyday tasks, having reliable support can make all the difference. BridgeCare provides personalized, non-medical concierge support designed around your needs — so you can focus on recovering, getting things done, and feeling more comfortable at home.</p>
          </div>
          <ul class="check-list" style="color: var(--text);">
            <li>Short-term and flexible support</li>
            <li>Personalized to your needs</li>
            <li>Private-pay for convenient access to services</li>
            <li>Serving the Denver-Aurora metropolitan area</li>
          </ul>
          <div class="stat-row">
            <div><strong>Trusted Support Professionals</strong><span>Carefully screened and prepared to provide dependable, non-medical assistance while respecting clear service boundaries.</span></div>
            <div><strong>Non-Medical Support</strong><span>Practical assistance designed to complement your existing medical care when applicable — never replace it.</span></div>
          </div>
        </div>
        <div class="split-media">
          <div class="collage">
            <img class="collage-primary" src="/images/img/Picture3.jpg" alt="BridgeCare support professional with a client" />
            <img class="collage-secondary" src="/images/img/Picture5.jpg" alt="BridgeCare support professional assisting a client" />
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-intro centered">
          <h6>Our Services</h6>
          <h2>Personalized Support for Recovery & Everyday Life</h2>
          <p>BridgeCare provides flexible, non-medical concierge support based on what you need and when you need it. Whether you're preparing for a procedure, recovering at home, welcoming a new baby, or simply need an extra hand with everyday tasks, we're here to help.</p>
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

    <section class="section">
      <div class="container">
        <div class="section-intro centered">
          <h6>Who We Serve</h6>
          <h2>Support for the Moments You Could Use an Extra Hand</h2>
          <p>BridgeCare supports adults who need temporary, practical help at home — whether you're recovering, adjusting after childbirth, away from your usual support system, or simply need help keeping up with everyday tasks.</p>
        </div>
        <div class="grid grid-4">
          <article v-for="item in whoWeServe" :key="item.title" class="icon-card">
            <div class="icon-badge">{{ item.icon }}</div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-intro centered">
          <h6>Why Choose BridgeCare?</h6>
          <h2>Support You Can Feel Comfortable With</h2>
          <p>Inviting someone into your home is personal. Whether you're recovering, helping a loved one, or simply need an extra hand, you deserve support that feels reliable, respectful, and designed around you.</p>
        </div>
        <div class="grid grid-3">
          <article v-for="indicator in trustIndicators" :key="indicator.title" class="icon-card">
            <div class="icon-badge">{{ indicator.icon }}</div>
            <h4>{{ indicator.title }}</h4>
            <p>{{ indicator.text }}</p>
            <ul class="check-list" style="color: var(--text); margin-top: 0.6rem;">
              <li v-for="point in indicator.items" :key="point">{{ point }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section-sm">
      <div class="container">
        <div class="cta-banner">
          <div class="cta-banner-bg"><img src="/images/refer-a-patient-bg.jpg" alt="" /></div>
          <div class="cta-banner-content">
            <h2>Need an Extra Hand?</h2>
            <p>Whether you're planning ahead, recovering at home, welcoming a new baby, or simply need help with everyday tasks, we're here to make getting support simple.</p>
          </div>
          <div style="position: relative; z-index: 1; display: flex; gap: 0.8rem; flex-wrap: wrap;">
            <ScheduleButton class="btn btn-gold cta-banner-action">Schedule A Consultation</ScheduleButton>
            <NuxtLink class="btn btn-outline cta-banner-action" to="/referral-partners">Make a Referral</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="split-media">
          <div class="collage">
            <img class="collage-primary" src="/images/img/Picture4.jpg" alt="Client at home during recovery" />
          </div>
        </div>
        <div>
          <div class="section-intro">
            <h6>FAQs</h6>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about getting support from BridgeCare.</p>
          </div>
          <div class="faq-list">
            <div v-for="item in faqs" :key="item.q" class="faq-item" :class="{ open: item.open }">
              <button class="faq-question" type="button" @click="toggleFaq(item)">
                {{ item.q }}
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                <p>{{ item.a }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--
    <section class="section">
      <div class="container">
        <div class="section-intro centered">
          <h6>From the Blog</h6>
          <h2>News &amp; Articles</h2>
        </div>
        <div class="grid grid-3">
          <article v-for="post in posts" :key="post.slug" class="article-card">
            <NuxtLink :to="`/blog/${post.slug}`">
              <img :src="post.image" :alt="post.title" />
            </NuxtLink>
            <div class="article-card-body">
              <div class="article-meta"><span>By admin</span><span>{{ post.date }}</span></div>
              <h3><NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink></h3>
              <p>{{ post.excerpt }}</p>
              <NuxtLink class="read-more" :to="`/blog/${post.slug}`">Read More &rarr;</NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>
    -->
  </div>
</template>
