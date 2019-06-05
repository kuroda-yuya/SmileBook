import Vue from 'vue'
import Router from 'vue-router'


import top from '@/pages/Top'
import timeline from '@/pages/TimeLine'
import mypage from '@/pages/MyPage'
import others from '@/pages/Others'
import search from '@/pages/Search'
import config from '@/pages/Config'
import chat from '@/pages/Chat'
import friend from '@/pages/Config'

Vue.use(Router)

export default new Router({
  routes: [
    {

        path: '/top',
        component: top
    },
    {
        path: '/timeline',
        component: timeline
    },
    {
        path: '/mypage',
        component: mypage
    },
    {
        path: '/others',
        component: others
    },
    {
        path: '/search',
        component: search
    },
    {
        path: '/config',
        component: config
    },
    {
        path: '/chat',
        component: chat
    },
    {
        path: '/friend',
        component: friend
    }
  ]
})