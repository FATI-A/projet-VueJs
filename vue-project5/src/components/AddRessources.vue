<template>
  <div>
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close='confirmError'>
      <template #default>
        <p>Unfortunately, at least one input in invalid.</p>
        <p>
          please check all inputs and make sure you enter at least a few
          characters
        </p>
      </template>
      <template #actions>
        <base-button @click="confirmError">Okay</base-button>
      </template>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitData">
        <div class="form-control">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" ref="titleInput" />
        </div>
        <div class="form-control">
          <label for="description ">description</label>
          <textarea
            id="description"
            name="description"
            rows="3"
            ref="descriptionInput"
          ></textarea>
        </div>
        <div class="form-control">
          <label for="link">link</label>
          <input type="url" name="link" id="link" ref="linkInput" />
        </div>
        <div>
          <base-button type="submit">ADD Ressources</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>
<script>
import BaseButton from './UI/BaseButton.vue';
import BaseDialog from './UI/BaseDialog.vue';
export default {
  components: { BaseDialog, BaseButton },
  inject: ['AddRessource'],
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    submitData() {
      const entredTitle = this.$refs.titleInput.value;
      const entredDescription = this.$refs.descriptionInput.value;
      const entredLink = this.$refs.linkInput.value;
      if (
        entredTitle.trim() === '' ||
        entredDescription.trim() === '' ||
        entredLink.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      } else {
        this.AddRessource(entredTitle, entredDescription, entredLink);
      }
    },
    confirmError(){
    this.inputIsInvalid = false;
  }
  },
  
};
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
