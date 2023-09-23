import RaffleRouter from "../raffle/raffle.router";

export function MasterRouter(message: string){
    let command: string = getCommandName(message);
    
    switch(command){
        case "raffle":
            RaffleRouter(message);
            break;
        case "tinder":
            break;
        case "timer":
            break;
        default:
            break;
    }
}

function getCommandName(message: string): string{
    const command = message.split(" ")[0];

    return command;
}