import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/route'
import MuseUI from 'muse-ui'
import theme from 'muse-ui/lib/theme'
import ElementUI from 'element-ui';
import store from './store'

import 'muse-ui/dist/muse-ui.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'element-ui/lib/theme-chalk/index.css';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(MuseUI)
Vue.use(ElementUI);

theme.add('teal', {
  primary: '#383b4e !important',
  secondary: '#f1f1f1 !important',
  success: '#4caf50',
  warning: '#ffeb3b',
  info: '#fff',
  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    alternate: '#2a2b3d',
    disabled: 'rgba(255, 255, 255, 0.3)',
    hint: '#dc4a0d' // 提示文字颜色
  },
  background: {
    paper: '#424242',
    chip: '#383b4e',
    default: '#2a2b3d'
  }
}, 'dark');
theme.addCreateTheme(theme => {
  return `
    .mu-hello-word {
      color: "${theme.text.orange}"
    }
  `;
});
theme.use('teal')

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  let isLogin = window.localStorage.isLogin;
  if (to.matched.some(m => m.meta.auth)) {    // 需要登录
    if(window.localStorage.isLogin){
      if(to.path === '/login'){
        next('/user_table')
      }else{
        next()
      }
    } else if (to.path !== '/login') {
      if (isLogin === 'null' || isLogin === '' || isLogin === undefined){
          next({path: '/login'})
      }
    } else {
      next()
    }
  } else {   // 不需要登录
    next()
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
