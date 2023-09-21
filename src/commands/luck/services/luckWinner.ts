import {injectable, inject} from 'tsyringe';

import ICommandsRepository from "../../../database/ICommandsRepository";
import BotService from "../../../services/botService";

@injectable()
class LuckWinner {
    constructor(
        @inject('CommandsRepository')
        private commandsRepository: ICommandsRepository,

        @inject('BotService')
        private botService: BotService
    ){};

    public execute(){
        this.botService.sendResponse(`Gaudiot is the winner. Congratulations!`);
    }
}

export default LuckWinner