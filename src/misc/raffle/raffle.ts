import IRaffle from "./IRaffle";

class Raffle implements IRaffle{
    private raffleCode: string;
    private participants: string[] = [];
    active: boolean = true;

    Raffle(raffleCode: string){
        this.raffleCode = raffleCode;
    };

    getRaffleCode(): string{
        return this.raffleCode;
    }

    isActive(): boolean {
        return this.active;
    }

    addUser(username: string): boolean {
        const userIndex = this.participants.findIndex((user) => user == username);

        if(userIndex != -1) return false;
        
        this.participants.push(username);
        return true;
    }

    pickWinner(): string {
        const quantityParticipant = this.participants.length;
        const winnerIndex = Math.floor(Math.random()*quantityParticipant);

        const winner = this.participants[winnerIndex];
        return winner;
    }

    activate(): boolean {
        this.active = true;
        return true;
    }

    deactivate(): boolean {
        this.active = false;
        return true;
    }
}

export default Raffle;