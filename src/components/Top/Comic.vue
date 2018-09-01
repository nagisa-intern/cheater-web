<template lang="pug">
div
  router-link(:to="{ name: 'Comic', params: { comicId: comic.id } }")
    img(:src="getImage()")
</template>
<script>
export default {
  props: ['comic'],
  methods: {
    getImage () {
      return `https://s3-ap-northeast-1.amazonaws.com/nagisa-intern/comic/${this.comic.id}/thumb.jpeg`
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
