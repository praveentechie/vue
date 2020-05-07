<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/#/">Vue app</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav v-if="userContext.userName">
        <b-navbar-nav>
          <b-nav-item href="/#/users">Users</b-nav-item>
          <b-nav-item href="/#/events">Events</b-nav-item>
          <b-nav-item href="/#/not-found">Not found</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <span v-if="timerValue > -1">Session will timeout in {{timerValue}} seconds</span>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <b>{{userContext.userName || 'Guest'}}</b>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="logoutUser">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import AuthService        from '../../services/auth.service';
import { getValueByKey }  from '../utils/cookie-utils';
import { coreActions }    from '../store/core.actions';
import EventEmitter       from '../utils/event-emitter';

const { mapActions, mapState } = createNamespacedHelpers('core');
const NavigationBar = {
  created() {
    EventEmitter.on('runTimer', (timerValue) => {
      console.log('running timer', this);
      this.toggleTimer(timerValue);
    });
    EventEmitter.on('updateExpiration', () => {
      this.updateExpirationTime(getValueByKey('expirationTime'));
    });
  },
  data: () => ({
    timerValue: -1
  }),
  computed: {
    ...mapState(['userContext']),
  },
  methods: {
    toggleTimer(timerValue) {
      console.log('togggin');
      this.timerValue = timerValue;
    },
    async logoutUser() {
      await AuthService.logoutUser();
      await this.resetUserContext({});
      this.$router.push({ name: 'login' });
    },
    ...mapActions({
      resetUserContext: coreActions.UPDATE_USER_INFO,
      updateExpirationTime: coreActions.UPDATE_EXPIRATION_TIME
    })
  }
};

export default NavigationBar;
</script>