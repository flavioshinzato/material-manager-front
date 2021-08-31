<template>
  <v-row>
    <v-col col="10">
      <div>
        <p> teste </p>
      </div>
    </v-col>
  </v-row>
</template>/>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginForm',

  mounted() {
    this.fetchSportsMaterials();
  },
  methods: {
    ...mapActions(['fetchSportsMaterials']),
  },
};
</script>

<style>

</style>
