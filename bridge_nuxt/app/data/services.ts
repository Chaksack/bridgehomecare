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
    slug: 'pre-post-surgery-recovery-support',
    title: 'Pre & Post-Surgery Recovery Support',
    excerpt: 'Practical, non-medical support before and after surgery or an outpatient procedure, helping make recovery at home easier and less stressful.',
    image: '/images/img/Picture1.jpg',
    intro: 'Recovering from surgery can be difficult when you don’t have someone nearby to help with the little things. BridgeCare provides personalized, non-medical support before and after surgery or an outpatient procedure, helping you feel more prepared, comfortable, and supported at home. Whether you live alone, have family who can’t be there, or are traveling to the Denver-Aurora area for a procedure, we’re here to provide an extra hand when you need it.',
    includes: [
      'Getting Home & Settled – Support after discharge or a procedure, including helping you get home and settled comfortably.',
      'Recovery-Day Support – A reliable presence during the early stages of recovery when you may not want to be alone.',
      'Meals & Hydration Reminders – Simple meal preparation and reminders to eat and stay hydrated according to the instructions you’ve been given.',
      'Light Household Help – Help with light household tasks so you can focus on resting and recovering.',
      'Errands & Essentials – Assistance with appropriate errands and picking up everyday essentials you may need during recovery.',
      'Practical Recovery Support – Help with appropriate non-medical tasks outlined in your personalized support plan.'
    ],
    closing: 'What We Don’t Provide: BridgeCare provides non-medical support and does not provide medical, nursing, or hands-on personal care. We do not diagnose conditions, provide medical treatment, administer medications, perform clinical tasks, or replace your healthcare provider’s instructions. If you’re unsure whether the help you need falls within our services, we’ll discuss it with you during your consultation. Planning ahead? You don’t have to wait until after your procedure to contact us – scheduling support ahead of time can help you know what to expect and have a plan in place for when you return home.'
  },
  {
    slug: 'postpartum-new-mother-support',
    title: 'Postpartum & New Mother Support',
    excerpt: 'An extra hand at home while you recover from childbirth, including C-section recovery, with practical household support tailored to your needs.',
    image: '/images/img/Picture6.jpg',
    intro: 'Bringing home a new baby is a big adjustment – and recovering from childbirth takes time. BridgeCare provides personalized, non-medical support for new mothers who could use an extra hand at home during postpartum recovery, including after a C-section. Whether family lives far away, your partner has returned to work, or you simply need additional help while you recover, we’re here to make everyday life a little easier.',
    includes: [
      'Light Household Help – Help with light housekeeping, laundry, tidying, and other appropriate household tasks so there’s less for you to worry about.',
      'Meal Preparation – Simple meal preparation and help keeping meals, snacks, and refreshments ready while you recover.',
      'Baby-Related Household Help – Washing and sanitizing bottles, baby laundry, organizing and restocking diapers, wipes, and supplies, picking up baby and household essentials, and keeping commonly used baby areas organized.',
      'Errands & Household Essentials – Help with appropriate errands and everyday household needs when getting out of the house isn’t convenient.',
      'Pet Support – Help with basic pet-related tasks, including feeding and walking, when appropriate.'
    ],
    closing: 'Support for Mom & the household: BridgeCare provides practical, non-medical support for Mom and the household while she recovers. Our postpartum service is not newborn childcare, nanny care, doula care, postpartum nursing, or medical care. BridgeCare support professionals do not assume responsibility for caring for or supervising your baby. If you’re unsure whether something you need falls within our services, we’ll discuss it with you during your consultation. Planning ahead? If you’re expecting and know you may need an extra hand after childbirth, contact BridgeCare ahead of time – we’ll create a personalized support plan for when you return home.'
  },
  {
    slug: 'everyday-concierge-support',
    title: 'Everyday Concierge Support',
    excerpt: 'Flexible, non-medical support for adults who could use an extra hand with everyday tasks, errands, household needs, or temporary changes in routine.',
    image: '/images/img/Picture2.jpg',
    intro: 'Sometimes life gets busy, circumstances change, or you simply need an extra hand. BridgeCare provides personalized, non-medical concierge support for adults who could use help keeping up with everyday tasks at home and in the community. Whether you need temporary support, help while family is away, or simply an extra set of hands from time to time, we’ll create a personalized support plan around what works for you.',
    includes: [
      'Light Household Help – Help with light housekeeping, laundry, tidying, and other appropriate household tasks.',
      'Meal Preparation – Simple meal preparation and help keeping everyday meals, snacks, and refreshments ready when you need them.',
      'Errands & Essentials – Help coordinating groceries, household essentials, prescription pickups, and other appropriate errands.',
      'Transportation Coordination – BridgeCare can help coordinate transportation through third-party transportation providers. For hospital or procedure-related transportation, appropriate medical or healthcare transportation services may be arranged based on your needs. BridgeCare support professionals do not transport clients in personal vehicles.',
      'Pet Support – Help with basic pet-related tasks, including feeding and walking, when appropriate.',
      'Organization & Everyday Tasks – An extra hand with household organization and other appropriate everyday tasks that can make your routine easier to manage.',
      'Companionship – Friendly, non-medical companionship for adults who would enjoy conversation, activities, or simply having someone there for a little extra support.'
    ],
    closing: 'Flexible support built around you: you don’t have to fit into a traditional care model. You may need BridgeCare for a short period, occasionally, or on a more regular basis. We’ll talk about what you need and create a personalized support plan based on your schedule and the services BridgeCare provides. BridgeCare provides practical, non-medical support – we do not provide medical, nursing, or hands-on personal care services.'
  }
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
