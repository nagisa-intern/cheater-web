<template lang="pug">
div(:class="{'-first': ranking === 1, '-second': ranking === 2, '-third': ranking === 3, '-normal': ranking >= 4}")
  .page
    router-link(:to="{ name: 'Comic', params: { comicId: page.comic.id } }")
      div.ranking {{ ranking }}
      img(:src="getImage()")
</template>
<script>
export default {
  props: ['page', 'ranking'],
  methods: {
    getImage () {
      return `https://s3-ap-northeast-1.amazonaws.com/nagisa-intern/data/${this.page.comic.id}/${this.page.episode.episode}/${('0000' + this.page.page_number).slice(-4)}.jpeg`
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  position: relative;
  display: inline-block;
  overflow: hidden;
  float: left;
}
img {
  border: 1px solid black;
  object-fit: cover;
  &:hover {
    filter: opacity(75%);
  }
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
  img {
    $base: 360px;
    width: $base;
    height: calc(#{$base} * 1.5);
  }
  .ranking {
    background-color: gold;
    color: #333;
    font-weight: bold;
    font-size: 32px;
  }
}
.-second {
  img {
    $base: 320px;
    width: $base;
    height: calc(#{$base} * 1.5);
  }
  .ranking {
    background-color: silver;
    color: #333;
    font-weight: bold;
    font-size: 28px;
  }
}
.-third {
  img {
    $base: 280px;
    width: $base;
    height: calc(#{$base} * 1.5);
  }
  .ranking {
    background-color: brown;
    font-weight: bold;
    font-size: 24px;
  }
}
.-normal {
  img {
    $base: 180px;
    width: $base;
    height: calc(#{$base} * 1.5);
  }
}
</style>
