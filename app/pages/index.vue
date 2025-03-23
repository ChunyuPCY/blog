<script setup lang="ts">
const { data: all } = await useAsyncData('all', () => queryCollection('all')
  .where('published', '=', true)
  .order('date', 'DESC')
  .select('path', 'title', 'description', 'date', 'id')
  .all())
</script>

<template>
  <div>
    <h1>Blog</h1>
    <ul>
      <li v-for="post in all" :key="post.id">
        <NuxtLink :to="post.path">
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
header {
  color: #000;
}
</style>
