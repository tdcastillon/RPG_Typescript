import Stats from "../Stats/Stats";

class GameEntity {
    public _name: string;
    public _based_stats: Stats;
    public _stats: Stats;

    constructor(name: string, based_stats: Stats, stats: Stats) {
        this._based_stats = based_stats;
        this._stats = stats;
        this._name = name;
    }

    getBasedStats() : Stats {
        return this._based_stats;
    }

    getStats() : Stats {
        return this._stats;
    }

    getName() : string {
        return this._name;
    }

    levelUp(new_level: number, multiplier: number) {
        this.getStats().levelUp(new_level, multiplier, this.getBasedStats());
    }
}

export default GameEntity;