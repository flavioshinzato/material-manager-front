<template>
  <div class="form-login">
    <v-flex
      sm12
      lg4
      offset-lg4
    >
      <v-form
        @keyup.native.enter="executeLogin"
      >
        <ValidationProvider
          v-slot="{errors}"
          name="email"
          rules="required|email"
        >
          <v-text-field
            v-model="email"
            :label="$t('components.labels.email')"
            type="email"
            solo
            :error-messages="errors"
          />
        </ValidationProvider>

        <ValidationProvider
          v-slot="{errors}"
          name="senha"
          rules="required|min:6"
        >
          <v-text-field
            v-model="password"
            :label="$t('components.labels.password')"
            type="password"
            solo
            :error-messages="errors"
          />
        </ValidationProvider>

        <!--Campo de senha com a opção   -->
        <!-- <ValidationProvider
          v-slot="{errors}"
          name="senha"
          rules="required|min:6"
        >
          <span class="input-label">
            {{ $t('components.labels.password') }}
          </span>
          <v-text-field
            v-model="password"
            :type="showPasswordCondition"
            solo
            flat
            outlined
            :error-messages="errors"
            :append-icon="showPasswordIcon"
            @click:append="changePassword"
          />
        </ValidationProvider> -->

        <div class="text-xs-center">
          <v-btn
            block
            dark
            large
            class="m-btn"
            @click="executeLogin"
          >
            {{ $t('components.login_form.login_btn') }}
          </v-btn>
          <router-link to="/register">
            {{ $t('components.login_form.do_not_have_account') }}
          </router-link>
        </div>
      </v-form>
    </v-flex>
  </div>
</template>
<script>

export default {
  name: 'LoginForm',
  components: {
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    executeLogin() {
      const userData = { email: this.email, password: this.password };
      this.$emit('submited', userData);
    },

    // Method to change de show/no show password
    // changePassword() {
    //   this.showPassword = !this.showPassword;
    // },
  },
};
</script>

<style lang="scss" scoped>
.login-btn {
  margin: 120px 0 30px;
}
a {
  font-size: 16px;
  width: 100%;
  color: black;
}
.m-btn {
  display: block;
}
</style>
