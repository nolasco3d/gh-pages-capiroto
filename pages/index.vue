<template>
  <div class="container mx-auto min-h-screen bg-slate-50 px-10">
    
    <h2 class="font-bold text-6xl my-8 text-gray-600">Words</h2>

    <div class="grid grid-cols-3 gap-2 my-4">
      <NuxtLink :to="`/word/${item}`" class="border text-lg rounded-md shadow-sm p-5 text-center bg-white hover:border-cyan-300 hover:bg-cyan-50 transition-all ease-in font-medium capitalize text-cyan-700" v-for="(item, index) in words" :key="index">
        <span >{{item}}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  const words = ref([
    'hello',
    'apple',
    'table'
  ])
</script>

<style scoped>

</style>