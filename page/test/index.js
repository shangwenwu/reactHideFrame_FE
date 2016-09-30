defineComponent(function(html) {
    return {
        template: html,
        loadAfter: function(Root) {

            // YS.js jQuery所有方法的操作，要在loadAfter里执行

            // //给DOM节点绑定事件

            //插入组件
            require(['./page/subArea1/index', './components/test/index'], function(a, b) {
                Root.append('column', a);
                Root.append('sub', b);
            })



        }
    }
})