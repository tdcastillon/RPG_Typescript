import itemInventory from "../Interface/itemInventory";
import pageInventory from "../Interface/pageInventory";

function getChoices(page: number, inventoryPages: Array<pageInventory>) : string[] {
    let choices: string[] = []

    if (inventoryPages.length === 0)
        return choices

    let findPage = inventoryPages.find((pageInventory: pageInventory) => pageInventory.page === page)
    if (!findPage)
        return choices

    findPage.items.forEach((item: itemInventory) => {
        choices.push(item.item.getName() + ' *' + item.quantity)
    })

    return choices
}

export default getChoices;