/**
 * Asynchronous function to wait for a specified amount of time.
 * 
 * @param time_seconds The time to wait in seconds.
 * @returns A promise that resolves when the wait time is over.
*/
async function waitTime(time_seconds: number) : Promise<void> {
    return new Promise(resolve => setTimeout(resolve, time_seconds * 1000));
}

export default waitTime;