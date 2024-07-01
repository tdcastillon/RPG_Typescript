import { prompt } from "enquirer";

/**
 * @async
 * @returns {Promise<void>}
 */
async function pressContinue(): Promise<void> {
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