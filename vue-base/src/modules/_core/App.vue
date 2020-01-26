<template>
  <div>
    <navigation-bar></navigation-bar>
    <transition name="slide-right">
      <section class="content">
        <router-view></router-view>
      </section>
    </transition>
  </div>
</template>

<script>
import HomePage from '../../views/HomePage.vue';
import EventsPage from '../../views/EventsPage.vue';
import './styles/app.scss';

export default {
  components: {
    EventsPage,
    HomePage,
    UserPage: () => import('../user/views/UserPage.vue')
  }
}
</script>