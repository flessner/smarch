import { Command } from 'commander';
const program = new Command();

program
  .version('0.1.0')
  .command('publish')
  .argument('[config]')
  .action(() => {
    console.log('To be done...')
  })

program.parse()
