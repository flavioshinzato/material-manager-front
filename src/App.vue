<template>
  <v-app>
    <toolbar-nav v-if="needToolbar" />
    <loading />
    <v-app id="main-app">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-app>
    <snackbar />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

import ToolbarNav from './components/navs/ToolbarNav.vue';
import Loading from './components/feedbacks/Loading.vue';
import Snackbar from './components/feedbacks/Snackbar.vue';

export default {
  name: 'App',
  components: {
    ToolbarNav,
    Loading,
    Snackbar,
  },
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    ...mapGetters([
      'hasSession',
      'currentUser',
      'hasMessage',
    ]),
    needToolbar() {
      return (this.$route.meta.needToolbar || this.hasSession);
    },
  },
  watch: {
    hasSession(hasSession) {
      if (!hasSession) {
        this.$router.push('/login');
      } else {
        this.$router.push('/home');
      }
    },
  },
};
</script>
