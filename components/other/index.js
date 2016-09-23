require('./style.css')
let tpl = require('./template.html');

var Tpl = {
    template: tpl
}


module.exports = createComponent(Tpl)