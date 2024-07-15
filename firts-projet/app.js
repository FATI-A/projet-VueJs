const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "finish the course ",
      courseGoalB: "master vue ",
      //courseGoalB: "<h1>master vue</h1> ",
      vueLink: "https://vuesjs.org/",
    };
  },
  methods: {
    outPutGoal() {
      const rondomNumbre = Math.random();
      if (rondomNumbre < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});
app.mount("#user-goal");
