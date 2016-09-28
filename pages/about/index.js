let tpl = require('./template.html');

var About = {
    template: tpl,
    loadBefore: function(Root) {

        console.log('about page 请求数据例子');
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

        return tpl
    }
}



module.exports = createComponent(About)