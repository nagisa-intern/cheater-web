<template lang="pug">
#app
  Header
  router-view.routerView
</template>
<script>
import Header from './components/Header'
import api from '@/utils/Api'
export default {
  components: { Header },
  created () {
    api('GET',
      'https://cheater-api.herokuapp.com/',
      {}
    ).then(response => {
      console.log(response.data.message)
    })
  }
}
</script>
<style lang="scss">
html, body {
  background-color: #fefefe;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'M PLUS 1p', sans-serif;
}
a {
  color: inherit;
}
.routerView {
  padding: 20px 50px 100px;
  * {
    color: #333;
  }
}
</style>
