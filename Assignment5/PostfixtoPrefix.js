function postfixToPrefix(postfix) {
    const stack = [];

    for (let char of postfix) {
        if (char.match(/[a-zA-Z0-9]/)) {
            stack.push(char);
        } else {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(char + a + b);
        }
    }
     return stack.pop();
}
const postfixExpr = "AB+CD-*";
console.log(postfixToPrefix(postfixExpr));