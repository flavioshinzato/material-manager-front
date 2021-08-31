<template>
  <div
    v-if="hasLoading"
    class="m-app-loader"
  >
    <div class="loader" />
  </div>
</template>
<script>

import { mapState } from 'vuex';

export default {
  name: 'Loading',
  computed: {
    ...mapState([
      'Loading',
    ]),
    hasLoading() {
      return this.Loading.loading;
    },
  },
};
</script>

<style lang="scss" src="@/assets/scss/components/feedbacks/loading.scss" scoped/>
