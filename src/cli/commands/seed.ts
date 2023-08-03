import { Arguments, CommandBuilder, string } from "yargs";

type Options = {
    key : string, 
    docker : string,
    config : string,
    fixture : string,
    recurse : boolean | undefined
}

export const command : string = "seed <key>";
export const desc : string = "Seed CLI"

export const builder : CommandBuilder<Options, Options> = (yargs) => 
{
    return yargs
        .options({
            docker : {type: 'string', demandOption: true},
            config : {type: 'string', demandOption: true},
            fixture : {type: 'string', demandOption: true},
            recurse : {type: "boolean", demandOption: false}
        })
        .positional( "key", { type: 'string', demandOption: true })
}

export const handler = (argv : Arguments<Options> ) : void => 
{
    const { key, docker, fixture, config, recurse } = argv
    if(key === "snapshot-test" || key === "test") // run function to start snapshot test in docker file 
        process.stdout.write(`Key: ${key}, Docker Path: ${docker} Config Path: ${config} Fixture Path: ${fixture} Recurse: ${recurse}`)
    process.exit(0)
}