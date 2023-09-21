import {injectable, inject} from 'tsyringe';

import ICommandsRepository from "../../../database/ICommandsRepository";
import BotService from "../../../services/botService";

@injectable()
class LuckClose {
    constructor(
        @inject('CommandsRepository')
        private commandsRepository: ICommandsRepository,

        @inject('BotService')
        private botService: BotService
    ){};

    public execute(commandName: string){
        this.commandsRepository.deactiveByName(commandName);
        this.botService.sendResponse(`The ${commandName} draw was closed. Waiting for results.`);
    }
}

export default LuckClose