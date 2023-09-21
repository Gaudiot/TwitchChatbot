import { ChatUserstate } from "tmi.js";
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

    public execute(code: string){
        const command: LuckCommand = new LuckCommand(code);

        this.commandsRepository.create(command);
        this.botService.sendResponse(`comando criado luck com ${code}`);
    }
}

export default LuckCreate