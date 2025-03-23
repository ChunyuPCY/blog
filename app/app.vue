<script setup lang="ts">
useHead({
  titleTemplate(title) {
    const staticTitle = 'Superficiality\'s Blog'

    return title ? `${title} - ${staticTitle}` : staticTitle
  },
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: '',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap',
      crossorigin: '',
    },
  ],
})
</script>

<template>
  <div class="mx-auto px-4 max-w-4xl">
    <!-- Header  -->
    <header mb-4 mt-8 flex items-end justify-between>
      <div>
        <h1 class="text-2xl font-semibold">
          <NuxtLink to="/">
            Personal Blog
          </NuxtLink>
        </h1>
        <p class="text-gray-500">
          Learning programing easily
        </p>
      </div>

      <Btn>Hire Me</Btn>
    </header>
    <!-- ./ Header -->

    <!-- Main Content -->
    <NuxtPage />
    <!-- ./ Main Content -->
  </div>
</template>

<style lang="scss">
.fira-code-400 {
  font-family: 'Fira Code', monospace;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
