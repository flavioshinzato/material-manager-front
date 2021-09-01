<template>
  <div class="text-center">
    <h1>{{ $t('views.register.title') }}</h1>
    <register-form @submited="register" />
  </div>
</template>
<script>
import RegisterForm from '@/components/forms/register/RegisterForm.vue';

export default {
  name: 'Register',
  components: {
    RegisterForm,
  },
  methods: {
    register(params) {
      this.$store.dispatch('initLoading');
      this.$store.dispatch('register', params);
    },
  },
};
</script>
