<template>
  <li>
    <h2>{{ name }} {{  isFavorite ? "(favorite )" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsVisible ? "hide" : "show" }} Details
    </button>
    <button @click="toggleFavorites">Favorite</button>
     <button @click="deleteFriend">Delete</button>
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
//    props  pour envoyer des infos de parent au fils
    id: {
      type: String,
      required: true,
    },
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
      default: false,
      //   validator : function (value ){
      //     return value ==="1" || value ==="0"
      //   }
    },
  },
  emits : ['toggle-favorites', "delete-friend"],
//   emits :{
// 'toggle-favorites' : function(id){
//     if (id){
//         return true ;
//     } else {
//         console.warn('id is missing');
//         return false ;
//     }
// }
//   },
  data() {
    return {
      detailsVisible: false,
      //   friend: {
      //     id: " manuel",
      //     name: "Manuel lorenez",
      //     phone: " 0612354897",
      //     email: "manuel@localhost.com",
      //   },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavorites() {
      this.$emit("toggle-favorites", this.id);
      // emit pour envoyer des infos de fils au parent
    },
    deleteFriend() {
     this.$emit("delete-friend", this.id);
    } },
};
</script>
