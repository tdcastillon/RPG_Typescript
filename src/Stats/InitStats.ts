/**
 * Interface for the initial stats of the player
 * 
 * @interface InitStats
 * @member {number} HP - The current health points of the player
 * @member {number} MAX_HP - The maximum health points of the player
 * @member {number} MP - The current mana points of the player
 * @member {number} MAX_MP - The maximum mana points of the player
 * @member {number} ATK - The attack power of the player
 * @member {number} DEF - The defense power of the player
 * @member {number} MAT - The magic attack power of the player
 * @member {number} MDF - The magic defense power of the player
 * @member {number} EXP - The current experience points of the player
 * @member {number} FULL_EXP - The experience points required to level up
 * @member {number} LVL - The current level of the player
 */
interface InitStats {
    HP: number;
    MAX_HP: number;
    MP: number;
    MAX_MP: number;
    ATK: number;
    DEF: number;
    MAT: number;
    MDF: number;
    EXP: number;
    FULL_EXP: number;
    LVL: number;
}

export default InitStats;