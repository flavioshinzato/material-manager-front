<template>
  <div>
    <v-app-bar
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="setAction">
        <v-icon>
          {{ navIcon }}
        </v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>Sports Material Manager</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <navigation-drawer v-model="drawer" />
    </v-navigation-drawer>
  </div>
</template>
<script>
import NativeBridge from '@/common/nativebridge';
import NavigationDrawer from './NavigationDrawer.vue';

export default {
  name: 'ToolbarNav',
  components: {
    NavigationDrawer,
  },
  data() {
    return { drawer: false };
  },
  computed: {
    navIcon() {
      if (this.$route.meta.icon) { return this.$route.meta.icon; }
      return 'mdi-menu';
    },
  },
  methods: {
    setAction() {
      if (this.navIcon === 'mdi-arrow-left') {
        if (this.$route.meta.backToApp) {
          NativeBridge.directCall('open-app', () => {});
        } else {
          window.history.go(-1);
        }
      } else {
        this.drawer = !this.drawer;
      }
    },
  },
};
</script>
