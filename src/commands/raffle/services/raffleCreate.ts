import {injectable, inject} from 'tsyringe';

import RaffleCommand from "../RaffleCommand";

import ICommandsRepository from "../../../database/ICommandsRepository";
import BotService from "../../../services/botService";

@injectable()
class RaffleCreate {
    constructor(
        @inject('CommandsRepository')
        private commandsRepository: ICommandsRepository,

        @inject('BotService')
        private botService: BotService
    ){};

    public execute(commandName: string){
        const command: RaffleCommand = new RaffleCommand(commandName);

        this.commandsRepository.create(command);
        this.botService.sendResponse(`Opened new raffle, use !${commandName} to join.`);
    }
}

export default RaffleCreate