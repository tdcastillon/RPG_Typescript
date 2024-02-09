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

    public getName() : string {
        return clc.red(`${this._name}`);
    }

    public createEnemy(stats: InitStats, name: string, multiplier: number = 0.5): Enemy {
        return new Enemy(stats, name, multiplier);
    }

    [util.inspect.custom](depth: any, options: any) {
        return clc.red(`${this.getName()}`) + ' of lv ' + clc.red(`${this.getStats().getProperty('LVL')}` + (this.getStats().getProperty('HP') <= 0 ? ' (dead)' : String(this.getStats().getProperty('HP'))) + '\n');
    }
}

export default Enemy;