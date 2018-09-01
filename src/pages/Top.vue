<template lang="pug">
div
  h2 人気のページ
  TopPages(:pages="pages")
  h2 コミック一覧
  Comics(:comics="comics")
</template>
<script>
import TopPages from '@/components/Top/TopPages'
import Comics from '@/components/Top/Comics'
import api from '@/utils/Api'
export default {
  components: { TopPages, Comics },
  data () {
    return {
      pages: [],
      comics: []
    }
  },
  created () {
    api('GET',
      'https://api.myjson.com/bins/r9xsk',
      {}
    ).then(response => {
      this.pages = response.data
    })
    api('GET',
      'https://api.myjson.com/bins/rvdec',
      {}
    ).then(response => {
      this.comics = response.data
    })
  }
}
</script>
<style lang="scss" scoped>
</style>
