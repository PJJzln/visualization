import App from '../App'

const home = r => require.ensure([], () => r(require('../pages/home')), 'home')
const chart_table = r => require.ensure([], () => r(require('../pages/charts/echartsTable')), 'chart_table')
const user_table = r => require.ensure([], () => r(require('../pages/user/userTable')), 'user_table')
const location_map = r => require.ensure([], () => r(require('../pages/location/location')), 'location_map')
const login = r => require.ensure([], () => r(require('../pages/login/login')), 'login')


export default[
    {
       path:'/',
       component:App,
       children:[
            {
                path: '',
                redirect: '/login'
            },
            {
                path: '/home',
                component: home,
                meta:{auth:true},
                children:[
                    {
                        path: '/chart_table',
                        component: chart_table,
                        meta:{auth:true},
                    },
                    {
                        path: '/user_table',
                        component: user_table,
                        meta:{auth:true},
                    },
                    {
                        path: '/location_map',
                        component: location_map,
                        meta:{auth:true},
                    },
                ]
            },
            {
                path: '/login',
                component: login,
                meta:{auth:true}
            },
            
       ]
    },
    
]