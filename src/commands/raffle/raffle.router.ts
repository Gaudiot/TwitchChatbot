import RaffleController from "./raffle.controller";

function RaffleRouter(message: string) {
    const subcommand: string = message.split(" ")[1];
    const raffleController = new RaffleController();
    
    switch(subcommand){
        case 'create':
            raffleController.create(message);
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