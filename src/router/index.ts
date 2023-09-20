import { ChatUserstate } from "tmi.js";

export default function commandsRouter(target: string, context: ChatUserstate, msg: string): void{
    let command: string = getCommandName(msg);

    switch(command){
        case "mir4":
            asdf();
            break;
        case "dice":
            asdf();
        default:
            asdf();
    }
}

function getCommandName(msg: string): string{
    const command = msg.split("")[0].substring(1);

    return command;
}