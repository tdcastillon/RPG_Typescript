/**
 * Enum for SkillType
 * @readonly
 * @enum {number}
*/
enum skillType {
    'OFFENSIVE', // 0 - Offensive Skills are used to deal damage to the enemy
    'BUFFS', // 1 - Buffs are used for Buffs, Debuffs, and other effects
    'HEALING', // 2 - Healing Skills are used to restore the team's health
    'UTILITY' // 3 - Utility Skills are used for other effects
}

export default skillType;