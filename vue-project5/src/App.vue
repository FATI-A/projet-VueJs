<template>
  <div>
    <the-header title="RemeberMe"></the-header>
    <the-ressource></the-ressource>
  </div>
</template>
<script>

import TheHeader from './components/Layouts/TheHeader.vue';
import TheRessource from './components/TheRessource.vue'

export default {
  components: {
    TheHeader,
    TheRessource
  },

};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
