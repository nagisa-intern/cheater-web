<template lang="pug">
.header
  router-link.header__link(to="/")
    icon.icon(name="home")
  div.header__user
    icon.icon(name="user")
    | なぎさ はなこ
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
  color: white;
  &__link {
    display: inline-block;
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
  &__user {
    padding-right: 20px;
    cursor: pointer;
    float: right;
    line-height: $height;
    font-size: 20px;
    .icon {
      width: 20px;
      height: 20px;
      vertical-align: -3px;
      margin-right: 5px;
    }
  }
}
</style>
