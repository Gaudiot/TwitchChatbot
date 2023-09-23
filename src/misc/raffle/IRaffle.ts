interface IRaffle {
    active: boolean;

    addUser(username: string): boolean;
    getRaffleCode(): string;
    isActive(): boolean;
    pickWinner(): string;
    activate(): boolean;
    deactivate(): boolean;
};

export default IRaffle;