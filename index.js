function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let node = document.getElementByID('grand-node');
  let next = node.children[0]
  while(next) {
    node = next;
    next = node.children[0];
  }
  return node;
}
