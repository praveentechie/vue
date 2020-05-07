<template>
  <div class="user-details-form">
    <b-button @click="goBack">Go back</b-button>
    <b-form class="user-form" @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="First name:"
        label-for="input-1"
      >
        <!-- description="We'll never share your email with anyone else." -->
        <b-form-input
          id="input-1"
          :value="userInfo.firstName"
          @change="(value) => formUpdated('firstName', value)"
          required
          placeholder="Enter first name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Last name:" label-for="input-2">
        <b-form-input
          id="input-2"
          :value="userInfo.lastName"
          @change="(value) => formUpdated('lastName', value)"
          required
          placeholder="Enter last name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="User name:" label-for="input-3">
        <b-form-input
          id="input-3"
          :value="userInfo.userName"
          @change="(value) => formUpdated('userName', value)"
          required
          placeholder="Enter user name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Password:" label-for="input-4">
        <b-form-input
          id="input-4"
          :value="userInfo.password"
          @change="(value) => formUpdated('password', value)"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import UserService from '../../services/user-service';
import UserActions from "../store/user-actions";
import { get, cloneDeep } from 'lodash';
import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapState } = createNamespacedHelpers('user');

export default {
  name: 'UserDetails',
  created() {
    if (this.getUserIdParam()) {
      this.getUserInfo();
    }
  },
  data() {
    return {
    };
  },
  computed: {
    userIdParam() {
      return get(this, '$route.params.id', null)
    },
    /**
     * ### vuex: map state to key and/or perform computed options to get the value
     */
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  methods: {
    async getUserInfo() {
      let userInfo = await UserService.getUserInfo(this.userIdParam);
      console.log(userInfo);
      this.userInfo = userInfo;
    },
    getUserIdParam() {
      return this.userIdParam;
    },
    formUpdated(field, value) {
      console.log('event', value, field, this.$store);
      this.updateForm({[field]: value});
    },
    onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      console.log('user', this.userInfo);
      this.saveUserDetails(cloneDeep(this.userInfo));
    },
    onReset() {
      console.log('rst');
      this.userInfo = {}
    },
    goBack() {
      /** ### vue-router: programatic navigation */
      this.$router.go(-1);
    },
    ...mapActions({
      updateForm: UserActions.UPDATE_USER_FORM,
      saveUserDetails: UserActions.SAVE_USER
    })
  },
}
</script>