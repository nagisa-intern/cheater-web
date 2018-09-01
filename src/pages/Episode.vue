<template lang="pug">
div
  router-link(:to="{ name: 'Comic', params: { comicId: $route.params.comicId } }") コミックに戻る
  div.page__console
    div.console.-left
      icon.icon(name="chevron-left" @click.native="pageMove(-1)")
    div.console.-right
      icon.icon(name="chevron-right" @click.native="pageMove(1)")
  img(:src="getImage()")
</template>
<script>
export default {
  data () {
    return {
      pageNumber: 0,
      pageMax: 4
    }
  },
  created () {
    if (!this.$route.query.page) {
      this.$router.push({query: { page: 0 }})
    }
    this.pageNumber = this.$route.query.page
  },
  methods: {
    getImage () {
      return `https://s3-ap-northeast-1.amazonaws.com/nagisa-intern/data/${this.$route.params.comicId}/${this.$route.params.episodeNumber}/${('0000' + this.pageNumber).slice(-4)}.jpeg`
    },
    pageMove (move) {
      const newPageNumber = parseInt(this.pageNumber) + parseInt(move)
      if (newPageNumber < 0) {
        return
      }
      if (this.pageMax < newPageNumber) {
        return
      }
      this.$router.push({query: { page: newPageNumber }})
      this.pageNumber = newPageNumber
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  &__console {
    clear: both;
    overflow: hidden;
    .console {
      float: left;
      .icon {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }
  }
}
</style>
