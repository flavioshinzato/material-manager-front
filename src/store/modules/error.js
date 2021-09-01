import i18n from '../../plugins/i18n';

const actions = {
  handleError({ dispatch }, request) {
    try {
      const { status } = request.response;
      const { errors } = request.response.data;
      switch (status) {
        case 401:
          dispatch('addErrorMessage', i18n.t('errors.session_expired'));
          dispatch('logout');
          break;
        case 404:
          dispatch('addErrorMessage', i18n.t('errors.not_found_error'));
          break;
        case 422:
          if (errors) {
            dispatch('addErrorMessage', errors);
          } else {
            dispatch('addErrorMessage', i18n.t('errors.default_error'));
          }
          break;
        default:
          dispatch('addErrorMessage', i18n.t('errors.default_error'));
          dispatch('removeLoading');
          break;
      }
      dispatch('removeLoading');
    } catch (e) {
      dispatch('addErrorMessage', i18n.t('errors.default_error'));
      dispatch('removeLoading');
    }
  },
};

export default {
  actions,
};
