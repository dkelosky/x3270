#!/usr/bin/env node

import * as fs from "fs";
import * as exec from "child_process"

const dir = fs.readdirSync(`/tmp`, {withFileTypes: true});
let lastFile = ``;
dir.forEach((entry) => {
    if (entry.isFile) {
        if (entry.name.indexOf(`x3trc`) > -1) {
            lastFile = `/tmp/${entry.name}`;
            // const stats = fs.statSync(`/tmp/${entry.name}`)
            // console.log(`${stats.ctime} and ${entry.name}`)
        }
    }
})

const ls = exec.spawn(`tail`, [`-f`, lastFile])

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  
  ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  
  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
