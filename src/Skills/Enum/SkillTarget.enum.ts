enum skillTarget {
    SELF, // 0 - Self Skills are used to target the player,
    SINGLE_ENEMY, // 1 - Single Enemy Skills are used to target a single enemy
    MULTI_ENEMY, // 2 - Multi Enemy Skills are used to target multiple enemies
    ALL_ENEMIES, // 3 - All Enemies Skills are used to target all enemies
    SINGLE_ALLY, // 4 - Single Ally Skills are used to target a single ally
    MULTI_ALLY, // 5 - Multi Ally Skills are used to target multiple allies
    ALL_ALLIES, // 6 - All Allies Skills are used to target all allies
    ALL // 7 - All Skills are used to target all entities
}

export default skillTarget;