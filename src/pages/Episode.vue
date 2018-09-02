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
import api from '@/utils/Api'
export default {
  data () {
    return {
      episode: {},
      pageNumber: 0
    }
  },
  created () {
    if (!this.$route.query.page) {
      this.$router.push({query: { page: 0 }})
    }
    this.pageNumber = this.$route.query.page
    api('GET',
      process.env.API_ENDPOINT + '/episodes/' + this.$route.params.episodeNumber,
      // 'https://api.myjson.com/bins/f5jx0',
      {}
    ).then(response => {
      this.episode = response.data
    })
    setInterval(() => {
      console.log(123)
      // this.postPoint()
    }, 5000)
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
      if (this.episode.pages.length < newPageNumber) {
        return
      }
      this.$router.push({query: { page: newPageNumber }})
      this.pageNumber = newPageNumber
    },
    postPoint () {
      api('POST',
        process.env.API_ENDPOINT + '/pages/' + this.pageNumber,
        { time: 1000 }
      ).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
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
