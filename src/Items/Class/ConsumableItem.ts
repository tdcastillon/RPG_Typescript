import GameEntity from "../../Game/GameEntity";
import Stats from "../../Stats/Stats";
import Item from "./Item";

/**
 * Class representing a stat item
 * 
 * @extends Item
 */

class ConsumableItem extends Item {
    private stat_to_impact : keyof Stats;
    private value_to_impact : number =  0

    /**
     * Constructor for the StatItem class
     * @param name 
     * @param description 
     * @param value 
     * @param stat_to_impact 
     */
    constructor(name: string, description: string, value: number, stat_to_impact: keyof Stats, value_to_impact: number) {
        super(name, description, value, true, false)
        this.stat_to_impact = stat_to_impact
        this.value_to_impact = value_to_impact
    }

    // GETTERS & SETTERS

    /**
     * Getter for the stat_to_impact property
     * @returns the stat to impact
     */
    public getStatToImpact(): keyof Stats {
        return this.stat_to_impact
    }

    /**
     * Setter for the stat_to_impact property
     * @param stat_to_impact - the stat to impact
     */
    public setStatToImpact(stat_to_impact: keyof Stats): void {
        this.stat_to_impact = stat_to_impact
    }

    /**
     * Getter for the value_to_impact property
     * @returns the value to impact
    */
    public getValueToImpact(): number {
        return this.value_to_impact
    }

    /**
     * Setter for the value_to_impact property
     * @param value_to_impact - the value to impact
    */
    public setValueToImpact(value_to_impact: number): void {
        this.value_to_impact = value_to_impact
    }

    // METHODS

    /**
     * Method to apply the stat item to a game entity
     * @param use - the entity to apply the stat item to
    */
    public use(target: GameEntity) : void {
        target.getStats().setProperty(this.stat_to_impact, this.value_to_impact)
        let final_stat = target.getStats().getProperty(this.stat_to_impact)

        if (this.value_to_impact > 0)
            console.log(`${target.getName()} has gained ${this.value_to_impact} ${this.stat_to_impact}`)
        else
            console.log(`${target.getName()} has lost ${this.value_to_impact} ${this.stat_to_impact}`)

        if ((this.stat_to_impact == "HP") && (final_stat <= 0))
            console.log(`${target.getName()} has died!`)
    }
}

export default ConsumableItem