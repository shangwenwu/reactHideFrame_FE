import Handlebars from 'handlebars';
require('./style.css')
let tpl = require('./template.html');

var Tpl = {
    template: tpl,
    subArea: 'Main',
    loadAfter: function(Root) {
        $('#Test').click(function() {
            $(document.body).css('background', 'red');
        })
        $('#bg').click(function() {
            $(document.body).css('background', 'white');
        })
    },
    loadBefore: function(Root) {
        var template = Handlebars.compile(tpl);
        var data = {
            title: 'TEST TITLE'
        };
        return template(data);
    }
}


module.exports = createComponent(Tpl)