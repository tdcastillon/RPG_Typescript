import clc from "cli-color";
import Party from "../../Party/Party";
import Hero from "../Hero";
import { prompt } from "enquirer";

async function askHeroEquipment(party: Party, hero: Hero) {
    let display_menu = true;
    let question = {
        type: "select",
        name: "action",
        message: "What do you want to do?",
        choices: ["Change Equipment", "Back"]
    }

    while (display_menu) {
        try {
            let answer: {action: string} = await prompt(question);

            switch(answer.action) {
                case "Back":
                    display_menu = false;
                    break;
                default:
                    console.log(clc.red("Not implemented yet"));
                    break;
            }
        } catch (e: any) {
            console.log(clc.red(e.message))
            display_menu = false;
        }
    }
}

export default askHeroEquipment;