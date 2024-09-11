import Job from "../Job/Class/Job";
import util from 'util';
import clc from "cli-color";
import GameEntity from "../Game/GameEntity";
import waitTime from "../Misc/waitTime";
import Stats from "../Stats/Stats";
import InitStats from "../Stats/InitStats";
import EquipableItem from "../Items/Class/EquipableItem";
import EquipementType from "../Items/Enum/equipementType";
import accessoryType from "../Items/Enum/accessoryType";

/**
 * Class representing a hero in the game
 * @extends GameEntity
*/

class Hero extends GameEntity {
  /**
   *  The hero's job
   * @public
   */
  public _job: Job;

  public aditional_stats: Stats = new Stats({
    HP: 0,
    MAX_HP: 0,
    MP: 0,
    MAX_MP: 0,
    ATK: 2,
    DEF: 0,
    MAT: 0,
    MDF: 0,
    EXP: 0,
    FULL_EXP: 0,
    LVL: 0,
  } as InitStats);

  public final_stats: Stats = new Stats({
    HP: 0,
    MAX_HP: 0,
    MP: 0,
    MAX_MP: 0,
    ATK: 2,
    DEF: 0,
    MAT: 0,
    MDF: 0,
    EXP: 0,
    FULL_EXP: 0,
    LVL: 0
  } as InitStats);


  // Equipments
  private weapon: EquipableItem | null = null;
  private armor: EquipableItem | null = null;
  private accessories : (EquipableItem | null)[] = [null, null, null, null]
  
  /**
   *  Constructor for the Hero class
   * @param name The hero's name
   * @param startingJob The hero's starting job
   */

  constructor(name: string, startingJob: Job) {
    super(name, startingJob.getBasedStats(), startingJob.getAllStats());
    this._job = startingJob;
    console.log(`Welcome ` + clc.green(`${this.getName()}`) + ` ! You are a ` + clc.yellow(`${this._job.getName()}`) + `.`);
  }
  
  /**
   *  Custom inspect method for the hero, used for logging and debugging
   * @param depth The inspect depth
   * @param options The inspect options
   * @return A string representation of the hero
   */
  [util.inspect.custom](depth: any, options: any) {
    return clc.green(`${this.getName()}`) + ', a ' + clc.yellow(`${this._job.getName()}`) + ' of lv ' + clc.red(`${this.getStats().getProperty('LVL')}`);
  }
  
  /**
   *  Levels up the hero
   * @param new_level The new level
   */
  public levelUp(new_level: number) {
    this.getStats().levelUp(new_level, this._job.getMultiplier(), this.getBasedStats());
  }

  /**
   * Gain XP function
   * @param xp the xp gained by the entity
  */

  public async gainXP(xp: number){
    this.getStats().setProperty('EXP', this.getStats().getProperty('EXP') + xp);
    let full_exp = this.getStats().getProperty('FULL_EXP');
    if(this.getStats().getProperty('EXP') >= full_exp){
        this.getStats().setProperty('EXP', this.getStats().getProperty('EXP') - full_exp);
        this.levelUp(this.getStats().getProperty('LVL') + 1);
        console.log(`Congratulations ${this.getName()} ! You are now level ${this.getStats().getProperty('LVL')} !`);
        waitTime(2)
    }
  }
  
  /**
   *  Getter for the hero's name, with green coloring
   * @return The hero's name
  */
  public getName(): string {
    return clc.green(`${this._name}`);
  }

  /**
   *  Getter for the hero's job, with yellow coloring
   * @return The hero's job
  */

  getStats(): Stats {
    let job_stats = this._job.getAllStats();
    for (let key in job_stats) {
      let _key = key as keyof Stats;
      this.final_stats.setProperty(_key, this.getBasedStats().getProperty(_key) + this.aditional_stats.getProperty(_key));
    }
    return this.final_stats;
  }

  // STAT EQUIPMENT FUNCTIONS

  /**
   * Add stats to the hero when equipping an item
   * @param equipment The equipment to add the stats from
   * @return void
  */
  private addStats(equipment: EquipableItem) {
    let stats = equipment.getEquipmentStats();
    let key: keyof Stats;
    for (key in stats)
      this.aditional_stats.setProperty(key, this.aditional_stats.getProperty(key) + stats.getProperty(key));
  }

  /**
   * Remove stats from the hero when unequipping an item
   * @param equipment The equipment to remove the stats from
   * @return void
  */
  private removeStats(equipment: EquipableItem) {
    let stats = equipment.getEquipmentStats();
    let key: keyof Stats;
    for (key in stats)
      this.aditional_stats.setProperty(key, this.aditional_stats.getProperty(key) - stats.getProperty(key));
  }

  // EQUIP FUNCTIONS

  private setWeapon(weapon: EquipableItem) : boolean {
    if (weapon.getEquipmentType() == EquipementType.WEAPON) {
      if (this.weapon != null) {
        this.removeStats(this.weapon);
        this.weapon.setOwner("");
      }
      this.weapon = weapon;
      this.addStats(weapon);
      this.weapon.setOwner(this.getName());
    } else {
      console.log("This item is not a weapon");
      return false
    }
    return true
  }

  private setArmor(armor: EquipableItem) : boolean {
    if (armor.getEquipmentType() == EquipementType.ARMOR) {
      if (this.armor != null) {
        this.removeStats(this.armor);
        this.armor.setOwner("");
      }
      this.armor = armor;
      this.addStats(armor);
      this.armor.setOwner(this.getName());
    } else {
      console.log("This item is not an armor");
      return false
    }
    return true
  }

  private setAccessory(accessory: EquipableItem) : boolean {
    if (accessory.getEquipmentType() == EquipementType.ACCESSORY) {
      let type = accessory.getEquipmentSubtype() as accessoryType;
      if (this.accessories[type] != null) {
        this.removeStats(this.accessories[type] as EquipableItem)
        this.accessories[type].setOwner("");
      }
      this.accessories[type] = accessory;
      this.addStats(accessory);
      this.accessories[type].setOwner(this.getName());
    } else {
      console.log("This item is not an accessory");
      return false
    }
    return true
  }

  /**
   * Equip an item to the hero
   * @param item - The item to equip to the hero
   * @returns {boolean} - True if the item was equipped, false otherwise
   */

  public equipItem(item: EquipableItem) : boolean {
    switch (item.getEquipmentType()) {
      case EquipementType.WEAPON:
        return this.setWeapon(item);
      case EquipementType.ARMOR:
        return this.setArmor(item);
      case EquipementType.ACCESSORY:
        return this.setAccessory(item);
      default:
        console.log("This item is not equipable");
        return false;
    }
  }

  // GETTER AND SETTER FOR EQUIPMENT

  public getWeapon() : EquipableItem | null {
    return this.weapon;
  }

  public getArmor() : EquipableItem | null {
    return this.armor;
  }

  public getAccessories() : (EquipableItem | null)[] {
    return this.accessories;
  }
}

export default Hero;