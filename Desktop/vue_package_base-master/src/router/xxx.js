import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/helloworld1'
import echarts_ from '@/components/echart_test.vue'

import token_admin from '@/components/token_admin.vue'
import token_editor from '@/components/token_editor.vue'
import aside_Test from '@/components/CommonAside.vue'

import qiniuyun_Upload from '@/components/qiniuyun_Upload.vue'

import home from '@/views/home/home.vue'
import test from '@/views/home/component_.vue'


//无论你是什么角色你都可以访问的路由
const routes = [
    {
        path: '/test',
        name: 'test',
        component: test,
        meta:{title:"组件引入测试",role:'admin',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.smyhvae.com%2F20180617_1957.gif&refer=http%3A%2F%2Fimg.smyhvae.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659886032&t=a85ea382e03b48197461a69d35bceac2'}
    },
    {
        path: '/home',
        name: 'HelloWorld_home',
        component: home,
        meta:{title:"主2页",role:'admin',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.smyhvae.com%2F20180617_1957.gif&refer=http%3A%2F%2Fimg.smyhvae.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659886032&t=a85ea382e03b48197461a69d35bceac2'}
    },
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
        meta:{title:"侧边2栏练习",role:'admin',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.smyhvae.com%2F20180617_1957.gif&refer=http%3A%2F%2Fimg.smyhvae.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659886032&t=a85ea382e03b48197461a69d35bceac2'}
    },
    {
        path: '/hello2',
        name: 'HelloWorld2',
        component: HelloWorld2,
        meta:{title:"测试meta",role:'admin',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.smyhvae.com%2F20180617_1957.gif&refer=http%3A%2F%2Fimg.smyhvae.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659886032&t=a85ea382e03b48197461a69d35bceac2'}
    }, {
        path: '/echart',
        name: 'echart',
        component: echarts_
    },
    {
        path: '/aside_Test',
        name: 'aside_Test',
        component: aside_Test,
        meta:{role:'admin'}
    },
    {
        path: '/qiniuyun_Upload',
        name: 'qiniuyun_Upload',
        component: qiniuyun_Upload,
        meta:{role:'admin'}
    },
]
//admin， editor权限分配
const token_routes = [
    {
        path: '/token_admin',
        name: 'token_admin',
        component: token_admin,
        meta:{role:'admin'}
    },
   
    {
        path: '/token_editor',
        name: 'token_editor',
        component: token_editor,
        meta:{role:'editor'}
    }
]



export { routes,token_routes}