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

function createRouter(obj) {
    let rows = [],
        num = 0,
        eachRouter = function(obj, rows) {
            if (obj) {
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
        }

    eachRouter(obj, rows);

    class RouterConfig extends React.Component {
        render() {
            if (obj) {
                return (
                    <Router history={hashHistory}>
                    {rows}
                </Router>
                )
            } else {
                return (
                    <div>无配置</div>
                )
            }

        }
    }
    return RouterConfig;
}

module.exports = createRouter;