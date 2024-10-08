<template>
  <div>
    <button @click="confirmInput">Confirm</button>
    <button @click="saveChanges">save changes</button>
    <ul>
      <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.fullName"
        :role="user.role"
      ></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
      //  this.$router.back('/teams');
    },
  },
  saveChanges() {
    this.changesSaved = true;
  },
  beforeRouteEnter(to, from, next) {
    console.log('userList beforeEnter');
    console.log('to, from', to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('userList beforeleave');
    console.log('to, from', to, from);
    if (this.changesSaved) {
      next();
    } else {
     const userWantsPrompt = confirm('are you sure? you got unsaved changes');
     next(userWantsPrompt);
    }
  },
  unmounted() {
    console.log('onUnmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
