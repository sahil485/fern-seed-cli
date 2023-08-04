"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
exports.command = "test";
exports.desc = "Seed CLI";
const builder = (yargs) => {
    return yargs
        .options({
        docker: { type: 'string', demandOption: true },
        config: { type: 'string', demandOption: true },
        fixture: { type: 'string', demandOption: true },
        recurse: { type: "boolean", demandOption: false }
    });
};
exports.builder = builder;
const handler = (argv) => {
    const { docker, fixture, config, recurse } = argv;
    process.stdout.write(`Docker Path: ${docker}\nConfig Path: ${config}\nFixture Path: ${fixture}\nRecurse: ${recurse}`);
    process.exit(0);
};
exports.handler = handler;
