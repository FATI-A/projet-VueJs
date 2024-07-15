const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCounter(num) {
      // return this.counter=+num; ajouter une seule fois 
       return this.counter = this.counter + num
    },
    // addCounter(num) {
    //   return this.counter++;
    // },
    removeCounter(num) {
      // return this.counter =-10;
      
       return this.counter = this.counter - num
    },
    },
  },
);
app.mount('#events');
