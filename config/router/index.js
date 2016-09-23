let RouterConfig = require('../../coreSource/createRouter');

//真实数据 与 虚拟数据 转换配置
window.real = false;

//路由配置
let config = [{
    path: '/',
    component: require('../../pages/nav'),
    default: require('../../pages/home'),
    subRouter: [{
            path: "/test",
            component: require('../../pages/test'),
            default: require('../../pages/about'),
            subRouter: [{
                    path: "/test1",
                    component: require('../../pages/home')
                },
                //更多路由配置
            ]
        },
        //更多路由配置
    ]
}]

module.exports = RouterConfig(config);