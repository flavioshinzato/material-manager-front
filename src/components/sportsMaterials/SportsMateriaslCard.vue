<template>
  <v-row>
    <v-col
      v-for="(material, index) in sportsMaterials"
      :key="index"
      cols="12"
    >
      <v-card
        class="mx-auto"
        max-width="400"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title> {{ material.title }} </v-card-title>
        </v-img>

        <v-card-text class="text--primary">
          <div>{{ material.description }}}</div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>/>

<script>
export default {
  name: 'SportsMaterialsCard',
  props: {
    sportsMaterials: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>

</style>
