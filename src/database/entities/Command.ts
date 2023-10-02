import { randomUUID } from "crypto";
import ChatRole from "../../shared/enums/chatRoles.enum";

export default class Command {
    private id: String;
    name: String;
    private type: string
    private active: boolean = true;
    private permissionRole: ChatRole;

    constructor(name: string, type: string, permissionRole: ChatRole = ChatRole.Watcher){
        this.id = randomUUID();
        this.name = name;
        this.type = type;
        this.permissionRole = permissionRole;
    };

    public hasMinimumRole(userRole: ChatRole){
        return (userRole >= this.permissionRole);
    }

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