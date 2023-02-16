
class Node {
    constructor(props) {
        this.val = props;
        this.left = null;
        this.right = null;
    }

}


const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeMinValue = (root) => {
    if (root === null) return Infinity;
    const smallestLeftValue = treeMinValue(root.left);
    const smallestRightValue = treeMinValue(root.right);
    return Math.min(root.val, smallestLeftValue, smallestRightValue);
};

console.log(treeMinValue(a));







