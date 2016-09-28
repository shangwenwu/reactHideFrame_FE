//定义组件
function defineComponent(formatRule) {
    define(function(require, exports) {
        let html = '',
            css = require("assets/script/text!./style.css");
        if (css) {
            html = '<style type="text/css">' + css + '</style>\n';
        }

        html += require("assets/script/text!./template.html");

        return createComponent(formatRule(html));
    })
}