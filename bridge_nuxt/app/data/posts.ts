export interface Post {
  slug: string
  title: string
  date: string
  category: string
  image: string
  excerpt: string
  paragraphs: string[]
  tips: string[]
}

export const posts: Post[] = [
  {
    slug: 'how-to-protect-seniors-from-falls',
    title: 'How To Protect Seniors From Falls',
    date: 'June 5, 2021',
    category: 'Care Tips',
    image: '/images/blog-falls.jpg',
    excerpt: 'Small changes at home can dramatically reduce fall risk and keep loved ones steady and confident.',
    paragraphs: [
      'Falls are one of the leading causes of injury among older adults, but many are preventable with a few thoughtful changes around the home. A fall doesn\'t just cause physical harm — it can also shake a senior\'s confidence and independence.',
      'Reducing fall risk starts with a careful look at the home environment: loose rugs, poor lighting, and cluttered walkways are common culprits. Combining these changes with regular movement and a watchful caregiver makes a meaningful difference.'
    ],
    tips: [
      'Remove loose rugs or secure them with non-slip backing',
      'Add grab bars in bathrooms and near stairs',
      'Improve lighting in hallways and stairwells',
      'Keep frequently used items within easy reach',
      'Encourage supportive, well-fitting footwear'
    ]
  },
  {
    slug: 'additional-services-will-help-senior',
    title: 'Additional Services will Help Senior',
    date: 'June 5, 2021',
    category: 'Support',
    image: '/images/blog-additional-services.jpg',
    excerpt: 'A look at the extra layers of support that make daily living easier for aging adults.',
    paragraphs: [
      'Beyond the basics of personal care, many families find that a few additional services make daily life meaningfully easier for their loved one. Small layers of support — a tidy home, a well-planned meal, a familiar face for conversation — add up over time.',
      'The right combination of services depends on each person\'s needs and routine. A short consultation is often enough to identify which additional supports will have the biggest impact on comfort and independence.'
    ],
    tips: [
      'Light housekeeping to reduce fall hazards and clutter',
      'Meal preparation tailored to dietary needs',
      'Companionship to reduce isolation',
      'Medication reminders to support routine adherence',
      'Transportation support for appointments and errands'
    ]
  },
  {
    slug: 'caring-thoughts-you-can-fundraise',
    title: 'Caring Thoughts You Can Fundraise',
    date: 'May 27, 2021',
    category: 'Community',
    image: '/images/blog-fundraise.jpg',
    excerpt: 'Community fundraising ideas that bring families together in support of senior care.',
    paragraphs: [
      'Community support can make a real difference for families managing the cost of in-home care. Local fundraising efforts — whether organized by a church group, a neighborhood association, or a family network — help bridge gaps and bring people together around a shared cause.',
      'Even modest, well-organized efforts can build lasting community ties while helping a family through a difficult transition.'
    ],
    tips: [
      'Host a small community meal or bake sale',
      'Set up an online fundraiser with a clear, specific goal',
      'Partner with local businesses for matching donations',
      'Share updates so supporters see the impact of their gift',
      'Say thank you — a handwritten note goes a long way'
    ]
  },
  {
    slug: '5-ways-to-help-seniors-fight-loneliness',
    title: '5 Ways to Help Seniors Fight Loneliness',
    date: 'May 1, 2021',
    category: 'Well-Being',
    image: '/images/blog-loneliness.jpg',
    excerpt: 'Simple, meaningful ways to keep older adults connected, engaged, and supported.',
    paragraphs: [
      'Loneliness can affect both mental and physical health, especially for seniors who live alone or have mobility challenges. Regular, genuine connection — not just a quick phone call — makes a real difference in day-to-day well-being.',
      'The good news is that fighting loneliness doesn\'t require grand gestures. Small, consistent efforts to stay connected often matter more than occasional big visits.'
    ],
    tips: [
      'Schedule regular visits or video calls, not just holidays',
      'Encourage a hobby or interest group',
      'Consider a companion caregiver for regular company',
      'Help set up simple technology for staying in touch',
      'Invite participation in family decisions and traditions'
    ]
  },
  {
    slug: 'winter-fitness-tips-for-older-adults',
    title: 'Winter Fitness Tips for Older Adults',
    date: 'May 1, 2021',
    category: 'Health',
    image: '/images/blog-winter-fitness.jpg',
    excerpt: 'Staying active safely through the colder months with low-impact, senior-friendly routines.',
    paragraphs: [
      'Cold weather often means less time outdoors, which can lead to reduced activity and stiffness. Staying active through the winter months supports balance, circulation, and mood — but safety comes first when temperatures drop.',
      'Gentle, consistent movement indoors is often the safest way to stay fit through winter, especially for seniors managing arthritis or balance concerns.'
    ],
    tips: [
      'Try seated stretching or chair yoga indoors',
      'Take short, supervised walks on clear, dry days',
      'Stay warm to keep joints loose and reduce stiffness',
      'Stay hydrated even when it\'s cold out',
      'Watch for icy walkways and uneven surfaces'
    ]
  },
  {
    slug: '10-fun-activities-to-keep-seniors-active',
    title: '10 Fun Activities to Keep Seniors Active',
    date: 'May 1, 2021',
    category: 'Well-Being',
    image: '/images/blog-fun-activities.jpg',
    excerpt: 'Engaging ideas for hobbies and light exercise that keep both body and mind sharp.',
    paragraphs: [
      'Staying active isn\'t just about exercise — it\'s about staying engaged, curious, and connected. The best activities for seniors combine light movement with mental stimulation and, ideally, a bit of social interaction.',
      'A caregiver who knows the client\'s interests can help turn everyday moments into meaningful activity, making it easier to stay consistent.'
    ],
    tips: [
      'Gardening or tending to houseplants',
      'Puzzles, cards, or board games',
      'Gentle walks around the neighborhood',
      'Cooking or baking a favorite recipe together',
      'Music, singing, or a simple dance session'
    ]
  }
]

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug)
}
