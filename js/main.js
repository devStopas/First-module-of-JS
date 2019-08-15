var nodes = [
  {
    'tag': 'ul',
    'children': [
      {
        'tag': 'li',
        'text': 'enjoy'
      },
      {
        'tag': 'li',
        'text': 'otra'
      }, {
        'tag': 'li',
        'text': 'cosa'
      }, {
        'tag': 'li',
        'text': 'estudien!'
      }
    ]
  },
]
const buildNodes = (nodes, parent) => {
  nodes.forEach(({ tag, children }) => {
    let nodeParent = document.createElement(tag)
    children.forEach(({ tag, text }) => {
      let node = document.createElement(tag)
      let nodeText = document.createTextNode(text)
      node.appendChild(nodeText)
      nodeParent.appendChild(node)
    })
    parent.appendChild(nodeParent)
    nodeParent.classList.add('parent')
  });
}
const parent = document.getElementById('container')
buildNodes(nodes, parent)


