<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedTab('stored-ressources')"
        :mode="storedResButtonMode"
        >Stored Ressources</base-button
      >
      <base-button
        @click="setSelectedTab('add-ressource')"
        :mode="addResButtonMode"
        >Add ressource</base-button
      >
    </base-card>
    <component :is="selectedTab"></component>
  </div>
</template>
<script>
import StoredRessources from './StoredRessources.vue';
import AddRessource from './AddRessources.vue';
export default {
  components: {
    StoredRessources,
    AddRessource,
  },
  data() {
    return {
      selectedTab: 'stored-ressources',
      storedRessources: [
        {
          id: 'official-guide',
          title: ' official guide',
          description: 'the official vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: ' google',
          description: 'google documentation',
          link: 'https://google.org',
        },
      ],
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-ressources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-ressource' ? null : 'flat';
    },
  },
  provide() {
    return {
      ressources: this.storedRessources,
      AddRessource: this.AddRessource,
      removeRessource: this.removeRessource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    AddRessource(title, description, url) {
      const newRessource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedRessources.unshift(newRessource);
      this.SelectedTab = 'stored-ressources';
      console.log('good');
    },
    removeRessource(resId) {
        console.log('idres',resId);
      const resIndex = this.storedRessources.findIndex(
        (res) => res.id === resId
      );
      if (resIndex !== -1) {
        this.storedRessources.splice(resIndex, 1);
      }
      console.log('id', resIndex);
    },
  },
};
</script>
