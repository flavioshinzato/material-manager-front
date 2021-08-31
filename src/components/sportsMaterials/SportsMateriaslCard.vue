<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="image(sportsMaterial)"
    >
      <v-card-title> {{ sportsMaterial.title }} </v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <div>{{ sportsMaterial.description }}</div>
    </v-card-text>
  </v-card>
</template>/>

<script>
export default {
  name: 'SportsMaterialsCard',
  props: {
    sportsMaterial: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    image(material) {
      if (!material.image) {
        return 'https://cdn.vuetifyjs.com/images/cards/docks.jpg';
      }
      return material.image;
    },
  },
};
</script>

<style>

</style>
