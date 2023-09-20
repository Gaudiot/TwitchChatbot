import { randomUUID } from "crypto";

export default class Command {
    id: String;
    name: String;
    type: 'MASTER' | 'MESSAGE' | 'COUNTER'

    command(name: string, type: 'MASTER' | 'MESSAGE' | 'COUNTER'){
        this.id = randomUUID();
        this.name = name;
        this.type = type;
    };
};