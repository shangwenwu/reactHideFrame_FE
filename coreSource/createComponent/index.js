import React, {
    Component
} from 'react'
import ReactDOM from 'react-dom'

let Ajax = require('../../coreSource/ajax');

window.createComponent = function(obj) {
    class Tpl extends React.Component {

        constructor(props) {

            super(props);

            this.state = {
                template: obj.template
            };
        }
        componentDidMount() {
            if (obj.loadAfter) {
                obj.loadAfter(this);
            }
            this.CreateSubArea(obj.subArea)
        }
        CreateSubArea(domId) {
            if (obj.subArea) {
                ReactDOM.render(
                    React.cloneElement(this.props.children || <div />, {
                        store: this.props
                    }),
                    document.getElementById(domId)
                )
            }
        }
        componentDidUpdate() {
            this.CreateSubArea(obj.subArea)
        }
        append(domId, Comp) {
            ReactDOM.render(
                <Comp />,
                document.getElementById(domId)
            )
        }

        componentWillMount() {
            this.Ajax = Ajax;

            if (obj.loadBefore) {
                let _this = this;
                this.state.template = obj.loadBefore(this, function(newTpl) {
                    _this.setState({
                        template: newTpl
                    });
                    obj.loadAfter(_this);
                });
            }
        }
        render() {
            return (<div>
                        <div dangerouslySetInnerHTML={{__html:this.state.template}}></div>
                </div>)
        }
    }


    return Tpl;
}