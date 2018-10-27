class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getLeft() {
        return this.left;
    }
    setLeft(left) {
        this.left = left;
    }
    getRight() {
        return this.right;
    }
    setRight(right) {
        this.right = right;
    }
    isNull() {
        if (this.data == null) {
            return true;
        }
        return false;
    }

}
class BinaryTree {
    constructor() {
        this.root = new Node(null, null, null);
        this.current = this.root;
        this.traversalData = [];
    }
    getCurrent() {
        return this.root;
    }
    getTraversalData() {
        return this.traversalData;
    }
    addTraversalData(data) {
        this.traversalData.push(data);
    }
    add(data) {
        if (this.root.data == null) {
            this
                .root
                .setData(data);
            return;
        }
        this.current = this.root;
        while (true) {
            if (this.current.getData()['spread'] >= data['spread'] && this.current.getLeft() != null) {

                this.current = this.current.getLeft();

            } else if (this.current.getData()['spread'] <= data['spread'] && this.current.getRight() != null) {

                this.current = this.current.getRight();

            } else if (this.current.getData()['spread'] >= data['spread'] && this.current.getLeft() == null) {

                this.current.setLeft(new Node(data, null, null));
                break;

            } else if (this.current.getData()['spread'] <= data['spread'] && this.current.getRight() == null) {

                this.current.setRight(new Node(data, null, null));
                break;

            }

        }
    }
    inorder(cur) {
        if (cur == null) {
            return;
        }
        this.inorder(cur.left);
        this.addTraversalData(cur.getData());
        this.inorder(cur.right);
    }
}
module.exports = {
    init: () => new BinaryTree()
}

//let tree = new BinaryTree();
//tree.add({
//    spread: 12
//});
//tree.add({
//    spread: 12
//});
//tree.add({
//    spread: 12
//});
//tree.add({
//    spread: 12
//});
//tree.inorder(tree.getCurrent());
//console.log(tree.getTraversalData());