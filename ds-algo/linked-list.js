class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let n1 = new Node(val);
        if (this.head === null) {
            this.head = n1;
            this.tail = this.head;
        } else {
            this.tail.next = n1;
            this.tail = n1;
        }
        this.length++;

    }

    pop() {

        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let previous = current;

        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
            this.length--;
            return current;
        }

        while (current.next !== null) {
            previous = current;
            current = current.next;
        }
        this.tail = previous;
        previous.next = null;
        this.length--;
        return current.val;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        this.head = current.next;
        this.length--;
        return current;
    }

    unShift(val) {
        let n1 = new Node(val);
        if (this.head === null) {
            this.head = n1;
            this.tail = this.head;
        } else {
            n1.next = this.head;
            this.head = n1;
        }
        this.length++;
    }

    get(idx) {
        if (idx < 0 || idx > this.length - 1) {
            return null;
        }

        let counter = 0;
        let current = this.head;
        while (counter < idx) {
            current = current.next;
            counter++;
        }
        return (current);
    }

    set(val, idx) {
        let temp = this.get(idx);
        if (temp) {
            temp.val = val;
            return true;
        }
        return false;
    }

    insert(val, idx) {
        if (idx < 0 || idx > this.length) {
            return false
        }

        if (idx === 0) {
            return !!this.unShift(val);
        }
        if (idx === this.length) {
            return !!this.push(val);
        }

        let temp = new Node(val);
        let previous = this.get(idx - 1);
        temp.next = previous.next;
        previous.next = temp;
        this.length++;
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx > this.length - 1) {
            return false;
        }

        if (idx === 0) {
            return this.shift();
        }

        if (idx === this.length - 1) {
            return this.pop();
        }

        let previous = this.get(idx - 1);
        let removed = previous.next;
        previous.next = removed.next;
        this.length--;
        return removed;

    }


    display() {
        console.log('ddd')
        let cur = this.head;
        while (cur !== null) {
            console.log(cur.val);
            cur = cur.next;
        }
    }
}

let L1 = new SinglyLinkedList();

L1.push(4);
L1.pop();
L1.push(33);
L1.push(30);
L1.push(320);
L1.shift();
L1.unShift(1);
L1.display();
console.log(L1.get(0));
console.log(L1.get(1));
console.log(L1.get(2));
console.log(L1.get(3));
L1.set(23, 2);
L1.display();
L1.insert(0, 0);
L1.insert(2213, 4);
L1.insert(9, 3);
L1.remove(3);
L1.display();
