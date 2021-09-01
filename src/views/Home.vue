<template>
  <div class="text-center">
    <sports-material-list />
  </div>
</template>
<script>
import SportsMaterialList from '../components/sportsMaterials/SportsMaterialList.vue';

export default {
  name: 'Home',
  components: { SportsMaterialList },
};
</script>
