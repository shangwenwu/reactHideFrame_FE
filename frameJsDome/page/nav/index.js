defineComponent(function(html) {
    return {
        template: html,
        subArea: 'mainCon',
        loadAfter: function(Root) {

            // YS.js jQuery所有方法的操作，要在loadAfter里执行

            // //给DOM节点绑定事件

            //插入组件
            require(['./page/subArea1/index', './components/test/index'], function(a, b) {
                Root.append('column', a);
                Root.append('sub', b);

                console.log($('#column').html());

            })



        },
        loadBefore: function(Root, callback) { //必须第一时间返回html模版
            var template = Handlebars.compile(html);
            var data = {
                name: '我是变量'
            };
            let result = template(data);

            //默认渲染的模板数据
            return result;
        }
    }
})