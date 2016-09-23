import React, {
    Component
} from 'react'

import {
    Router,
    Route,
    IndexLink,
    browserHistory,
    hashHistory,
    Link,
    IndexRoute
} from 'react-router'

require('../createComponent');

function createRouter(obj) {

    let rows = [],
        num = 0,
        eachRouter = function(obj, rows) {
            obj.map((item) => {
                num = num + 1;
                if (item.subRouter) {
                    let it = [];
                    rows.push(
                        <Route key={num} path={item.path}  component={item.component}>
                        <IndexRoute  component={item.default}/>
                        {it}
                    </Route>
                    );
                    eachRouter(item.subRouter, it)
                } else {
                    rows.push(<Route  key={num} path={item.path}  component={item.component} />);
                }
            });
        }

    eachRouter(obj, rows);

    class RouterConfig extends React.Component {
        render() {
            return (
                <Router history={hashHistory}>
                    {rows}
                </Router>
            )
        }
    }
    return RouterConfig;
}

module.exports = createRouter;