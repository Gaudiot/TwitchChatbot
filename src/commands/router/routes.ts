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
            break;
    }
}

export default CommandsRouter;