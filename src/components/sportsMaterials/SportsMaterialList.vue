<template>
  <v-row>
    <v-col col="10">
      <div>
        <p> {{ getSportsMaterials }} </p>
      </div>
    </v-col>
  </v-row>
</template>/>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'LoginForm',

  computed: {
    ...mapGetters(['getSportsMaterials']),
  },

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
