<template lang="pug">
.page(:class="{'-first': ranking === 1}")
  router-link(:to="{ name: 'Comic', params: { comicId: page.comic.id } }")
    div.ranking {{ ranking }}
    img(:src="getImage()")
</template>
<script>
export default {
  props: ['page', 'ranking'],
  methods: {
    getImage () {
      return `https://s3-ap-northeast-1.amazonaws.com/nagisa-intern/data/${this.page.comic.id}/${this.page.episode.episode_number}/${('0000' + this.page.page_number).slice(-4)}.jpeg`
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  position: relative;
  width: 400px;
  height: 600px;
  display: inline-block;
  overflow: hidden;
}
img {
  border: 1px solid black;
  object-fit: cover;
  width: 400px;
  height: 600px;
}
.ranking {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #333;
  color: white;
  padding: 15px 30px;
  font-size: 20px;
  z-index: 1;
}
.-first {
}
</style>
