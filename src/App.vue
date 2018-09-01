<template lang="pug">
#app
  Header
  router-view
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
