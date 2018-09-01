<template lang="pug">
div
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
</style>
