<template>
  <li>
    <h2>{{ name }} {{friendsIsFavorite  === true ? '(favorite )' : ''}}</h2>
    <button @click="toggleDetails">
      {{ detailsVisible ? "hide" : "show" }} Details
    </button>
     <button @click="toggleFavorites">
       Favorite
    </button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  // props:[
  //     'name',
  //     'phoneNumber',
  //     'emailAddress',
//   'isFavorite',
  // ],
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default : false,
    //   validator : function (value ){
    //     return value ==="1" || value ==="0"
    //   }
    },
  },
  data() {
    return {
      detailsVisible: false,
      //   friend: {
      //     id: " manuel",
      //     name: "Manuel lorenez",
      //     phone: " 0612354897",
      //     email: "manuel@localhost.com",
      //   },
      friendsIsFavorite : this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
      toggleFavorites() {
    if(this.friendsIsFavorite === true)
  { 
    this.friendsIsFavorite = false
  } else {
    this.friendsIsFavorite = true
  }
  }
  },

};
</script>
