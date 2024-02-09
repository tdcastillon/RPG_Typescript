import Stats from "../../Stats/Stats";

import util from 'util';
import clc from "cli-color";
import InitStats from "../../Stats/InitStats";
import GameEntity from "../../Game/GameEntity";

class Enemy extends GameEntity {


    constructor(stats: InitStats, name: string, public multiplier: number = 0.5) {
        super(name, new Stats(stats), new Stats(stats));
    }

    public levelUp(new_level: number) {
        this.getStats().levelUp(new_level, this.multiplier, this.getBasedStats());
    }

    [util.inspect.custom](depth: any, options: any) {
        return clc.red(`${this.getName()}`) + ' of lv ' + clc.red(`${this.getStats().getProperty('LVL')}`);
    }
}

export default Enemy;