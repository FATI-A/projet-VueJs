const app = Vue.createApp({
  data() {
    return {
      counter: 12,
      name: "",
      confirmedName:" ",
    };
  },
  methods: {
    addCounter(num) {
      // return this.counter=+num; ajouter une seule fois
      return (this.counter = this.counter + num);
    },
    // addCounter(num) {
    //   return this.counter++;
    // },
    removeCounter(num) {
      // return this.counter =-10;

      return (this.counter = this.counter - num);
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    // setName(event) {
    //   this.name = event.target.value ;
    // },
    // setName() {
    //   return this.name
    // },
    // submitForm(event) {
    //   event.preventDefault();
    //   // l'action par défaut lorsque vous cliquez sur ce bouton est de soumettre le formulaire et de rafraîchir la page. En utilisant event.preventDefault(), empêcher ce comportement par défaut.
    //   alert("submitted !");
    // },
    submitForm() {
       alert("submitted !");
     },
     confimInput(){
      this.confirmedName =this.name;
     },
     resetInput(){
      this.name=''
     }
  },
});
app.mount("#events");
