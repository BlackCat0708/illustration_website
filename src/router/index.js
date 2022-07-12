import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'BLACKCAT'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'BLACKCAT ⧓ About'
    }
  },
  {
    path: '/original_gallery',
    name: 'OriginalGallery',
    component: () => import(/* webpackChunkName: "original_gallery" */ '../views/OriginalGallery.vue'),
    meta: {
      title: 'BLACKCAT ⧓ Original Gallery'
    }
  },
  {
    path: '/fan_art_gallery',
    name: 'FanArtGallery',
    component: () => import(/* webpackChunkName: "fan_art_gallery" */ '../views/FanArtGallery.vue'),
    meta: {
      title: 'BLACKCAT ⧓ Fan Art Gallery'
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue'),
    meta: {
      title: 'BLACKCAT ⧓ 404'
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title
})

export default router
