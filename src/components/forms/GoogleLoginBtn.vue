<template>
  <div class="google-login-btn">
    <v-btn
      block
      dark
      large
      class="m-btn"
      @click="executeGoogleLogin"
    >
      {{ $t('components.login_form.google_login_btn') }}
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'GoogleLoginBtn',
  data() {
    return {
      googleProvider: {},
    };
  },
  mounted() {
    this.googleProvider = new this.$firebase.auth.GoogleAuthProvider();
  },
  methods: {
    // https://firebase.google.com/docs/auth/web/google-signin?hl=pt
    executeGoogleLogin() {
      this.$firebase
        .auth()
        .signInWithPopup(this.googleProvider)
        .then((result) => {
          if (result.additionalUserInfo.profile) {
            this.$store.dispatch('initLoading');
            const { name, email, uid } = result.additionalUserInfo.profile;
            const params = { name, email, uid };
            this.$store.dispatch('googleLogin', params);
          }
        }).catch((error) => {
          this.$store.dispatch('addErrorMessage', error.message);
        });
    },
  },
};
</script>
