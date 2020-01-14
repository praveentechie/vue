<template>
  <div id="app">
    <Todo message="VueJS with Redux"/>
  </div>
</template>

<script>
import Todo from './components/Todo.vue'

export default {
  name: 'app',
  components: {
    Todo
  }
}
</script>