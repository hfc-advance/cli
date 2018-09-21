#!/usr/bin/env node

const program = require('commander');
const package = require('../package.json');
program
  .version(package.version)
  .usage('<command> [options]')

//? 构建library
program
    .command('build-library <libraryName>')
    .description('构建包含各种规范的library')
    .action(function (libraryName) {
      require('./build-library/index.js')(libraryName);
    });

program
  .arguments('<command>')
  .action((cmd) => {
    program.outputHelp()
    console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`))
    console.log()
  });

program.parse(process.argv);