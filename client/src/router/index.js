import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Signinsignup from '@/components/Signinsignup'
import CreateArticle from '@/components/CreateArticle'
import ArticleDetail from '@/components/ArticleDetail'
import SearchResult from '@/components/SearchResult'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/registration',
      component: Signinsignup
    },
    {
      path: '/create',
      component: CreateArticle
    },
    {
      path: '/article',
      component: ArticleDetail
    },
    {
      path: '/searchresult',
      component: SearchResult
    }
  ]
})
