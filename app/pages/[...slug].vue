<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('all')
    .path(route.path)
    .first()
})
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
  <div v-else class="empty-page">
    <h1>Page Not Found</h1>
    <p>Oops! The content you're looking for doesn't exist.</p>
    <NuxtLink to="/">
      Go back home
    </NuxtLink>
  </div>
</template>

<style scoped></style>
