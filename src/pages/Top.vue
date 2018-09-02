<template lang="pug">
div
  h2 人気のページ
  Pages.pages(:pages="pages")
  h2 コミック一覧
  Comics(:comics="comics")
</template>
<script>
import Pages from '@/components/Top/Pages'
import Comics from '@/components/Top/Comics'
import api from '@/utils/Api'
export default {
  components: { Pages, Comics },
  data () {
    return {
      pages: [],
      comics: [],
      intervalId: 0,
      even: true
    }
  },
  created () {
    api('GET',
      process.env.API_ENDPOINT + '/ranking?number=11',
      // 'https://api.myjson.com/bins/tdt9w',
      {}
    ).then(response => {
      this.pages = response.data
    })
    api('GET',
      process.env.API_ENDPOINT + '/comics_list?number=17',
      // 'https://api.myjson.com/bins/c6dw4',
      {}
    ).then(response => {
      this.comics = response.data
    })
    this.intervalId = setInterval(() => {
      this.getRanking()
    }, 3000)
  },
  beforeDestroy () {
    clearInterval(this.intervalId)
  },
  methods: {
    getRanking () {
      // this.even = !this.even
      api('GET',
        process.env.API_ENDPOINT + '/ranking?number=11',
        // this.even ? 'https://api.myjson.com/bins/tdt9w' : 'https://api.myjson.com/bins/12dgic',
        {}
      ).then(response => {
        this.pages = response.data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.pages {
  overflow: hidden;
  margin-bottom: 100px;
}
</style>
