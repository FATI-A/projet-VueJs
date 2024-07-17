const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      entredGoal:""

     };
  },
  methods:{
    addGoal(){
     this.goals.push(this.entredGoal);
     this.entredGoal="";
    },
    deleteGoal(id){
      //  this.goals = this.goals.filter((goal) => goal !== id);
      this.goals.splice(id,1);
    }
  }
});

app.mount("#user-goals");
