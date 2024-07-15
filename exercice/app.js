const app = Vue.createApp({
  data() {
    return {
      name: "fatiha",
      age: 24,
      age5: 29,
      couleur1: "bleu",
      couleur2: "black",
      image:
        "https://store-images.s-microsoft.com/image/apps.21478.13510798887611042.610ae026-cc3d-4b4e-9044-1b8721988d93.cc79c6cc-e3e6-4b5d-ae8d-2b26c6b3ae74",
      intredValue: "",
      goals: [],
    };
  },
  methods: {
    outPutGoal() {
      const rondomNumbre = Math.random();
      if (rondomNumbre < 1) {
        return this.couleur1;
      } else {
        return this.couleur2;
      }
    },
    add() {
      if (this.intredValue.trim() !== "") {
        this.goals.push(this.intredValue);
        this.intredValue = "";
      }
    },
  },
});

app.mount("#assignment");
