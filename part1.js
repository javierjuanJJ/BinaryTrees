
class Node {
    constructor(props) {
        this.val = props;
        this.left = null;
        this.right = null;
    }

}


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.right = d;
b.left = e;
c.right = f;

const treeSum = (root) => {
    if (root == null){
        return 0;
    }
    return root.val + treeSum(root.left) + treeSum(root.right);
}
console.log(treeSum(a));







