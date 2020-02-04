<template>
  <div>
    <button @click="goBack">Go back</button>
    {{(userInfo || {}).firstName}}
  </div>
</template>

<script>
import UserService from '../../services/user-service';

export default {
  name: 'UserDetails',
  created() {
    this.getUserInfo();
  },
  data() {
    return {
      userInfo: null
    };
  },
  methods: {
    async getUserInfo() {
      let userInfo = await UserService.getUserInfo(this.$route.params.id);
      console.log(userInfo);
      this.userInfo = userInfo;
    },
    goBack() {
      /** ### vue-router: programatic navigation */
      this.$router.go(-1);
    }
  },
}
</script>