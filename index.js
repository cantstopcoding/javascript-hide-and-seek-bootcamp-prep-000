function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let next = node.children[0];
  
  while(next) {
    node = next;
    next = node.children[0];
  }
  return node;
}

function increaseRankBy(n) {
  let rankdedList = document.querySelectorAll('.ranked-list');
  for(let i = 0; i < rankdedList.length; i++) {
    rankdedList[i].innerHTML = parseInt(rankdedList[i].innerHTML) + n;
  }
}


