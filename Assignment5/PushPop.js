// let num = [2,55,38,9,56,44,6,10];

// // #push(add element to the stack)
// num.push(43);
// console.log(num);   

// // #pop(remove element from the stack)
// let arr = [33,56,78,87,56]
//  arr.pop();
// console.log(arr);

class Stack {
    constructor() {
        this.items = [];
    }
    // #Push(add element to the stack) 
    push(element) {
        this.items.push(element);
    }
    // #Pop(remove element from the stack)
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }
    // #Peek 
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }
    // #is empty
    isEmpty() {
        return this.items.length === 0;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
console.log(stack.pop()); 
console.log(stack.peek());
console.log(stack.isEmpty());

