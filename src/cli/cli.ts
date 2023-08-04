#!/usr/bin/env node 

import yargs from "yargs";
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv))
    .commandDir('./commands')
    .strict()
    .alias({test: 'snapshot-test', h: 'help', d: 'docker', f: 'fixture', c: 'config', r: 'recurse'})
    .argv
