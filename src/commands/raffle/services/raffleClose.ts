import {injectable, inject} from 'tsyringe';

import ICommandsRepository from "../../../database/ICommandsRepository";
import BotService from "../../../services/botService";
import IRaffle from '../../../misc/raffle/IRaffle';

@injectable()
class RaffleClose {
    constructor(
        @inject('CommandsRepository')
        private commandsRepository: ICommandsRepository,

        @inject('BotService')
        private botService: BotService,

        @inject('Raffle')
        private raffle: IRaffle
    ){};

    public execute(){
        const raffleName = this.raffle.getRaffleCode();

        this.raffle.deactivate();

        this.commandsRepository.deactiveByName(raffleName);
        this.botService.sendResponse(`The raffle was closed. Waiting for results.`);
    }
}

export default RaffleClose