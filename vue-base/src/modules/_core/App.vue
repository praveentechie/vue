<template>
  <div>
    <navigation-bar></navigation-bar>
    <section class="content">
      <transition name="component-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
  </div>
</template>

<script>
import EventsPage from '../../views/EventsPage.vue';
import './styles/core.scss';

export default {
  components: {
    EventsPage
  }
}
</script>

<style scoped>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .2s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>