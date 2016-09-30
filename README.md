# reactHideFrame_FE

### 一、前端分离：react代码封装隐藏，组件按自定格式重新定义，引入jQuery.js、YS.js。
   * 基于node,npm运行。
   * 最大的改变是隐藏react代码，让学习难度降低。
#### 组件定义：

   ```javascript
   require('./style.css')
   let tpl = require('./template.html');
   var TplComp = {
        template: tpl,
        subArea: 'mainCon',
        loadAfter: function(Root) {
            //参考二，后端分离方案中的loadAfter
        },
        loadBefore: function(Root, callback) {
            //参考二，后端分离方案中的loadBefore
        }
        //其它自定义方法
    }
    module.exports = createComponent(TplComp)
    ```
   
   
   
### 二、后端分离方案：frameJsView文件代替项目中View文件夹。引入了handlebarsjs\requireJs\jqueryJs\YS.js。
#### 使用步骤:
   1. 把frameJsView代替工程中的View文件夹。
   2. 在index.html中配置frameInit初始框架的方法，主要包括引入API接口、引入模拟数据及配置路由信息。
   3. 在page及components目录下建立对应的页面布局组件及内容组件的文件夹
   
#### 组件定义
   * 每个组件文件夹必须包含：js\html\css三个文件
   * js中生成组件的定义：
   
      ````javascript
      defineComponent(function(html) {
           return {
              template: html,
              subArea: 'mainCon',
              loadAfter: function(Root) {

                  // YS.js jQuery所有方法的操作，要在loadAfter里执行

                  //给DOM节点绑定事件

                  //插入组件
                  require(['./page/subArea1/index', './components/test/index'], function(a, b) {
                      Root.append('column', a); //参数：domID与组件内容
                      Root.append('sub', b); //参数：domID与组件内容
                  })

              },
              loadBefore: function(Root, callback) { //必须第一时间返回html模版
                  //提取数据例子
                  Root.Ajax({
                      url: 'getinfo',
                      method: 'post',
                      body: {},
                      fail: (err) => {
                          console.log(err);
                      },
                      success: (data) => {
                          console.log(data);
                      }
                  })
                  //提取数据渲染到模版中例子
                  var template = Handlebars.compile(html);
                  var data = {
                      name: '我是变量'
                  };
                  let result = template(data);
                  //默认渲染的模板数据
                  return result;
              }
          }
          //其它自定义方法
      })
      ````
   

   
