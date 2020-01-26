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
    // ### webpack: webpackChunkName - name for the chunk we would like to create
    'lazy-component': () => import(/* webpackChunkName: "comp1" */'../modules/shared/components/lazy-component.vue'),
    'lazy-component-v2': () => import(/* webpackChunkName: "comp2" */'../modules/shared/components/lazy-component-v2.vue')
  }
}
</script>