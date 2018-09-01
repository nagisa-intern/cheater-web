<template lang="pug">
div
  TopPage(v-for="page in pages" :key="page.id" :page="page")
</template>
<script>
import TopPage from '@/components/Top/TopPage'
export default {
  components: { TopPage },
  props: ['pages']
}
</script>
<style lang="scss" scoped>
</style>
