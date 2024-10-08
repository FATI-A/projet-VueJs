import { createApp } from 'vue';

import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    // { path: '/teams', component: TeamsList, alias: '/' },
    {
      name: 'teams',
      path: '/teams',
    //   meta: {needsAuth : true},
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        { name: 'teams-members', path: ':teamId', component: TeamMembers },
      ], // /teams/t1
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log('to, from', to, from);
        next();
      },
    },

    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  //scrollBehavior(to, from, savedPosition ){ // for going to the top when we click on view membres
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  console.log('beforeEach');
  console.log('to, from', to, from);
  next();
});

router.afterEach((to, from) => {
// sending analytics data 
 console.log('afterEach');
 console.log('to, from', to, from);
});


const app = createApp(App);

app.use(router);

app.mount('#app');
