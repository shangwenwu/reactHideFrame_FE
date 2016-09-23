require('./style.css')
let tpl = require('./template.html');

var TplComp = {
    template: tpl,
    subArea: 'mainCon'
}

module.exports = createComponent(TplComp)