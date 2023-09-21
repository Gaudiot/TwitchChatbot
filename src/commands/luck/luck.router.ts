import LuckController from "./luck.controller";

function LuckRouter(message: string) {
    const subcommand: string = message.split(" ")[1];
    const luckController = new LuckController();

    switch(subcommand){
        case 'create':
            luckController.create(message);
            break;
        case 'close':
            break;
        case 'winner':
            break;
        default:
            break;
    }
};

export default LuckRouter;