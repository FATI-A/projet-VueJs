<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>phone</label>
      <input type="tel" v-model="enteredphone" />
    </div>
    <div>
      <label>email</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredphone: " ",
      enteredEmail: " ",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredphone,
        this.enteredEmail,
      );
    },
  },
};
</script>
