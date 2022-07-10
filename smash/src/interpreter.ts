const parse = require('yargs-parser')
import { evm_scan_block, evm_scan_tx } from "./commands";

export class Interpreter {

  private frame: any;
  private logger: any;

  public commands = {
    EVM_SCAN_BLOCK: evm_scan_block,
    EVM_SCAN_TX: evm_scan_tx,
  }

  constructor(frame: any) {
    this.frame = frame;
    this.logger = frame.logger;
  }

  public async exec(input: string) {
    if (!this.validate(input)) {
      this.logger.warn("Invalid: " + input);
      return 1;
    }

    try {
      const args = parse(input);
      const command = args._[0];
      this.commands[command].exec(this.frame, args);
    } catch (err) {
      this.logger.error(err);
      return 1;
    }

    return 0;
  }

  public validate(input: string) {
    const args = parse(input);
    const command = args._[0];

    if (!command) return false;
    if (!(command in this.commands)) return false;

    const required = this.commands[command].args;
    for (let i = 0; i < required.length; i++) {
      if (!(required[i] in args)) return false;
    }

    return true
  }

  public reason(input: string) {
    const args = parse(input);
    const command = args._[0];

    if (!command) return "No command specified";
    if (!(command in this.commands)) return "Unknown command '" + command + "'";

    const required = this.commands[command].args;
    for (let i = 0; i < required.length; i++) {
      if (!(required[i] in args)) return "Missing argument '" + required[i] + "'";
    }

    return null;
  }
}
