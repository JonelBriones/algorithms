class SLLNode {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}


class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value) {
        let new_node = new SLLNode(value);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    // we make the node we want to remove point to a null and have it's previous next become the head.
    removeFront() {
        if(this.head === null) {
            return this.head;
        }
        let removeNode = this.head;
        this.head = removeNode.next;
        removeNode.next = null;
        return this;
    }
    front() {
        if(this.head === null) {
            return this;
        } else return this.head.value;
    }
}
let new_node = new SLL();
new_node.addFront(10);
new_node.addFront(1);
new_node.addFront(5);

 // will remove the the node that is pointed to a null/end of the node list
new_node.removeFront();

// displays the last node
console.log(new_node.front());

// console.log(new_node)
// console.log(new_node.next)
