import React from 'react'
import ReactDOM from 'react-dom'
let element = (
    <div className="title" style={{ color: 'red' }}>
        <span>hello</span>world
    </div>
)
console.log(JSON.stringify(element, null, 2));
ReactDOM.render(element, document.getElementById('root'))

/* 
{
  "type": "div",
  "key": null,
  "ref": null,
  "props": {
    "className": "title",
    "style": {
      "color": "red"
    },
    "children": [
      {
        "type": "span",
        "key": null,
        "ref": null,
        "props": {
          "children": "hello"
        },
        "_owner": null,
        "_store": {}
      },
      "world"
    ]
  },
  "_owner": null,
  "_store": {}
}

*/