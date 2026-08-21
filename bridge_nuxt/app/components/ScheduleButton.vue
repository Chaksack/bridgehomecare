<script setup lang="ts">
const { openPopup } = useCalendly()
</script>

<template>
  <button type="button" @click="openPopup">
    <slot />
  </button>
</template>

<style scoped>
/* :where() keeps this reset at zero specificity so utility classes like
   .btn-primary / .btn-gold passed in via `class` always win. */
:where(button) {
  background: none;
  border: 0;
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  text-align: inherit;
}
</style>
