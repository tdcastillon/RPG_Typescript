import Job from "../Job/Class/Job";
import util from 'util';
var clc = require('cli-color');

class Hero {
    name: string;
    _job: Job;

    constructor(name: string, startingJob: Job) {
        this.name = name;
        this._job = startingJob;
        console.log(`Welcome ` + clc.green(`${this.name}`) + ` ! You are a ` + clc.yellow(`${this._job.getName()}`) + `.`);
    }

    [util.inspect.custom](depth: any, options: any) {
        return clc.green(`${this.name}`) + ', a ' + clc.yellow(`${this._job.getName()}`) + ' of lv ' + clc.red(`${this._job.getStats('LVL')}`);
    }
}

export default Hero;