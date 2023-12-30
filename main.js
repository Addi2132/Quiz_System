import inquirer from "inquirer";
let score = 0;
/* Start Game */
console.log(' # Starting the Quiz # ');
console.log('----------------------------------------------------------------------------------------------');
console.log('# You will be given 12 questions and in order to win you have to answer 8 questions correctly # ');
let question1 = await inquirer.prompt({
    type: 'list',
    name: 'question1',
    message: "What is TypeScript?",
    choices: [
        {
            name: "a) A JavaScript library",
            value: "a"
        },
        {
            name: "b) A superset of JavaScript",
            value: "b"
        },
        {
            name: "c) A subset of JavaScript",
            value: "c"
        },
        {
            name: "d) An alternative to JavaScript",
            value: "d"
        },
    ]
});
console.log('# Question No. 2');
let question2 = await inquirer.prompt({
    type: 'list',
    name: 'question2',
    message: "TypeScript introduces which feature for catching errors during development?",
    choices: [
        {
            name: "a) Dynamic Typing",
            value: "a"
        },
        {
            name: "b) Static Typing",
            value: "b"
        },
        {
            name: "c) Loose Typing",
            value: "c"
        },
        {
            name: "d) Weak Typing",
            value: "d"
        },
    ]
});
console.log('# Question No. 3');
let question3 = await inquirer.prompt({
    type: 'list',
    name: 'question3',
    message: "Which keyword is used to declare a variable with a specific type in TypeScript?",
    choices: [
        {
            name: "a) var",
            value: "a"
        },
        {
            name: "b) let",
            value: "b"
        },
        {
            name: "c) const",
            value: "c"
        },
        {
            name: "d) type",
            value: "d"
        },
    ]
});
console.log('# Question No. 4');
let question4 = await inquirer.prompt({
    type: 'list',
    name: 'question4',
    message: "What is the correct syntax for defining an array of numbers in TypeScript?",
    choices: [
        {
            name: "a) let numbers: Array<number> = [1, 2, 3];",
            value: "a"
        },
        {
            name: "b) let numbers: number[] = [1, 2, 3];",
            value: "b"
        },
        {
            name: "c) let numbers: Array = [1, 2, 3];",
            value: "c"
        },
        {
            name: "d) let numbers: [] = [1, 2, 3];",
            value: "d"
        },
    ]
});
console.log('# Question No. 5');
let question5 = await inquirer.prompt({
    type: 'list',
    name: 'question5',
    message: "In TypeScript, what is used to enforce a contract on the structure of an object?",
    choices: [
        {
            name: "a) Class",
            value: "a"
        },
        {
            name: "b) Interface",
            value: "b"
        },
        {
            name: "c) Type",
            value: "c"
        },
        {
            name: "d) Abstract",
            value: "d"
        },
    ]
});
console.log('--------------------------------------------------------------------------------------');
console.log('# Question No. 6');
let question6 = await inquirer.prompt({
    type: 'list',
    name: 'question6',
    message: "How do you achieve inheritance in TypeScript?",
    choices: [
        {
            name: "a) extends keyword",
            value: "a"
        },
        {
            name: "b) implements keyword",
            value: "b"
        },
        {
            name: "c) inherits keyword",
            value: "c"
        },
        {
            name: "d) derives keyword",
            value: "d"
        },
    ]
});
console.log('# Question No. 7');
let question7 = await inquirer.prompt({
    type: 'list',
    name: 'question7',
    message: "What is the primary purpose of generics in TypeScript?",
    choices: [
        {
            name: "a) Enforcing static types",
            value: "a"
        },
        {
            name: "b) Creating reusable components",
            value: "b"
        },
        {
            name: "c) Handling asynchronous operations",
            value: "c"
        },
        {
            name: "d) Defining global constants",
            value: "d"
        },
    ]
});
console.log('# Question No. 8');
let question8 = await inquirer.prompt({
    type: 'list',
    name: 'question8',
    message: "Which syntax is used for creating a generic function in TypeScript?",
    choices: [
        {
            name: "a) <T> {}",
            value: "a"
        },
        {
            name: "b) {T} => {}",
            value: "b"
        },
        {
            name: "c) function<T>() {}",
            value: "c"
        },
        {
            name: "d) T => {}",
            value: "d"
        },
    ]
});
console.log('# Question No. 9');
let question9 = await inquirer.prompt({
    type: 'list',
    name: 'question9',
    message: "How do you import a module in TypeScript?",
    choices: [
        {
            name: "a) import module from 'module';",
            value: "a"
        },
        {
            name: "b) import * as module from 'module';",
            value: "b"
        },
        {
            name: "c) require('module');",
            value: "c"
        },
        {
            name: "d) import { module } from 'module';",
            value: "d"
        },
    ]
});
console.log('# Question No. 10');
let question10 = await inquirer.prompt({
    type: 'list',
    name: 'question10',
    message: "What is the purpose of namespaces in TypeScript?",
    choices: [
        {
            name: "a) Encapsulation of code",
            value: "a"
        },
        {
            name: "b) Grouping related files",
            value: "b"
        },
        {
            name: "c) Dynamic typing",
            value: "c"
        },
        {
            name: "d) Providing global variables",
            value: "d"
        },
    ]
});
console.log('--------------------------------------------------------------------------------------');
console.log('# Question No. 11');
let question11 = await inquirer.prompt({
    type: 'list',
    name: 'question11',
    message: "What are decorators used for in TypeScript?",
    choices: [
        {
            name: "a) Code commenting",
            value: "a"
        },
        {
            name: "b) Adding metadata to classes or class members",
            value: "b"
        },
        {
            name: "c) Error handling",
            value: "c"
        },
        {
            name: "d) Dynamic typing",
            value: "d"
        },
    ]
});
console.log('# Question No. 12');
let question12 = await inquirer.prompt({
    type: 'list',
    name: 'question12',
    message: "Which symbol is used before a decorator in TypeScript?",
    choices: [
        {
            name: "a) @",
            value: "a"
        },
        {
            name: "b) #",
            value: "b"
        },
        {
            name: "c) $",
            value: "c"
        },
        {
            name: "d) %",
            value: "d"
        },
    ]
});
/* Answers */
if (question1.question1 === 'b') {
    score++;
}
if (question2.question2 === 'b') {
    score++;
}
if (question3.question3 === 'd') {
    score++;
}
if (question4.question4 === 'b') {
    score++;
}
if (question5.question5 === 'b') {
    score++;
}
if (question6.question6 === 'a') {
    score++;
}
if (question7.question7 === 'b') {
    score++;
}
if (question8.question8 === 'c') {
    score++;
}
if (question9.question9 === 'b') {
    score++;
}
if (question10.question10 === 'a') {
    score++;
}
if (question11.question11 === 'b') {
    score++;
}
if (question12.question12 === 'a') {
    score++;
}
console.log('--------------------------------------------------------------------------------------');
console.log('Your Score is: ' + score + ' out of 12');
console.log('--------------------------------------------------------------------------------------');
if (score >= 8) {
    console.log('Congratulations! You won the Quiz');
}
else {
    console.log('Sorry! You lost the Quiz');
}
console.log('--------------------------------------------------------------------------------------');
console.log(' # End of the Quiz # ');
