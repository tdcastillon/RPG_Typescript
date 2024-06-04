import skillType from "../Enum/SkillType.enum";
import skillTarget from "../Enum/SkillTarget.enum";
import GameEntity from "../../Game/GameEntity";
import waitTime from "../../Misc/waitTime";

/**
 *  Class for skills in the game
 * @class Skill
 * @param {string} name - the name of the skill
 * @param {skillTarget} skillTarget - the target of the skill
 * @param {boolean} cost - whether or not the skill has a cost
 * @param {skillType} skillType - the type of the skill
*/
class Skill {
    public _name: string;
    public description: string = "No description available.";
    public hasCost: boolean = false;

    /**
     * Constructor for the Skill class
     * @param name The name of the skill
     * @param skillTarget The target of the skill
     * @param cost Whether or not the skill has a cost
     * @param skillType The type of the skill
    */
    constructor(name: string, public skillTarget: skillTarget, cost = false, public skillType: skillType) {
        this._name = name;
        this.hasCost = cost;
    }

    // methods

    /**
     *  Uses the skill
     * @param user The user of the skill
     * @param target The target of the skill
    */
    public async useSkill(user: GameEntity, target: GameEntity) : Promise<void> {
        await waitTime(2);
    }

    // Getters

    /**
     *  Gets the name of the skill
     * @return The name of the skill
    */
    public getName() : string {
        return this._name;
    }

    /**
     *  Gets the type of the skill
     * @return The type of the skill
     */
    public getSkillType() : skillType {
        return this.skillType;
    }

    /**
     *  Gets the target of the skill
     * @return The target of the skill
     */

    public getSkillTarget() : skillTarget {
        return this.skillTarget;
    }

    /**
     *  Gets the description of the skill
     * @return The description of the skill
    */
    public getDescription() : string {
        return this.description;
    }

    /**
     *  Gets whether or not the skill has a cost
     * @return Whether or not the skill has a cost
    */
    public getHasCost() : boolean {
        return this.hasCost;
    }

    // Setters

    /**
     *  Sets the name of the skill
     * @param name The name of the skill
    */
    public setDescription(description: string) : void {
        this.description = description;
    }

}

export default Skill;