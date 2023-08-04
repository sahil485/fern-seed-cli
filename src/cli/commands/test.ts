import { Arguments, CommandBuilder, string } from "yargs";

type Options = {
    docker : string,
    config : string,
    fixture : string,
    recurse : boolean | undefined
}

export const command : string = "test";
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
}

export const handler = (argv : Arguments<Options> ) : void => 
{
    const { docker, fixture, config, recurse } = argv
    process.stdout.write(`Docker Path: ${docker}\nConfig Path: ${config}\nFixture Path: ${fixture}\nRecurse: ${recurse}`)
    process.exit(0)
}