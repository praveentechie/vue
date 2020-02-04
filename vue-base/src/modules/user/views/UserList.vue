<template>
  <!-- ### vue: <template> component rules and best practices
    1. every component must have a single root element
  -->
  <div class="user-list">
    <h1>User list <c-icon class="fa-user"/></h1>
    <b-button variant="outline-primary" @click="getAllUsers" :disabled="fetchingUsers">
      <span v-if="fetchingUsers">
        <b-spinner small></b-spinner>
        <span>Loading...</span>
      </span>
      <span v-else>Get users</span>
    </b-button>
    <span v-if="getUsersError">Error</span>
    <b-button class="float-right" variant="outline-primary" @click="toggleLazyLoader">Toggle lazy loader</b-button>
    <lazy-component v-if="isLoading"></lazy-component>
    <b-table responsive striped show-empty
      empty-text="There are no records to show"
      :fields="['firstName', 'lastName', {key: 'fullNameMethod', label: 'Full name'}, {key: 'fullName', label: 'Full name computed'}, {key: 'action', label: 'Action'}]"
      :items="userList"
    >
      <template v-slot:cell(fullNameMethod)="data">
        {{getFullName(data)}}
      </template>
      <template v-slot:cell(fullName)="data">
        {{fullName(data)}}
      </template>
      <template v-slot:cell(action)="data">
        <router-link :to="`/users/${data.item._id}`"><c-icon class="fa-info-circle" title="User info"></c-icon></router-link>
        <!-- ### vue: passing primitives. Even though `false` is static, we need v-bind to tell Vue that this is a JavaScript expression rather than a string. -->
        <c-icon class="fa-pencil" @click="editUser(data)" :icon-disabled="true"></c-icon>
      </template>
    </b-table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import UserService from '../../services/user-service';
import UserActions from '../store/user-actions';
import { styledConsole } from '../../shared/helpers/debug-hepler';

/** ### vue: map actions & map state
 * map actions and state related to user module
 */
const { mapActions, mapState } = createNamespacedHelpers('user');

function lifeCycleHookStyle(message, styles = '') {
  styledConsole(message, 'font-size: 1.25em; ' + styles);
}

export default {
  name: 'UserList',
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
   * refer to 'initComponents.js' for global component declaration
   */
  components: {
    'lazy-component': () => import(/* webpackChunkName: "comp1" */'../../shared/components/lazy-component.vue')
  },
  /** ### vue: computed
   * computed props, can also use value from props or data using `this` context
   */
  computed: {
    /** ### vue: computed with parameters
     * computed will be called only when the values changes and the result is cached
     * But if we use method for the same it will get called every time e.g: getFullName() method vs fullName() computed 
     */
    fullName: function() {
      console.log('updating computed');
      return user => `${user.item.firstName} ${user.item.lastName}`;
    },
    ...mapState(['getUsersError', 'userList', 'fetchingUsers'])
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
    editUser: function(data) {
      console.log('data ', data.item._id);
    },
    getFullName(user) {
      console.log('updating by method');
      return `${user.item.firstName} ${user.item.lastName}`;
    },
    toggleLazyLoader: function() {
      this.isLoading = !this.isLoading;
    },
    ...mapActions({
      getAllUsers: UserActions.GET_ALL
    })
  },
  /** ### vue: watch
   * called when the mentioned `data` key changes
   */
  watch: {
    isLoading(newIsLoading, oldIsLoading) {
      console.log('isLoading being watched');
    }
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