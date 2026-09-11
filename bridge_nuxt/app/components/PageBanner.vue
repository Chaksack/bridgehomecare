<script setup lang="ts">
const props = defineProps<{ title: string; image?: string }>()
</script>

<template>
  <section class="page-banner">
    <div class="hero-bg">
      <img :src="props.image || '/images/page-banner.jpg'" alt="" />
    </div>
    <div class="container page-banner-content">
      <h1>{{ title }}</h1>
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <NuxtLink to="/">Home</NuxtLink>
        <span>&rarr;</span>
        <span>{{ title }}</span>
      </nav>
    </div>
  </section>
</template>
