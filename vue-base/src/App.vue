<template>
  <div>
    <navigation-bar></navigation-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import UserPage from './pages/UserPage.vue';
import HomePage from './pages/HomePage.vue';
import EventsPage from './pages/EventsPage.vue';
import VueRouter from 'vue-router'

export default {
  components: {
    EventsPage,
    HomePage,
    UserPage
  }
}
</script>