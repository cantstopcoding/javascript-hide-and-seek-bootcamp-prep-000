function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let next = node.children[0];

  while (next) {
    node = next;
    next = node.children[0];
  }

  return node;
}

function increaseRankBy(n) {
  let rankedList = $('.ranked-list');
  for(let i = 0; i < rankedList.length; i++) {
    let children = rankedList[i].children
  }
}

