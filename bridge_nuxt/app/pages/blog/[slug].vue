<script setup lang="ts">
import { posts, getPostBySlug } from '~/data/posts'

// Blog is paused for now — no posts are being published. Remove the
// middleware below to bring the page back.
definePageMeta({
  validate: (route) => !!getPostBySlug(route.params.slug as string),
  middleware: [() => navigateTo('/')]
})

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const post = computed(() => getPostBySlug(slug.value)!)

useHead(() => ({ title: post.value.title }))

const postIndex = computed(() => posts.findIndex((p) => p.slug === slug.value))
const prevPost = computed(() => (postIndex.value > 0 ? posts[postIndex.value - 1] : null))
const nextPost = computed(() => (postIndex.value < posts.length - 1 ? posts[postIndex.value + 1] : null))
const recentPosts = computed(() => posts.filter((p) => p.slug !== slug.value).slice(0, 4))
</script>

<template>
  <div>
    <PageBanner :title="post.title" />

    <section class="section">
      <div class="container detail-layout">
        <article class="prose">
          <div class="detail-media">
            <img :src="post.image" :alt="post.title" />
          </div>
          <span class="category-tag">{{ post.category }}</span>
          <div class="article-meta" style="margin-bottom: 1rem;"><span>By admin</span><span>{{ post.date }}</span></div>

          <h2>{{ post.title }}</h2>
          <p v-for="(paragraph, i) in post.paragraphs" :key="i">{{ paragraph }}</p>

          <h3>Quick Tips</h3>
          <ul class="includes-list">
            <li v-for="tip in post.tips" :key="tip">{{ tip }}</li>
          </ul>

          <div class="article-nav">
            <NuxtLink v-if="prevPost" :to="`/blog/${prevPost.slug}`">&larr; {{ prevPost.title }}</NuxtLink>
            <span v-else />
            <NuxtLink v-if="nextPost" class="next" :to="`/blog/${nextPost.slug}`">{{ nextPost.title }} &rarr;</NuxtLink>
          </div>
        </article>

        <aside class="sidebar">
          <div class="sidebar-card sidebar-cta">
            <h4 style="margin-bottom: 0.4rem;">Need Support at Home?</h4>
            <p style="color: var(--muted); margin: 0;">Reach out for a free consultation and let's build a care plan together.</p>
            <NuxtLink class="btn btn-primary" to="/contact">Contact Us</NuxtLink>
          </div>

          <div class="sidebar-card">
            <h5>Recent Articles</h5>
            <div class="sidebar-list">
              <NuxtLink
                v-for="recent in recentPosts"
                :key="recent.slug"
                :to="`/blog/${recent.slug}`"
                class="sidebar-list-item"
              >
                <img :src="recent.image" :alt="recent.title" />
                <span>{{ recent.title }}</span>
              </NuxtLink>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>
