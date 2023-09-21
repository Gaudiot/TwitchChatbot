import { randomUUID } from "crypto";

export default class Command {
    private id: String;
    name: String;
    private type: 'MASTER' | 'MESSAGE' | 'COUNTER' | 'LUCKY'

    constructor(name: string, type: 'MASTER' | 'MESSAGE' | 'COUNTER' | 'LUCKY'){
        this.id = randomUUID();
        this.name = name;
        this.type = type;
    };

    public getType(): string{
        return this.type;
    }
};