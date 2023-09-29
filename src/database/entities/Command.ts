import { randomUUID } from "crypto";

export default class Command {
    private id: String;
    name: String;
    private type: string
    private active: boolean = true;

    constructor(name: string, type: string){
        this.id = randomUUID();
        this.name = name;
        this.type = type;
    };

    public getType(): string{
        return this.type;
    }

    public isActive(): boolean{
        return this.active;
    }

    public deactivate(): void{
        this.active = false;
    }
};