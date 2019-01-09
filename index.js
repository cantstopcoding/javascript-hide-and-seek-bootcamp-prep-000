function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div div div div');
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll('.ranked-list');
  
  for(let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n ;
  } 
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

/*
describe('deepestChild()', () => {
    it('returns the most deeply nested child in #grand-node', () => {
      console.log(deepestChild().innerHTML)
      expect(deepestChild()).to.equal(document.querySelector('#grand-node div div div div'))
    })
  })
*/