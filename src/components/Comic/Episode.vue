<template lang="pug">
div.episode
  router-link.link(
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
  width: calc(100% / 5 - 30px);
  border: 1px solid #333;
  position: relative;
  margin: 5px;
  &__thumb {
    width: 100%;
    &:hover {
      filter: opacity(75%);
    }
  }
  &__title {
    position: absolute;
    vertical-align: middle;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, .5);
    padding: 5px 10px;
    h2 {
      color: white;
    }
    > * {
      display: inline-block;
    }
  }
}
</style>
