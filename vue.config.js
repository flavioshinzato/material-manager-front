module.exports = {
  transpileDependencies: [
    'vuetify',
  ],

  pluginOptions: {
    i18n: {
      locale: 'pt-BR',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },

  css: {
    loaderOptions: {
      scss: {
        prependData() {
          return `
            @import "~@/assets/scss/main.scss";
          `;
        },
      },
    },
  },
};
