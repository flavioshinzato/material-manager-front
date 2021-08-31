<template>
  <v-row>
    <v-col
      cols="12"
    >
      <v-text-field
        v-model="search"
        append-icon="mdi-search"
        label="Search material"
      />
      <v-btn
        depressed
        @click="filterSportsMaterials"
      >
        Search
      </v-btn>
      <v-btn
        depressed
        @click="orderNames()"
      >
        Order names
      </v-btn>
    </v-col>
    <v-col
      v-for="(material, index) in getSportsMaterials"
      :key="index"
      cols="12"
    >
      <sports-materiasl-card
        :sports-material="material"
      />
    </v-col>
  </v-row>
</template>/>

<script>
import { mapGetters, mapActions } from 'vuex';
import SportsMateriaslCard from './SportsMateriaslCard.vue';

export default {
  name: 'LoginForm',
  components: { SportsMateriaslCard },
  data() {
    return {
      search: '',
      order: true,
    };
  },

  computed: {
    ...mapGetters(['getSportsMaterials']),
  },

  mounted() {
    this.fetchSportsMaterials();
  },

  methods: {
    ...mapActions(['fetchSportsMaterials']),

    filterSportsMaterials() {
      const paramsObj = {
        search: this.search,
      };
      this.fetchSportsMaterials(paramsObj);
    },

    orderNames() {
      this.order = !this.order;
      const paramsObj = {
        order: this.order,
      };
      this.fetchSportsMaterials(paramsObj);
    },
  },
};
</script>

<style>

</style>
