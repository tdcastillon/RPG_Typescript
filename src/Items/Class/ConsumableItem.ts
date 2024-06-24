import GameEntity from "../../Game/GameEntity";
import waitTime from "../../Misc/waitTime";
import Stats from "../../Stats/Stats";
import itemRange from "../Enum/itemRange";
import Item from "./Item";

/**
 * Class representing a stat item
 * 
 * @extends Item
 */

class ConsumableItem extends Item {
    private stat_to_impact : keyof Stats;
    private value_to_impact : number =  0

    private item_range : itemRange = itemRange.SELF;

    /**
     * Constructor for the StatItem class
     * @param name 
     * @param description 
     * @param value 
     * @param stat_to_impact 
     */
    constructor(name: string, description: string, value: number, stat_to_impact: keyof Stats, value_to_impact: number, item_range: itemRange = itemRange.SELF) {
        super(name, description, value, true, false)
        this.stat_to_impact = stat_to_impact
        this.value_to_impact = value_to_impact
        this.item_range = item_range
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

    /**
     * Getter for the item_range property
     * @returns the item range
     * @see itemRange
     */

    public getItemRange(): itemRange {
        return this.item_range
    }

    // METHODS

    /**
     * Method to apply the stat item to a game entity
     * @param use - the entity to apply the stat item to
    */
    public async use(target: GameEntity) : Promise<void> {

        let original_stat = target.getStats().getProperty(this.stat_to_impact)
        console.log(`${original_stat}`)
        let final_stat = original_stat + this.value_to_impact
        console.log(`${final_stat}`)
        let max_stat = 0;

        switch (this.stat_to_impact) {
            case "HP":
                max_stat = target.getStats().getProperty("MAX_HP")
                if (this.value_to_impact > 0)
                    final_stat = (final_stat > max_stat) ? max_stat : final_stat
                else
                    final_stat = (final_stat < 0) ? 0 : final_stat
                break;
            case "MP":
                max_stat = target.getStats().getProperty("MAX_MP")
                if (this.value_to_impact > 0)
                    final_stat = Math.min(final_stat, max_stat)
                else
                    final_stat = Math.max(final_stat, 0)
            default:
                break;
        }
        target.getStats().setProperty(this.stat_to_impact, final_stat)
        if (this.value_to_impact > 0)
            console.log(`${target.getName()} has gained ${this.value_to_impact} ${this.stat_to_impact}`)
        else
            console.log(`${target.getName()} has lost ${this.value_to_impact} ${this.stat_to_impact}`)
        if ((this.stat_to_impact == "HP") && (final_stat <= 0))
            console.log(`${target.getName()} has died!`)
        await waitTime(2)
    }
}

export default ConsumableItem