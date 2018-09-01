import Vue from 'vue'
import Router from 'vue-router'
import Comic from '@/pages/Comic'
import Episode from '@/pages/Episode'
import Top from '@/pages/Top'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Top
    },
    {
      path: '/comics/:comicId',
      component: Comic
    },
    {
      path: '/comics/:comicId/episodes/:episodeId',
      component: Episode
    }
  ]
})
