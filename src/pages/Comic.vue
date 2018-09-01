<template lang="pug">
div
  ComicHeader(:comic="comic")
  Episodes(:episodes="comic.episodes")
</template>
<script>
import ComicHeader from '@/components/Comic/ComicHeader'
import Episodes from '@/components/Comic/Episodes'
import api from '@/utils/Api'
export default {
  components: { ComicHeader, Episodes },
  data () {
    return {
      comic: {}
    }
  },
  created () {
    api('GET',
      'https://api.myjson.com/bins/15kcb8',
      {}
    ).then(response => {
      this.comic = response.data
    })
  }
}
</script>
<style lang="scss" scoped>
</style>
