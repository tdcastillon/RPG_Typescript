import { prompt } from "enquirer";

/**
 * @async
 * @returns {Promise<void>}
 */
async function pressContinue(): Promise<void> {
    console.log("Press any key to continue");
    const questions = [
      {
        type: "input",
        name: "continue",
        message: "Press any key to continue",
      },
    ];
    await prompt(questions);
}

export default pressContinue;