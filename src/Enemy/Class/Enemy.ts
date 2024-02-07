import Stats from "../../Stats/Stats";

import util from 'util';
import clc from "cli-color";
import InitStats from "../../Stats/InitStats";

class Enemy {
    protected stats: Stats = new Stats({
        HP: 0,
        MAX_HP: 0,
        MP: 0,
        MAX_MP: 0,
        ATK: 0,
        DEF: 0,
        MAT: 0,
        MDF: 0,
        EXP: 0,
        FULL_EXP: 0,
        LVL: 0,
    });

    protected based_stats = this.stats;
    public name: string = "";

    constructor(stats: InitStats, name: string, public multiplier: number = 0.5) {
        this.based_stats = new Stats(stats);
        this.stats = new Stats(stats);
        this.name = name;
    }

    public levelUp(new_level: number) {
        this.stats = this.based_stats;
        this.stats.levelUp(new_level, this.multiplier, this.based_stats);
    }

    [util.inspect.custom](depth: any, options: any) {
        return clc.red(`${this.name}`) + ' of lv ' + clc.red(`${this.stats.getProperty('LVL')}`);
    }
}

export default Enemy;