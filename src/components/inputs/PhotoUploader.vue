<template>
  <div class="upload-container">
    <div>
      <img
        :src="avatar"
        class="profile-image"
        width="80"
        height="80"
      >
    </div>

    <v-btn
      class="upload"
      flat
      @click="onPickFile"
    >
      <div class="upload-image">
        {{ $t('components.profile_uploader.label') }}
      </div>
    </v-btn>

    <input
      ref="fileInput"
      class="d-none"
      type="file"
      accept="image/*"
      @change="onFilePicked"
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PhotoUploader',
  data() {
    return {
      avatar_thumb: null,
    };
  },
  computed: {
    ...mapGetters([
      'currentUser',
    ]),
    avatar() {
      return this.avatar_thumb || this.currentUser.avatar_thumb || require('@/assets/ic_placeholder.svg');
    },
  },

  created() {
    if (this.currentUser) {
      Object.assign(this.$data, this.currentUser);
    }
  },

  methods: {
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const { files } = event.target;
      const filename = files[0].name;
      if (filename.lastIndexOf('.') <= 0) {
        return alert("$t('errors.invalid_image')");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.avatar_thumb = fileReader.result;
        this.$emit('image', this.avatar_thumb);
      });
      fileReader.readAsDataURL(files[0]);
    },
  },
};
</script>
<style lang="scss">
  .upload-container {
    text-align: center;

    .profile-image {
      border-radius: 50%;
    }

    .upload {
      background: transparent;

      .upload-image {
        font-size: 16px;
        text-transform: capitalize;
        text-transform: initial;
      }
    }
  }
</style>
