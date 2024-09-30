<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" anotherProp="......go "></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["finish the couarse", "learn vue "],
    };
  },
};
</script>
