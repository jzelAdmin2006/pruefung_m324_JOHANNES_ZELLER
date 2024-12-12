import chalk from 'chalk'; // asdfqwert

console.log(chalk.blue('It works'));

const myUsedConstant = "unnecessaryAccordingToLinter" === "1";
console.log(
    `The value of the constant is ${myUsedConstant}`,
    "(this is kind of stupid but it's just to demonstrate the linter 🙂)",
);
