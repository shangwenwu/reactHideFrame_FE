let Api = '';

let Ajax = function(obj) {
    if (window.real) {
        Api = require('../../config/api');
        YS.fetch({
            url: Api[obj.url],
            method: obj.method ? obj.method : 'post',
            body: obj.body,
            fail: (err) => {
                obj.fail(err);
            },
            success: (data) => {
                obj.success(data);
            }
        })
    } else {
        Api = require('../../config/defaultData');
        obj.fail('这是虚拟数据哦！');
        obj.success(Api[obj.url]);
    }
}



module.exports = Ajax;