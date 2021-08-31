<template>
  <div class="apple-login-btn">
    <v-btn
      block
      dark
      large
      class="m-btn"
      @click="executeAppleLogin"
    >
      {{ $t('components.login_form.apple_login_btn') }}
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'AppleLoginBtn',
  data() {
    return {
      appleProvider: {},
    };
  },
  mounted() {
    this.appleProvider = new this.$firebase.auth.OAuthProvider('apple.com');
  },
  methods: {
    // Pro login com a apple funcionar é necessario fazer um passo
    // de setup antes onde voce fazer umas configs na conta da apple
    // do aplicativo
    // https://firebase.google.com/docs/auth/web/apple?hl=pt
    executeAppleLogin() {
      this.$firebase
        .auth()
        .signInWithPopup(this.appleProvider)
        .then((result) => {
          if (result.credential.accessToken) {
            this.$store.dispatch('initLoading');
            const { email, displayName, uid } = result.user.providerData[0];
            const { accessToken, idToken } = result.credential;
            const params = {
              email,
              name: displayName,
              token: accessToken,
              apple_token: idToken,
              user_id: uid,
            };
            this.$store.dispatch('appleLogin', params);
          }
        }).catch((error) => {
          this.$store.dispatch('addErrorMessage', error.message);
        });
    },
  },
};
</script>
