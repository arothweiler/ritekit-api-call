<template>
<div id="autoHashtag" class="auto-hashtag">
  <div>
  <MainRow>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="12">
        <textarea v-model="post" :placeholder="placeholder" rows="4" cols="50">
        </textarea>
     </vs-col>
  </MainRow>
  <MainRow>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="12">
        <label> Hashtags </label>
        <vs-input
          vs-color="#fefefe"
          type="number"
          v-model="maxHashtags"/>
          <label> Position </label>
          <vs-select
          v-model="hashtagPosition"
          placeholder="auto"
          >
            <vs-select-item
              :key="index"
              :vs-value="item"
              :vs-text="item"
              v-for="(item,index) in positions" />
        </vs-select>
     </vs-col>
  </MainRow>
  <MainRow>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="12">
        <vs-button
          vs-size="large"
          vs-color="#cf4fa5"
          vs-type="relief"
          @click="submit">
          Generate
        </vs-button>
     </vs-col>
  </MainRow>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { MainRow } from '../shared/styledComponents';

export default {
  name: 'AutoHashtag',
  data() {
    return {
      post: '',
      placeholder: 'Type a message...',
      maxHashtags: 2,
      positions: ['auto', 'end'],
      hashtagPosition: 'auto',
    };
  },
  computed: {
    ...mapState('autoHashtag', ['loading', 'error']),
  },
  watch: {
    error(error) {
      if (error) {
        this.$vs.notify({
          title: error.message,
          text: 'Something went bad, try again?',
          color: 'rgb(128, 43, 102)',
          icon: 'error',
          position: 'bottom-center',
        });
      }
    },
  },
  methods: {
    ...mapActions('autoHashtag', {
      generate: 'generate',
    }),
    submit() {
      const { post, maxHashtags, hashtagPosition } = this;
      if (post.trim() !== '') {
        this.generate({ post, maxHashtags, hashtagPosition }); // eslint-disable-line
        this.$vs.notify({
          title: 'Post added',
          text: 'Check the queue list',
          color: 'rgb(128, 43, 102)',
          icon: 'error',
          position: 'bottom-center',
        });
      } else {
        this.$vs.notify({
          title: 'Invalid form',
          text: 'Your message can\'t be empty',
          color: 'rgb(128, 43, 102)',
          icon: 'error',
          position: 'bottom-center',
        });
      }
    },
  },
  components: {
    MainRow,
  },
};
</script>

<style lang="scss" scoped>
textarea {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: 'Kosugi Maru', sans-serif;
  background: #cf4fa5;
  border: 2px solid #fefefe;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px;
  color: #fefefe;
  font-weight: 800;
}

.input-select {
  color: #fefefe;
}
button {
  margin: 1rem;
  font-size: 18px !important;
}
textarea::-webkit-input-placeholder {
  color: rgba(254, 254, 254, 0.9);
}

textarea:-moz-placeholder {
  color: rgba(254, 254, 254, 0.9);
}

textarea::-moz-placeholder {
  color: rgba(254, 254, 254, 0.9);
}

textarea:-ms-input-placeholder {
  color: rgba(254, 254, 254, 0.9);
}

label {
  margin: 1rem;
}
</style>
