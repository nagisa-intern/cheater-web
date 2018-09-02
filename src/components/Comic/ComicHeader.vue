<template lang="pug">
div.comicHeader
  img(v-if="comic.id" :src="getThumb()")
  div.detail
    h1 {{ comic.title }}
    h3.authors
      span.authors__item(v-for="author in comic.authors") 著者：{{ author.name }}
    p {{ comic.summary }}
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
.comicHeader {
  overflow: hidden;
  margin-bottom: 30px;
}
.authors {
  &__item {
    &:not(:last-child):after {
      content: ","
    }
  }
}
img {
  width: 640px;
  float: left;
}
.detail {
  padding: 20px;
  width: calc(100% - 640px);
  float: left;
}
</style>
