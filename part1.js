
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
    let totalSum = root.val;
    const  queue =[ root ];

    while (queue.length > 0){
        const current = queue.shift();


        if (current.left != null){
            queue.push(current.left);
            totalSum += current.left.val;
        }

        if (current.right != null){
            queue.push(current.right);
            totalSum += current.right.val;
        }
    }


    return totalSum;
}
console.log(treeSum(a));







