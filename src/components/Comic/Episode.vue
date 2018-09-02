<template lang="pug">
div
  router-link(
    :to="{name: 'Episode', params: {comidId: comicId, episodeNumber: episode.episode}}")
    img.episode__thumb(:src="getImage()")
    .episode__title
      h2 {{ episode.title }}
</template>
<script>
export default {
  props: ['episode'],
  data () {
    return {
      comidId: 0
    }
  },
  created () {
    this.comicId = this.$route.params.comicId
  },
  methods: {
    getImage () {
      return `https://s3-ap-northeast-1.amazonaws.com/nagisa-intern/data/${this.comicId}/${this.episode.episode}/0000.jpeg`
    }
  }
}
</script>
<style lang="scss" scoped>
.episode {
  &__thumb {
    width: 200px;
  }
  &__title {
    vertical-align: middle;
    > * {
      display: inline-block;
    }
  }
}
</style>
