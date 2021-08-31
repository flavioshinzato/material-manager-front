<template>
  <div>
    <v-app-bar
      color="primary"
      dark
    >
      <v-app-bar-nav-icon>
        <v-icon>
          {{ navIcon }}
        </v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>Sports Material Manager</v-toolbar-title>
    </v-app-bar>
  </div>
</template>
<script>

export default {
  name: 'ToolbarNav',
  computed: {
    navIcon() {
      if (this.$route.meta.icon) { return this.$route.meta.icon; }
      return 'mdi-menu';
    },
  },
};
</script>
