import {injectable, inject} from 'tsyringe';

import BotService from "../../../services/botService";
import IRaffle from '../../../misc/raffle/IRaffle';
import ICommandsRepository from '../../../database/ICommandsRepository';

@injectable()
class RaffleWinner {
    constructor(
        @inject('CommandsRepository')
        private commandsRepository: ICommandsRepository,

        @inject('BotService')
        private botService: BotService,

        @inject('Raffle')
        private raffle: IRaffle
    ){};

    public async execute(){
        const raffleName = this.raffle.getRaffleCode();
        const isActive = await this.commandsRepository.isActiveByName(raffleName);

        if(isActive){
            const broadcaster: string = "gaudiot";
            this.botService.sendResponse(`${broadcaster} please close the raffle before choosing winner. Type (!raffle close)`);
        }else{
            const usernameWinner = this.raffle.pickWinner();
            
            this.botService.sendResponse(`${usernameWinner} is the winner. Congratulations!`);
        }

    }
}

export default RaffleWinner