<template lang="pug">
div
  h2 人気のページ
  TopPages
  h2 コミック一覧
  Comics
</template>
<script>
import TopPages from '@/components/Top/TopPages'
import Comics from '@/components/Top/Comics'
export default {
  components: { TopPages, Comics }
}
</script>
<style lang="scss" scoped>
</style>
