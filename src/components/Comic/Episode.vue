<template lang="pug">
div
  img.episode__thumb(:src="getImage()")
</template>
<script>
export default {
  props: ['episode'],
  methods: {
    getImage () {
      return `https://s3-ap-northeast-1.amazonaws.com/nagisa-intern/data/${this.$route.params.comicId}/${this.episode.episode_number}/0000.jpeg`
    }
  }
}
</script>
<style lang="scss" scoped>
.episode {
  &__thumb {
    width: 200px;
  }
}
</style>
