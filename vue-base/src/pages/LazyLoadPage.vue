<template>
  <div>
    <h1>Lazy load components</h1>
    <b-button @click="toggleComponent">Toggle component</b-button>
    <div v-if="showComponent">
      <lazy-component></lazy-component>
      <lazy-component-v2></lazy-component-v2>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      showComponent: false
    };
  },
  methods: {
    toggleComponent() {
      this.showComponent = !this.showComponent;
    }
  },
  components: {
    'lazy-component': () => import('../components/lazy-component.vue'),
    'lazy-component-v2': () => import('../components/lazy-component-v2.vue')
  }
}
</script>