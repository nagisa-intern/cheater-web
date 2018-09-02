<template lang="pug">
div.comics
  Comic.comics__item(v-for="comic in comics" :key="comic.id" :comic="comic")
</template>
<script>
import Comic from '@/components/Top/Comic'
export default {
  components: { Comic },
  props: ['comics']
}
</script>
<style lang="scss" scoped>
.comics {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  &__item {
  }
}
</style>
