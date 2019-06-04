import Vue from 'vue'
import Router from 'vue-router'

<<<<<<< HEAD
import page1 from '@/components/page1'
import page2 from '@/components/page2'
=======
import top from '@/pages/Top'
import timeline from '@/pages/TimeLine'
import mypage from '@/pages/MyPage'
import others from '@/pages/Others'
import search from '@/pages/Search'
import config from '@/pages/Config'
import chat from '@/pages/Chat'
import friend from '@/pages/Config'
>>>>>>> 9e237ae1ece1004beae0b024e5a031765bb2be6a

Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/',
      component: page1
    },
    {
      path: '/page2',
      component: page2
=======
        path: '/',
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
>>>>>>> 9e237ae1ece1004beae0b024e5a031765bb2be6a
    }
  ]
})