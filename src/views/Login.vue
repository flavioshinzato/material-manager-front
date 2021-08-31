<template>
  <div>
    <div class="login-view">
      <div class="text-center">
        <div class="login-header">
          {{ $t('app_name') }}
        </div>
        <div>
          <span class="login-title">{{ $t('views.login.title') }}</span>
          <span class="login-info">{{ $t('views.login.info') }}</span>
        </div>
      </div>
      <div class="form-login-container">
        <login-form @submited="doLogin" />
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

import LoginForm from '@/components/forms/login/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
  computed: {
    ...mapGetters([
      'currentUser',
      'hasSession',
    ]),
  },
  methods: {
    doLogin(params) {
      this.$store.dispatch('initLoading');
      this.$store.dispatch('login', params);
    },
  },
};
</script>

<style lang="scss" src="@/assets/scss/components/forms/login.scss" scoped/>
