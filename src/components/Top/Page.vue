<template lang="pug">
div
  router-link(:to="{ name: 'Comic', params: { comicId: page.comic.id } }")
    img(:src="getImage()")
</template>
<script>
export default {
  props: ['page'],
  methods: {
    getImage () {
      return `https://s3-ap-northeast-1.amazonaws.com/nagisa-intern/data/${this.page.comic.id}/${this.page.episode.episode_number}/${('0000' + this.page.page_number).slice(-4)}.jpeg`
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
