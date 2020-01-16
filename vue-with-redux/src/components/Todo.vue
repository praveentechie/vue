<template>
  <div class="container">
    <!-- <a style="float: right" href="#/home">About</a> -->
    <div class="row">
      <div class="col-md-6">
        <h1>Todos</h1>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Add Todo" v-model="todo" v-on:keyup="update()">
          <span class="input-group-btn">
            <button class="btn btn-primary" type="button" v-on:click="addItem">Save</button>
          </span>
          {{todos}}
        </div>
        <hr>
      </div>
    </div> 
  </div>
</template>

<script>
import { mapState, mapActions } from "redux-vuex";

export default {
  name: 'Todo',
  props: {
    message: String
  },
  data: function() {
    return {
      ...mapState({
        todo: '',
        todos: 'todos'
      });
    }
  },
  methods: {
    ...mapActions("foo", "bar"),
    update: function update() {
      console.log('this', this.todo);
    }
  }
}
</script>
