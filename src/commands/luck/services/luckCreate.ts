import {injectable, inject} from 'tsyringe';

import LuckCommand from "../LuckCommand";

import ICommandsRepository from "../../../database/ICommandsRepository";
import BotService from "../../../services/botService";

@injectable()
class LuckCreate {
    constructor(
        @inject('CommandsRepository')
        private commandsRepository: ICommandsRepository,

        @inject('BotService')
        private botService: BotService
    ){};

    public execute(commandName: string){
        const command: LuckCommand = new LuckCommand(commandName);

        this.commandsRepository.create(command);
        this.botService.sendResponse(`Opened new draw, use !${commandName} to join.`);
    }
}

export default LuckCreate