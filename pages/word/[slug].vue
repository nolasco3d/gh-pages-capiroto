<template>
  <div class="container mx-auto min-h-screen bg-slate-50 px-10 text-center">
    <h2 class="font-bold text-6xl my-8 capitalize text-gray-600">{{ $route.params.slug }}</h2>
    <div v-if="!pending">
      <pre>{{data}}</pre>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute();

  console.log(route.params.slug)
  
  const {data, pending} = await useAsyncData(
    () => $fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${route.params.slug}`)
  );

  console.log(data, pending)
</script>

<style scoped>

</style>