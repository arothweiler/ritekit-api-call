<template>
<div class="queue-list">
  <MainRow>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="12">
      <h2 v-if="posts.length === 0"> There's no queued messages. </h2>
      <table class="rwd-table" v-if="posts.length > 0">
        <tr>
          <th v-for="(item, index) in table.columns" :key="index">
          {{ item }}
          </th>
        </tr>
        <tr v-for="(item, index) in posts" :key="index">
          <td :data-th="item" v-for="(row, i) in table.columns" :key="i">
            {{ renderRow(item, i) }}
          </td>
        </tr>
      </table>
    </vs-col>
  </MainRow>
</div>
</template>

<script>
import { mapState } from 'vuex';
import { MainRow } from '../shared/styledComponents';

export default {
  name: 'QueueList',
  data() {
    return {
      table: {
        columns: ['Post', 'Status', 'Enhanced Text'],
      },
    };
  },
  methods: {
    renderRow(item, index) {
      switch (index) {
        case 0:
          return item.post;
        case 1:
          return item.status;
        case 2:
          return item.enhanced;
        default:
          return '';
      }
    },
  },
  computed: {
    ...mapState('autoHashtag', ['posts']),
  },
  components: {
    MainRow,
  },
};
</script>


<style lang="scss" scoped>
.queue-list {
  margin: 1rem;
}
h2 {
  margin: 1rem;
  font-weight: 500;
  text-align: center;
}
</style>

