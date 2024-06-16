import Hero from "../Hero/Hero";

/**
 *  Interface for the party
 * @property {Hero} hero - The hero in the party
 * @property {number} position - The position of the hero in the party
 */
interface HeroPosition {
    hero: Hero;
    position: number;
}

/**
 *  Interface for the party
 * 
 * @property {HeroPosition} index - The index of the party
 * @property {number} length - The length of the party
 * @property {number} money - The money the party has
 */
interface Party {
    [index: number]: HeroPosition;
    length: number;
    money: number;
}

export default Party;