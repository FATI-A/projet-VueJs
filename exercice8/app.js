const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: " manuel",
          name: "Manuel lorenez",
          phone: " 0612354897",
          email: "manuel@localhost.com",
        },
        {
          id: "julie ",
          name: "jolie jones",
          phone: " 0612354895",
          email: "julie@localhost.com",
        },
        {
          id: "lola ",
          name: "lola jones",
          phone: " 0612354895",
          email: "lola@localhost.com",
        },
      ],
    };
  },
});
app.component("friend-contact", {
  template: ` 
       <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">{{detailsVisible ? 'hide' : 'show'}} Details</button>
          <ul v-if="detailsVisible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
    `,
  data() {
    return {
      detailsVisible: false,
      friend: 
        {
          id: " manuel",
          name: "Manuel lorenez",
          phone: " 0612354897",
          email: "manuel@localhost.com",
        },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
});
app.mount("#app");
