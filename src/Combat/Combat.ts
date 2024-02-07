import Enemy from "../Enemy/Class/Enemy";
import pressContinue from "../Misc/pressContinue";
import Party from "../Party/Party";
import playerTurn from "./playerTurn";

class Combat {
    private _party: Party | undefined = undefined;
    private _enemyParty: Array<Enemy> = [];
    private fightEnded: boolean = false;

    constructor(party: Party, enemyParty: Array<Enemy> = []) {
        this._party = party;
        this._enemyParty = enemyParty;
    }

    public async startFight(): Promise<void> {
        while (!this.fightEnded) {
            console.log(this._party, this._enemyParty)
            let party : Party = this._party as Party;
            let enemyParty : Array<Enemy> = this._enemyParty as Array<Enemy>;

            for (let i = 0; i < party.length; i++) {
                this.fightEnded = await playerTurn(i, party, enemyParty); 
            }
        }
    }
}

export default Combat;