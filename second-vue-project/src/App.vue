<template>
  <section>
    <h2>My friends</h2>
    <ul>
      <friend-contact
      v-for="friend in friends"
      :key="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="true"
      ></friend-contact>
          <!-- ici on peut pas utiliser PhoneNumber il faut mettre - pour le format html -->
      <!-- <friend-contact
        name="jolie jones"
        phone-number="0612354895"
        email-address="julie@localhost.com"
         is-favorite= "0"
      ></friend-contact>
      <friend-contact
        name="lola jones"
        phone-number="0612354895"
        email-address="lola@localhost.com"
         is-favorite= "0"
      ></friend-contact> -->
    </ul>
  </section>
</template>
<script>
import FriendContact from "./components/FriendContact.vue";
export default {
  components: { FriendContact },
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
          phone: "0612354895",
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
};
</script>
