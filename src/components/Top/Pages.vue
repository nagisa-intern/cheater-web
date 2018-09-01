<template lang="pug">
div
  Page(v-for="page in pages" :key="page.id" :page="page")
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
