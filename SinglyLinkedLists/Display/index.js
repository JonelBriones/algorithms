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
    display() {
        let list = [];
        if(this.head === null) {
            return list;
        }
        list+= this.head.value; //Joins the first node onto list
        let runner = this.head.next; 
        while (runner !== null) {
            list += " next node is " + runner.value;
            runner = runner.next;
        } 
        return list;
    }
}
let new_node = new SLL();
new_node.addFront(10);
new_node.addFront(5);
console.log(new_node.display());