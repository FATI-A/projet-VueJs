<template>
  <div>
    <h2>manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">set Goal</button>
    <!-- teleport for changing the position of the componenet en the page html for the reason of accissibility and styling  -->
    <teleport to="body">
   <error-alert v-if="inputIsInvalid">
    <h2>input is invalid</h2>
    <p>please enter at least a few caracter</p>
    <button @click="confirmError">ok</button>
   </error-alert>
   </teleport>
  </div>
</template>
<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const entredeValue = this.$refs.goal.value;
      if (entredeValue === "") {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
        this.inputIsInvalid = false;
    }
  },
};
</script>
