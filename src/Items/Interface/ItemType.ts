enum ItemType {
    WEAPON,  // 0 => representing a weapon like a staff or a sword that can be equiped to a GameEntity
    ARMOR, // 1 => representing a piece of armor like a shield or a chesplate that can be equiped to a GameEntity
    ACCESSORIES, // 2 => representing an accessory like a ring or an eyepatch that can be equiped to a GameEntity
    CONSUMABLE, // 3 => representing an item that can be used during combat
    MISC, // 4 -> representing an item that can't be used during combat like sellable items
}

export default ItemType