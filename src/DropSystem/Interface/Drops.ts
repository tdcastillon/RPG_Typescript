import Item from "../../Items/Class/Item";

interface Drop {
    item : "Gold" | Item
    quantity: number;
    chances: number;
    level_min: number;
    level_max: number
}

export default Drop;