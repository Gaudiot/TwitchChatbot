import RaffleRouter from "../raffle/raffle.router";
import TinderRouter from "../tinder/tinder.router";
import CustomRouter from "../../created_commands/router/custom.routes";

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
            TinderRouter(args);
            break;
        case "timer":
            break;
        default:
            CustomRouter(name, args)
            break;
    }
}

export default CommandsRouter;