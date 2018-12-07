/* eslint-disable */
import uuidv4 from 'uuid/v4';
import autoHashtagService from '../services/autohashtag.service';

const state = {
  loading: false,
  error: '',
  posts: [],
};

const actions = {
  generate({ commit }, { post, maxHashtags, hashtagPosition }) {
    const id = uuidv4();
    commit('generateRequest', { id, post });

    autoHashtagService.generate(post, maxHashtags, hashtagPosition).then(
      res => {
        commit('generateSuccess', { res, id });
      },
      error => commit('generateError', error),
    );
  },
};

const mutations = {
  generateRequest(state, { id, post }) {
    state.loading = true;
    state.posts.push({
      id,
      status: 'Processing...',
      post,
      enhanced: 'None',
    });
  },
  generateSuccess(
    state,
    {
      res: { data },
      id,
    },
  ) {
    state.loading = false;
    const { post } = data;
    state.posts = state.posts.map(
      p => (p.id === id ? { id, status: 'Enhanced', post: p.post, enhanced: post } : p),
    );
  },
  generateError(state, error) {
    state.loading = false;
    state.error = error;
  },
};

export const autoHashtag = {
  namespaced: true,
  state,
  actions,
  mutations,
};
