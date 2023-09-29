import CustomRouter from "../../created_commands/router/custom.routes";
import RaffleRouter from "../raffle/raffle.router";

interface ICommand{
    name: string;
    args: string;
}

function CommandsRouter({name, args}: ICommand){
    switch(name){
        case "raffle":
            RaffleRouter(args);
            break;
        case "tinder":
            break;
        case "timer":
            break;
        default:
            CustomRouter(name, args)
            break;
    }
}

export default CommandsRouter;