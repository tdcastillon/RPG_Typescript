import util from 'util';
import clc from "cli-color";
import GameEntity from '../../Game/GameEntity';

/**
 * Class representing an item
*/

class Item {
    private name: string = ''
    private description: string = ''
    private value: number = 0

    /**
     * Check if an item is either usable or equipable
    */
    private is_usable : boolean = false;
    private is_equipable : boolean = false;

    /**
     * Constructor for the Item class
     * @param name - the name of the item
     * @param description - the description of the item
     * @param value - the value of the item
     * @param is_usable - if the item can be use or not
     * @param is_equipable - if the item can be equiped or not
     */

    constructor(name: string, description: string, value: number, is_usable: boolean, is_equipable: boolean) {
        this.name = name
        this.description = description
        this.value = value
        this.is_usable = is_usable
        this.is_equipable = is_equipable
    }

    /**
     * Getter for the name property
     * @returns the name of the item
     */

    public getName(): string {
        return this.name
    }

    /**
     * Getter for the description property
     * @returns the description of the item
     */

    public getDescription(): string {
        return this.description
    }

    /**
     * Getter for the value property
     * @returns the value of the item
    */

    public getValue(): number {
        return this.value
    }

    /**
     * Setter for the value property
     * @param value - the value of the item
     */

    public setValue(value: number): void {
        this.value = value
    }

    /**
     * Getter for the is_usable property
     * @returns the is_usable property of the item
    */

    public getIsUsable() : boolean {
        return this.is_usable
    }

    /**
     * Getter for the is_equipable property
     * @returns the is_equipable property of the item
    */

    public getIsEquipable() : boolean {
        return this.is_equipable
    }

    public use(target: GameEntity) : void {}

    /**
     *  Custom inspect method for the enemy
     * @param {any} depth - The depth of the inspection
     * @param {any} options - The inspection options
     * @returns {string} A string representation of the enemy
    */

    [util.inspect.custom](depth: any, options: any) {
        return clc.yellow(`${this.getName()}`)
    }
}

export default Item