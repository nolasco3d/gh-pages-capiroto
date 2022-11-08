<template>
  <div v-if="true">
    <p>word:{{$route.params.slug}}</p>

    <!-- <pre v-if="data">{{data}}</pre> -->
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script setup lang="ts">
  const route = useRoute();
  
  // const {data, pending} = await useFetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${route.params.slug}`);

  // console.log(data)
</script>

<style scoped>

</style>