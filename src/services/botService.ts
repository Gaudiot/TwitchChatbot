import { ChatUserstate, Client } from "tmi.js";
import ChatRole from "../shared/enums/chatRoles.enum";

interface IBotServiceAttributes {
    target: string;
    context: ChatUserstate;
}

interface IUserInfo {
    id: string;
    broadcasterId?: string;
    username: string;
    mod: boolean;
    subscriber: boolean;
    role: ChatRole
}

class BotService {
    private client?: Client;
    private target?: string;
    private context?: ChatUserstate;
    private chatters: string[] = [];

    public setClient(client: Client){
        this.client = client;
    }

    public setAttributes(attributes: IBotServiceAttributes){
        this.target = attributes.target;
        this.context = attributes.context;
    }

    public sendResponse(message: string): void{
        if(!this.client || !this.target){
            throw new Error("Client OU target com valor nulo");
        }
        this.client.say(this.target, message);
    }

    public addChatter(username: string){
        if(this.chatters.includes(username)) return;
        
        this.chatters.push(username);
    }

    public getRandomChatter(): string{
        const quantity = this.chatters.length;
        if(quantity == 0) return "empty";

        const index = Math.floor(Math.random()*quantity);
        return this.chatters[index];
    }

    public sendTargetlessResponse(message: string): void{
        if(!this.client){
            throw new Error("Client com valor nulo");
        }
        this.client.say("#gaudiot", message);
    }

    private getUserChatRole(): ChatRole{
        if(!this.context || !this.target) return ChatRole.Watcher;
        const { subscriber, mod, username } = this.context;

        if(this.target == `#${username}`) return ChatRole.Broadcaster;
        if(mod) return ChatRole.Moderator;
        if(subscriber) return ChatRole.Subscriber1;

        return ChatRole.Watcher;
    }

    public getUserInfo(): IUserInfo{
        const userInfo: IUserInfo = {
            id: this.context!.id ?? 'uuid',
            username: this.context!.username ?? 'indefinido',
            mod: this.context!.mod ?? false,
            subscriber: this.context!.subscriber ?? false,
            broadcasterId: this.context!["user-id"],
            role: this.getUserChatRole()
        };

        return userInfo;
    }
}

export default BotService;