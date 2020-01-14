<template>
  <!-- ### vue: <template> component rules and best practices
    1. every component must have a single root element
  -->
  <div>
    <h1>User list <c-icon icon-class="fa-user"/></h1>
    <b-button variant="outline-primary" @click="getAllUsers" :disabled="isLoading">
      <span v-if="isLoading">
        <b-spinner small></b-spinner>
        <span>Loading...</span>
      </span>
      <span v-else>Get users</span>
    </b-button>
    <span v-if="getAllError">Error</span>
    <b-table responsive striped show-empty
      empty-text="There are no records to show"
      :fields="['firstName', 'lastName', {key: 'action', label: 'Action'}]"
      :items="userList"
    >
      <template v-slot:cell(action)="data">
        <i class="fa fa-pencil"/>
        <i class="fa fa-trash"/>
      </template>
    </b-table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import UserService from '../services/user-service';
import UserActions from '../store/modules/user/user-actions.js';
import {store} from '../store';
import { styledConsole } from '../utils/debug-hepler';

/** ### vue: map actions & map state
 * map actions and state related to user module
 */
const { mapActions, mapState } = createNamespacedHelpers('user');

function lifeCycleHookStyle(message, styles = '') {
  styledConsole(message, 'font-size: 1.25em; ' + styles);
}
export default {
  beforeCreate() {
    lifeCycleHookStyle('### vue: Life cycle hooks', 'font-size: 3em;')
    lifeCycleHookStyle(`1. beforeCreate()
    - Nothing gets called before me!`);
  },
  created() {
    lifeCycleHookStyle(`2. created()
    - I will be able to access reactive data and events`);
  },
  beforeMount() {
    lifeCycleHookStyle(`3. beforeMount()
    - runs right before the initial render happens and after the template or render functions have been compiled.
    - it doesn’t get called when doing server-side rendering`);
  },
  mounted() {
    lifeCycleHookStyle(`4. mounted()
    - will have full access to the reactive component, templates, and rendered DOM (via. this.$el).
    - The most frequently used pattern is modifying the DOM, often to integrate non-Vue libraries.`);
  },
  beforeUpdate() {
    lifeCycleHookStyle(`5. beforeUpdate()
    - runs after data changes on your component and the update cycle begins, right before the DOM is patched and re-rendered.`);
  },
  updated() {
    lifeCycleHookStyle(`6. updated()
    - runs after data changes on your component and the DOM re-renders`);
  },
  beforeDestroy() {
    lifeCycleHookStyle(`7. beforeDestroy()
    - cleanup events or reactive subscriptions`);
  },
  destroyed() {
    lifeCycleHookStyle(`8. destroyed()
    - practically nothing here!`);
  },
  /** ### vue: components
   * Should export the components that are used by the current component.
   * If not will throw error that component is not initialized
   * Can also register a component globally, which is used frequently so the the import size will be reduced.
   * refer to './components/initComponents' for global component declaration
   */
  components: {
    
  },
  /** ### vue: computed
   * computed props, can also use value from props or data using `this` context
   */
  computed: {
    ...mapState(['getAllError', 'userList'])
  },
  /** ### vue: data
   * values specific to the component like state in react
   * should be a function
   */
  data: () => ({
    isLoading: false
  }),
  /** ### vue: methods (Component)
   * methods specific to the components. can access props and others using `this` context
   * Don’t use arrow functions on an options property or callback
   */
  methods: {
    getAllUsers: function() {
      this.isLoading = true;
      this.getAll();
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    ...mapActions({
      getAll: UserActions.GET_ALL
    })
  },
  /** ### vue: props
   * Prop to be passed when component added as HTML
   * specify type and required option
   */
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>