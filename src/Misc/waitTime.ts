// Purpose: Waits for a specified amount of time in seconds.

async function waitTime(time_seconds: number) : Promise<void> {
    return new Promise(resolve => setTimeout(resolve, time_seconds * 1000));
}

export default waitTime;