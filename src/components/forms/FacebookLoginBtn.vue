<template>
  <div class="facebook-login-btn">
    <v-btn
      block
      dark
      large
      class="m-btn"
      @click="executeFbLogin"
    >
      {{ $t('components.login_form.fb_login_btn') }}
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'FacebookLoginBtn',
  data() {
    return {
      facebookProvider: {},
    };
  },
  mounted() {
    this.facebookProvider = new this.$firebase.auth.FacebookAuthProvider();
  },
  methods: {
    // https://firebase.google.com/docs/auth/web/facebook-login?hl=pt
    executeFbLogin() {
      this.$firebase
        .auth()
        .signInWithPopup(this.facebookProvider)
        .then((result) => {
          if (result.credential.accessToken) {
            this.$store.dispatch('initLoading');
            const params = { access_token: result.credential.accessToken };
            this.$store.dispatch('fbLogin', params);
          }
        }).catch((error) => {
          this.$store.dispatch('addErrorMessage', error.message);
        });
    },
  },
};
</script>
