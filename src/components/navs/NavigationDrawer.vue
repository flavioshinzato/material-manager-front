<template>
  <div>
    <v-list class="pa-1">
      <v-list-item>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/85.jpg">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ user.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list
      class="pt-0"
      dense
    >
      <v-divider />

      <v-list-item
        v-for="item in items"
        :key="item.title"
        @click="doAction(item.action)"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NavigationDrawer',
  data() {
    return {
      items: [
        { title: 'Sair', icon: 'mdi-close', action: 'logout' },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'currentUser',
    ]),
    user() {
      if (this.currentUser) {
        return this.currentUser;
      }
      return {};
    },
  },
  methods: {
    doAction(action) {
      if (action === 'logout') {
        this.$firebase.auth().signOut().then(() => {

        }).catch(() => {

        });
        this.$store.dispatch('logout');
      }
    },
  },
};
</script>
