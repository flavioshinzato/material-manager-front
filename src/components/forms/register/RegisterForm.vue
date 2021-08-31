<template>
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
        name="nome"
        rules="required"
      >
        <v-text-field
          v-model="name"
          :label="$t('components.labels.name')"
          solo
          :error-messages="errors"
        />
      </ValidationProvider>

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

      <ValidationObserver>
        <ValidationProvider
          v-slot="{ errors }"
          rules="confirmed:confirmation|min:6"
        >
          <v-text-field
            ref="password"
            v-model="password"
            :label="$t('components.labels.password')"
            type="password"
            solo
            :error-messages="errors"
          />
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          vid="confirmation"
        >
          <v-text-field
            v-model="confirmPassword"
            :label="$t('components.labels.confirm_password')"
            type="password"
            solo
            :error-messages="errors"
          />
        </ValidationProvider>
      </ValidationObserver>
      <div class="text-xs-center">
        <v-btn
          block
          dark
          large
          class="m-btn"
          @click="doRegister"
        >
          {{ $t('components.register_form.register_btn') }}
        </v-btn>
      </div>
    </v-form>
  </v-flex>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    doRegister() {
      const userData = {
        name: this.name,
        email: this.email,
        password: this.password,
        confirm_password: this.confirmPassword,
      };
      this.$emit('submited', userData);
    },
  },
};
</script>
