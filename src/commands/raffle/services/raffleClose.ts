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
        const commandName = this.raffle.getRaffleCode();

        const isRaffleActive = this.raffle.active;

        if(!isRaffleActive) return;
        this.raffle.deactivate();

        this.commandsRepository.deactiveByName(commandName);
        this.botService.sendResponse(`The raffle was closed. Waiting for results.`);
    }
}

export default RaffleClose