import { container } from "tsyringe";

import RaffleJoin from "../raffle/services/raffleJoin";

import ICommandsRepository from "../../database/ICommandsRepository";

async function CustomRouter(name: string, args: string){
    const commandsRepository = container.resolve<ICommandsRepository>('CommandsRepository');

    const command = await commandsRepository.findByName(name);
    if(!command) return;

    const commandType = command.getType();

    switch(commandType){
        case 'raffle':
            const raffleJoin = container.resolve(RaffleJoin)
            raffleJoin.execute();
            break;
        default:
            break;
    }
}

export default CustomRouter;