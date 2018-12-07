<template>
  <div class="queue-page">
    <TopBar />
    <QueueList />
  </div>
</template>

<script>
import TopBar from '../../components/TopBar';
import QueueList from '../../components/QueueList';

export default {
  name: 'Queue',
  components: {
    TopBar,
    QueueList,
  },
};
</script>

<style scoped>
.queue-page {
  margin-top: 1rem;
}
</style>
