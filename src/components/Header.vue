<template lang="pug">
.header
  router-link.header__link(to="/")
    icon.icon(name="home")
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.header {
  $height: 80px;
  height: $height;
  background-color: #333;
  padding: 0 50px;
  &__link {
    display: inline-block;
    color: white;
    height: 100%;
    line-height: $height;
    vertical-align: middle;
    padding: 0 10px;
    &:hover {
      color: #bbb;
    }
    .icon {
      width: 30px;
      height: 30px;
      vertical-align: middle;
    }
  }
}
</style>
