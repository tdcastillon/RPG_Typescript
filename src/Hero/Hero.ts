import Job from "../Job/Class/Job";
import util from 'util';
import clc from "cli-color";
import GameEntity from "../Game/GameEntity";

class Hero extends GameEntity {
    _job: Job;

    constructor(name: string, startingJob: Job) {
        super(name, startingJob.getBasedStats(), startingJob.getAllStats());
        this._job = startingJob;
        console.log(`Welcome ` + clc.green(`${this.getName()}`) + ` ! You are a ` + clc.yellow(`${this._job.getName()}`) + `.`);
    }

    [util.inspect.custom](depth: any, options: any) {
        return clc.green(`${this.getName()}`) + ', a ' + clc.yellow(`${this._job.getName()}`) + ' of lv ' + clc.red(`${this.getStats().getProperty('LVL')}`);
    }

    public levelUp(new_level: number) {
        this.getStats().levelUp(new_level, this._job.getMultiplier(), this.getBasedStats());
    }

    public getName() : string {
        return clc.green(`${this._name}`);
    }
}

export default Hero;