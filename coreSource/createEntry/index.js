import React, {
    Component
} from 'react'
import ReactDOM from 'react-dom'

let div = document.createElement("div");
div.setAttribute("id", "container");
document.body.appendChild(div);

let Entry = function(RouterConfig, domID) {
    domID = domID ? domID : "container";
    ReactDOM.render(
        <RouterConfig />,
        document.getElementById(domID)
    )
}

module.exports = Entry;