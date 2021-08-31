<template>
  <v-row>
    <v-col
      v-for="(material, index) in sportsMaterials"
      :key="index"
      cols="12"
    >
      <p> {{ material.title }} </p>
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
