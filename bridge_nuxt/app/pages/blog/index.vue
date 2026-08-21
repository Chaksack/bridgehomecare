<script setup lang="ts">
import { posts } from '~/data/posts'

// Blog is paused for now — no posts are being published. Remove this
// definePageMeta block to bring the page back.
definePageMeta({
  middleware: [() => navigateTo('/')]
})

useHead({ title: 'Blog' })
</script>

<template>
  <div>
    <PageBanner title="Latest News" />

    <section class="section">
      <div class="container">
        <div class="section-intro centered">
          <h6>From the Blog</h6>
          <h2>Helpful Articles and Practical Insights</h2>
          <p>Explore ideas for staying independent, creating a safe home environment, and supporting loved ones with confidence.</p>
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
  </div>
</template>
