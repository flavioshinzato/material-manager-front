<template>
  <v-snackbar
    timeout:5000
    :value="hasMessage"
    @input="closeSnackbar"
  >
    {{ messageText }}
    <v-btn
      color="white"
      text
      @click="closeSnackbar"
    >
      {{ $t('components.snackbar.close') }}
    </v-btn>
  </v-snackbar>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Snackbar',
  computed: {
    ...mapGetters(['messages', 'hasMessage']),
    messageText() {
      if (this.messages instanceof Array) {
        return this.messages.join(', ');
      }
      return this.messages;
    },
  },

  methods: {
    ...mapActions(['removeMessage']),
    closeSnackbar() {
      this.removeMessage();
    },
  },
};
</script>
