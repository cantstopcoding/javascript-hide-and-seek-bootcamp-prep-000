function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let next = node.children[0];

  while (nextNode) {
    node = next;
    next = node.children[0];
  }

  return node;
}
