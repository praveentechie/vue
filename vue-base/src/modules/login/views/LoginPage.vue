<template>
  <div class="login-form-container">
    <h2>Login</h2>
    <b-form class="user-form" @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="User name:"
        label-for="input-1"
      >
        <!-- description="We'll never share your email with anyone else." -->
        <b-form-input
          id="input-1"
          v-model="loginForm.userName"
          required
          placeholder="Enter user name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="loginForm.password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <div class="float-right">
        <b-button type="reset" variant="danger">Reset</b-button>
        <b-button type="submit" variant="primary">Login</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import AuthService        from '../../services/auth.service';
import { getValueByKey }  from '../../_core/utils/cookie-utils';
import { coreActions }    from '../../_core/store/core.actions';
import { createNamespacedHelpers } from 'vuex';
import '../styles/login-form.scss';

const { mapActions } = createNamespacedHelpers('core');

export default {
  name: 'LoginPage',
  data: () => ({
    loginForm: {
      userName: null,
      password: null
    }
  }),
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      try {
        let res = await AuthService.loginUser(this.loginForm);
        await this.setUserContext({
          ...res.userContext,
          expirationTime: getValueByKey('expirationTime')
        });
        this.$router.push({name: 'home'})
      } catch(error) {
        console.log('err', error);
      }
    },
    onReset() {
      this.loginForm = {};
    },
    ...mapActions({
      setUserContext: coreActions.UPDATE_USER_INFO
    })
  }
}
</script>