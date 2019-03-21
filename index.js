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
  let lis = document.querySelectorAll('.ranked-list li');
  
  for(let i = 0; i < lis.length; i++) {
   lis[i].innerHTML = parseInt(lis[i].innerHTML) + n; 
  }
  /* var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
    for (var i=0;i<lis.length;i++) {
      lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
    } */
}
