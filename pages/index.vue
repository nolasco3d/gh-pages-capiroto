<template>
  <div>
    <div v-for="(item, index) in words" :key="index">
      <NuxtLink :to="`/word/${item}`">{{item}}</NuxtLink>
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