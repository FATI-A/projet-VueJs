<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader />
    <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <course-goal>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherProp}}</p>
      </template>
    </course-goal> -->
    <button @click="setSelectedCompenent('active-goal')">active Goals</button>
    <button @click="setSelectedCompenent('manage-goal')">manage Goals</button>
    <!-- <active-goal v-if="selectedComponent === 'active-goal'"></active-goal>
    <manage-goal v-if="selectedComponent === 'manage-goal'"></manage-goal> -->
    <!-- keep alive use for not deleting what we made at the componenet -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import UserInfo from "./components/UserInfo.vue";
// import BadgeList from "./components/BadgeList.vue";
// import CourseGoal from "./components/CourseGoals.vue";
import ActiveGoal from "./components/ActiveGoal.vue";
import ManageGoal from "./components/ManageGoals.vue";

export default {
  components: {
    TheHeader,
    // UserInfo,
    // BadgeList,
    // CourseGoal,
    ActiveGoal,
    ManageGoal,
  },
  data() {
    return {
      selectedComponent: "active-goal",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedCompenent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
