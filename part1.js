
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

const treeIncludes = (root, target) => {
    if (root.val === target){
        return true;
    }
    if (root.val == null){
        return false;
    }
    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
}
console.log(treeIncludes(a, 'e'));







