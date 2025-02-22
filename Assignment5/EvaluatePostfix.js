function evaluatePostfix(expr) {
    const stack = [];

    for (let char of expr) {
        if (!isNaN(char)) {
            stack.push(parseInt(char));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            switch (char) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
            }
        }
    }
     return stack.pop();
}
console.log(evaluatePostfix("231*+9-"));