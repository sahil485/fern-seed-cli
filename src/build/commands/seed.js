"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
exports.command = "seed <key>";
exports.desc = "Seed CLI";
const builder = (yargs) => {
    return yargs
        .options({
        docker: { type: 'string', demandOption: true },
        config: { type: 'string', demandOption: true },
        fixture: { type: 'string', demandOption: true },
        recurse: { type: "boolean", demandOption: false }
    })
        .positional("key", { type: 'string', demandOption: true });
};
exports.builder = builder;
const handler = (argv) => {
    const { key, docker, fixture, config, recurse } = argv;
    if (key === "snapshot-test" || key === "test") // run function to start snapshot test in docker file 
        process.stdout.write(`Key: ${key}, Docker Path: ${docker} Config Path: ${config} Fixture Path: ${fixture} Recurse: ${recurse}`);
    process.exit(0);
};
exports.handler = handler;
