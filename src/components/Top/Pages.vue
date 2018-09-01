<template lang="pug">
div
  Page(v-for="(page, ranking) in pages" :key="page.id" :page="page" :ranking="ranking + 1")
</template>
<script>
import Page from '@/components/Top/Page'
export default {
  components: { Page },
  props: ['pages']
}
</script>
<style lang="scss" scoped>
</style>
