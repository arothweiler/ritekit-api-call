import Vue from 'vue';
import Vuex from 'vuex';

import { autoHashtag } from './autohashtag.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    autoHashtag,
  },
});
