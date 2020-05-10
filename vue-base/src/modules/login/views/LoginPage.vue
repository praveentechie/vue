<template>
  <div class="login-form-container">
    <div class="form-wrapper">
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
    <div class="social-login">
      <b-button @click="loginWithSocialAccount('facebook')" variant="outline-primary" class="social-media-login">
        <c-icon class="fa-facebook-official"/>&nbsp;Login with facebook
      </b-button>
      <b-button @click="loginWithSocialAccount('google')" variant="outline-primary" class="social-media-login">
        <c-icon class="fa-google"/>&nbsp;Login with google
      </b-button>
      <b-button @click="loginWithSocialAccount('twitter')" variant="outline-primary" class="social-media-login">
        <c-icon class="fa-twitter"/>&nbsp;Login with twitter
      </b-button>
    </div>
  </div>
</template>

<script>
import { get }            from 'lodash';
import AuthService        from '../../services/auth.service';
import { getValueByKey }  from '../../_core/utils/cookie-utils';
import { coreActions }    from '../../_core/store/core.actions';
import { createNamespacedHelpers } from 'vuex';
import '../styles/login-form.scss';

const { mapActions } = createNamespacedHelpers('core');

export default {
  name: 'LoginPage',
  async created() {
    let provider = this.$route.query.provider,
      token = this.$route.query.token,
      userName = this.$route.query.userName;

    if (provider && token && userName) {
      let res = await AuthService.validateProviderLogin(provider, token, userName);
      await this.setUserContext({
        ...res.userContext,
        expirationTime: getValueByKey('expirationTime')
      });
      this.$router.push({name: 'home'})
    }
  },
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
    async loginWithFacebook() {
      /* window.FB.login(function(response) {
          if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          FB.api('/me', function(response) {
            console.log('Good to see you, ' + response.name + '.');
          });
          } else {
          console.log('User cancelled login or did not fully authorize.');
          }
      }); */
      window.open('http://localhost:4040/v1/auth/facebook', '_self');
    },
    loginWithSocialAccount(provider) {
      if (provider === 'twitter') {
        alert('Yet to be implemented');
      } else {
        window.open(`http://localhost:4040/v1/auth/${provider}`, '_self');
      }
    },
    ...mapActions({
      setUserContext: coreActions.UPDATE_USER_INFO,
    })
  }
}
</script>