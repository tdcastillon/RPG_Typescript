import skillType from "../Enum/SkillType.enum";
import skillTarget from "../Enum/SkillTarget.enum";
import GameEntity from "../../Game/GameEntity";
import waitTime from "../../Misc/waitTime";

class Skill {
    public _name: string;
    public description: string = "No description available.";
    public hasCost: boolean = false;

    constructor(name: string, public skillTarget: skillTarget, cost = false, public skillType: skillType) {
        this._name = name;
        this.hasCost = cost;
    }

    // methods

    public async useSkill(user: GameEntity, target: GameEntity) : Promise<void> {
        await waitTime(2);
    }

    // Getters

    public getName() : string {
        return this._name;
    }

    public getSkillType() : skillType {
        return this.skillType;
    }

    public getSkillTarget() : skillTarget {
        return this.skillTarget;
    }

    public getDescription() : string {
        return this.description;
    }

    public getHasCost() : boolean {
        return this.hasCost;
    }

    // Setters

    public setDescription(description: string) : void {
        this.description = description;
    }

}

export default Skill;