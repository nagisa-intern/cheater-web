<template lang="pug">
#app
  Header
  router-view
</template>
<script>
import Header from './components/Header'
export default {
  components: { Header }
}
</script>
<style>
html, body {
  background-color: #fefefe;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
a {
  color: inherit;
}
</style>
