import Vue from 'vue';
import {
  ValidationProvider, ValidationObserver, localize, extend,
} from 'vee-validate';
import ptBr from 'vee-validate/dist/locale/pt_BR.json';
import {
  required,
  email,
  min,
  confirmed,
} from 'vee-validate/dist/rules';

// navigator.language
localize('ptBr', ptBr);

extend('required', required);
extend('email', email);
extend('min', min);
extend('confirmed', confirmed);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
