<template>
  <ul>
    <learning-ressource
      v-for="res in ressources"
      :id="res.id"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-ressource>
  </ul>
</template>
<script>
import LearningRessource from './LearningRessources.vue';
export default {
  components: {
    LearningRessource,
  },
inject: ['ressources'],
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
