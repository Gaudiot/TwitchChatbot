import { randomUUID } from "crypto";

export default class Command {
    private id: String;
    name: String;
    private type: 'MASTER' | 'MESSAGE' | 'COUNTER' | 'LUCKY'
    private active: boolean = true;

    constructor(name: string, type: 'MASTER' | 'MESSAGE' | 'COUNTER' | 'LUCKY'){
        this.id = randomUUID();
        this.name = name;
        this.type = type;
    };

    public getType(): string{
        return this.type;
    }

    deactivate(){
        this.active = false;
    }
};