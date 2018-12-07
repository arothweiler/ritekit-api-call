<template>
<div class="topbar">
  <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
    <h1>Autohash</h1>
  </vs-row>
  <vs-row class="content-box" vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
    <vs-button
      vs-size="large"
      vs-type="line"
      vs-line-origin="left"
      vs-color="#fff"
      @click="goTo('')">
      Compose
    </vs-button>
    <vs-button
      vs-size="large"
      vs-type="line"
      vs-line-origin="left"
      vs-color="#fff"
      @click="goTo('queue')">
      Queue List
    </vs-button>
  </vs-row>
</div>
</template>

<script>
export default {
  name: 'TopBar',
  methods: {
    goTo(path) {
      this.$router.push(`/${path}`);
    },
  },
};
</script>

<style scoped lang="scss">
.logo {
  width: 15rem;
  margin: 1rem;
}

.vs-button.large {
  font-size: 1.4rem !important;
  margin-left: 1rem;
  @media only screen and (max-width: 600px) {
    font-size: 0.8em !important;
    margin-left: 5px;
  }
}
</style>
