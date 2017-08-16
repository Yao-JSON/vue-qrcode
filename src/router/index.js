import Vue from 'vue'
import Router from 'vue-router'
// import Hello from 'components/Hello';
import Me from 'components/me/me.vue';
import Other from 'components/other/other.vue';
import Detail from 'components/detail/detail.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/me'
    },
    {
      path: '/me',
      component: Me
    },
    {
      path: '/other',
      component: Other
    },
    {
      path: '/detail',
      component: Detail
    }
  ]
})
