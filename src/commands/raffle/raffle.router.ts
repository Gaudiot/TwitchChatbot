import RaffleController from "./raffle.controller";

function RaffleRouter(message: string) {
    const commandRegex = RegExp(/^([a-zA-Z0-9]+)(?:\W+)?(.*)?/);
    const commandMatch = message.match(commandRegex);
    if(!commandMatch) return;

    const raffleController = new RaffleController();
    
    const [, command, args] = commandMatch;
    switch(command){
        case 'create':
            raffleController.create(args);
            break;
        case 'close':
            raffleController.close();
            break;
        case 'winner':
            raffleController.winner();
            break;
        default:
            break;
    }
};

export default RaffleRouter;