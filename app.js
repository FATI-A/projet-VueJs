Vue.createApp({
  data() {
    return {
      goals: [],
      entredValue: " ",
      isUpdating: null,
      updatedValue: "",
    };
  },
  methods: {
    addGoal() {
      if (this.entredValue.trim() !== "") { // trim pour supprimer les espaces blancs 
        this.goals.push(this.entredValue);
        this.entredValue = "";
      }
    },
    deleteGoal(goal1) {
      this.goals = this.goals.filter((goal) => goal !== goal1);
    },
    enableUpdate(index) {
      this.isUpdating = index;
      this.updatedValue = this.goals[index];
    },
    updateGoal() {
      if (this.updatedValue.trim() !== "") {
        this.goals[this.isUpdating] = this.updatedValue;
        this.isUpdating = null;
        this.updatedValue = "";
      }
    },
  },
}).mount("#app");

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal(){
//   const entredervalue = inputEl.value;
//   const listEletem = document.createElement(('li'));
//   listEletem.textContent = entredervalue;
//   listEl.appendChild(listEletem);
//   inputEl.value = " ";
// }

// buttonEl.addEventListener('click',addGoal);
