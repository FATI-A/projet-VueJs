<template>
  <div>
    <div class="container">
      <div class="block" :class="{ animate: animatedBlock }"></div>
      <button @click="animateBlock">Animate</button>
    </div>
    <div class="container">
      <transition name="para">
        <p v-if="paraIsVisible">this is only sometimes visible ....</p>
      </transition>
      <button @click="toggleBlocck">toggle paragraph</button>
    </div>

    <base-modal @close="hideDialog" :open='dialogIsVisible'>
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
    };
  },
  methods: {
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleBlocck() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-50px); */
  animation: slide-fade 0.3s ease-out forwards;
}
.para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.para-enter-active {
  /* transition: all 0.3s ease-out; */
  animation: slide-scale 0.3s ease-out;
}
.para-enter-to {
  /* opacity: 1;
transform: translateY(0); */
}
.para-leave-from {
  /* opacity: 1;
transform: translateY(0); */
}
.para-leave-active {
  /* transition: all 0.3s ease-in; */
  animation: slide-scale 0.3s ease-out;
}
.para-leave-to {
  /* opacity: 0;
transform: translateY(30px); */
}
.modal-enter-from {
  /* opacity: 0;
transform:  translateY(-30px); */
}
.modal-enter-active {
  /* transition: all 0.3s ease-out; */
  animation: modal-slide 0.3s ease-out;
}
.modal-enter-to {
  /* opacity: 1;
transform: translateY(0); */
}
.modal-leave-from {
  /* opacity: 1;
transform: translateY(0); */
}
.modal-leave-active {
  /* transition: all 0.3s ease-in; */
  animation: modal-slide 0.3s ease-out;
}
.modal-leave-to {
  /* opacity: 0;
transform: translateY(30px); */
}
@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
@keyframes modal-slide {
  from {
    opacity: 0;
    transform: translateX(-50px) scale(0.9);
  }
  to {
    transform: translateY(0) scale(1);
  }
}
</style>
