let BinaryTree = require('./binarytree');
let curTree = BinaryTree.init();
module.exports = (function () {
  return (arr) => {
    arr.map((oEl, idx) => {
      arr.slice(idx).reduce((acc, el) => {
        if (el !== oEl) {
          curTree.add({
            spread: oEl - el
          });
        }
        return acc;
      });
      return oEl;
    });
    const cur = curTree.getCurrent();
    curTree.inorder(cur);
    let spreads = curTree.getTraversalData();
    let biggest = spreads[spreads.length - 1];
    return (biggest.spread > 0) ? biggest.spread : -1;
  }
})();