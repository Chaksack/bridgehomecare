export interface Service {
  slug: string
  title: string
  excerpt: string
  image: string
  intro: string
  includes: string[]
  closing: string
}

export const services: Service[] = [
  {
    slug: 'pre-post-operative-recovery-support',
    title: 'Pre and Post Operative Recovery Support',
    excerpt: 'For individuals discharged from outpatient surgery centers, hospitals, and specialty clinics.',
    image: '/images/hero-home.jpg',
    intro: 'For individuals discharged from outpatient surgery centers, hospitals, and specialty clinics, the first hours and days at home matter most. We help bridge the gap between discharge and independence, safely.',
    includes: [
      'Escort support after discharge',
      'Assistance getting settled at home',
      'Supervision during the immediate recovery period',
      'Non-clinical mobility support',
      'Meal preparation and hydration reminders',
      'Light housekeeping and errands'
    ],
    closing: 'Our services supplement — but do not replace — medical or nursing care.'
  },
  {
    slug: 'postpartum-new-mother-support',
    title: 'Postpartum & New Mother Household Support',
    excerpt: 'Support for mothers recovering from childbirth, including C-section recovery.',
    image: '/images/service-light-housekeeping.jpg',
    intro: 'Support for mothers recovering from childbirth, including C-section recovery. Our goal is to help new mothers focus on rest and recovery while we assist with household tasks.',
    includes: [
      'Light housekeeping & laundry',
      'Meal preparation',
      'Household assistance',
      'Non-clinical mobility support',
      'Pet care and walking support'
    ],
    closing: 'Our goal is to help new mothers focus on rest and recovery while we assist with household tasks.'
  },
  {
    slug: 'traditional-non-medical-home-care',
    title: 'Traditional Non-Medical Home Care',
    excerpt: 'For adults and seniors who need assistance with daily activities but do not require skilled medical care.',
    image: '/images/service-companionship.jpg',
    intro: 'For adults and seniors who need assistance with daily activities but do not require skilled medical care, we provide dependable, non-medical support built around routine and dignity.',
    includes: [
      'Companionship and supervision',
      'Light housekeeping & laundry',
      'Meal preparation',
      'Transportation assistance (non-clinical)',
      'Errands and pet care'
    ],
    closing: 'Our services supplement — but do not replace — medical or nursing care.'
  }
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
