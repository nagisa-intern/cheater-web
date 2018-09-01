<template lang="pug">
div
  Comic(v-for="comic in comics" :key="comic.id" :comic="comic")
</template>
<script>
import Comic from '@/components/Top/Comic'
export default {
  components: { Comic },
  props: ['comics']
}
</script>
<style lang="scss" scoped>
</style>
