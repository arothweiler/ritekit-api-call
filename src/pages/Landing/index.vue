<template>
  <div class="landing-page">
    <TopBar />
    <AutoHashtag />
  </div>
</template>

<script>
import TopBar from '../../components/TopBar';
import AutoHashtag from '../../components/AutoHashtag';

export default {
  name: 'Landing',
  data() {
    return {
      titleMsg: 'Autohastag',
    };
  },
  components: {
    TopBar,
    AutoHashtag,
  },
};
</script>

<style scoped>
.landing-page {
  margin-top: 1em;
}
</style>
