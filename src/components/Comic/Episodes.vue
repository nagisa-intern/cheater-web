<template lang="pug">
div.episodes
  Episode(v-for="episode in episodes" :key="episode.id" :episode="episode")
</template>
<script>
import Episode from '@/components/Comic/Episode'
export default {
  components: { Episode },
  props: ['episodes']
}
</script>
<style lang="scss" scoped>
.episodes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
</style>
