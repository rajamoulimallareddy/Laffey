const chalk = require('chalk');
console.log(chalk.yellow('----------------------------------------------------------------------------------------------'))
console.log()
console.log(chalk.red('Found a bug? Feel free to create new issue here. https://github.com/Weeb-Devs/Laffey/issues/new'))
console.log(chalk.yellow('Version: 0.1.2'))
console.log()
console.log(chalk.yellow('----------------------------------------------------------------------------------------------'))
console.log()
const Laffey = require('./src/Laffey');

new Laffey().login()
    .catch(err => console.error(err))