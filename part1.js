
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

const depthFirstValues = (root) => {

    if (root == null){
        return [];
    }
    else {
        const stack = [root];
        const result = [];
        while (stack.length > 0){
            const current = stack.pop();
            result.push(current.val);
            //console.log(current.val);

            if (current.left) {
                stack.push(stack.left);
            }
            if (current.right) {
                stack.push(stack.right);
            }
        }
    }

}
depthFirstValues(a);







