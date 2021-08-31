<template>
  <div class="text-center">
    <h1>Sports Material Manager</h1>
    <sports-material-list />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import SportsMaterialList from '../components/sportsMaterials/SportsMaterialList.vue';

export default {
  name: 'Home',
  components: { SportsMaterialList },
  computed: {
    ...mapGetters([
      'currentUser',
    ]),
  },
  mounted() {
    // if (!this.currentUser) {
    //   this.$store.dispatch('refreshUser');
    // }
  },
};
</script>
