<template lang="pug">
div
  img(v-if="comic.id" :src="getThumb()")
  h1 タイトル：{{ comic.title }}
  h3.authors
    span.authors__item(v-for="author in comic.authors") 著者：{{ author.name }}
  p 説明文：{{ comic.summary }}
</template>
<script>
export default {
  props: ['comic'],
  methods: {
    getThumb () {
      return `https://s3-ap-northeast-1.amazonaws.com/nagisa-intern/comic/${this.comic.id}/rec_thumb.jpeg`
    }
  }
}
</script>
<style lang="scss" scoped>
.authors {
  &__item {
    &:not(:last-child):after {
      content: ","
    }
  }
}
</style>
