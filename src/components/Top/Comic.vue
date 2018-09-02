<template lang="pug">
div.comic
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
.comic {
  width: calc(100% / 5 - 30px);
  margin: 5px;
  &:hover {
    filter: opacity(75%);
  }
  img {
    width: 100%;
  }
}
</style>
