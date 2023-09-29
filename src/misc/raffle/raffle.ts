import IRaffle from "./IRaffle";

class Raffle implements IRaffle{
    private raffleCode: string;
    private participants: string[] = [];

    private setRaffleName(raffleName: string){
        this.raffleCode = raffleName;
    }

    Raffle(raffleCode: string){
        this.raffleCode = raffleCode;
    };

    setNewRaffle(raffleName: string): void {
        this.setRaffleName(raffleName);
        this.participants = [];
    }

    getRaffleCode(): string{
        return this.raffleCode;
    }

    addUser(username: string, quantity: number = 1): boolean {
        const userIndex = this.participants.findIndex((user) => user == username);

        if(userIndex != -1) return false;
        
        for(let counter = 0 ; counter < quantity ; counter++){
            this.participants.push(username);
        }
        return true;
    }

    pickWinner(): string {
        const quantityParticipant = this.participants.length;
        const winnerIndex = Math.floor(Math.random()*quantityParticipant);

        const winner = this.participants[winnerIndex];
        return winner;
    }

    activate(): void {
    }

    deactivate(): void {
    }
}

export default Raffle;