<template lang="pug">
div
  router-link(:to="{ name: 'Comic', params: { comicId: $route.params.comicId } }") コミックに戻る
  .main
    div.console.-left
      icon.icon(name="chevron-left" @click.native="pageMove(-1)")
    img.content(:src="getImage()")
    div.console.-right
      icon.icon(name="chevron-right" @click.native="pageMove(1)")
</template>
<script>
import api from '@/utils/Api'
export default {
  data () {
    return {
      episode: {},
      pageNumber: 0,
      intervalId: 0
    }
  },
  created () {
    if (!this.$route.query.page) {
      this.$router.push({query: { page: 0, episodeId: this.$route.query.episodeId }})
    }
    this.pageNumber = this.$route.query.page
    api('GET',
      process.env.API_ENDPOINT + '/episodes/' + this.$route.query.episodeId,
      // 'https://api.myjson.com/bins/f5jx0',
      {}
    ).then(response => {
      this.episode = response.data
    })
    this.intervalId = setInterval(() => {
      this.postPoint()
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.intervalId)
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
      this.$router.push({query: { page: newPageNumber, episodeId: this.$route.query.episodeId }})
      this.pageNumber = newPageNumber
    },
    postPoint () {
      api('POST',
        process.env.API_ENDPOINT + '/pages/' + this.episode.pages[this.pageNumber].id,
        { time: 10000 }
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
.main {
  margin-top: 30px;
  > * {
    float: left;
    height: 600px;
  }
  .icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-top: 250px;
  }
  .content {
    border: 1px solid #333;
  }
}
</style>
