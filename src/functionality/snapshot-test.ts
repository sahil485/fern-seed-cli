class Test
{
    readonly update : boolean;
    readonly fixtures: string[];
    readonly generator: string; 
    outputPath: string;

    constructor(update : boolean, fixtures : string[], generator : string, outputPath: string)
    {
        this.update = update;
        this.fixtures = fixtures;
        this.generator = generator;
        this.outputPath = outputPath;
    }

    run_snapshot_test()
    {
        //master method
    } 
    migrate_to_ir(fixture: string, ir_version: string){}
    config_docker(){}
    invoke_docker(){}
    compile_output(){}
    update_snapshots(outputPath? : string){}
}