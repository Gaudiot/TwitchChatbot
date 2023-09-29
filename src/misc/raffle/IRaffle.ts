interface IRaffle {
    addUser(username: string, quantity?: number): boolean;
    setNewRaffle(raffleName: string): void;
    getRaffleCode(): string;
    pickWinner(): string;
    activate(): void;
    deactivate(): void;
};

export default IRaffle;