import {injectable, inject} from 'tsyringe';

import BotService from "../../../services/botService";
import IRaffle from '../../../misc/raffle/IRaffle';

@injectable()
class RaffleWinner {
    constructor(
        @inject('BotService')
        private botService: BotService,

        @inject('Raffle')
        private raffle: IRaffle
    ){};

    public execute(){
        const isRaffleActive: boolean = this.raffle.isActive();

        if(isRaffleActive){
            const broadcaster: string = "gaudiot";
            this.botService.sendResponse(`${broadcaster} please close the raffle before choosing winner. Type (!raffle close)`);
        }else{
            const usernameWinner = this.raffle.pickWinner();
            
            this.botService.sendResponse(`${usernameWinner} is the winner. Congratulations!`);
        }

    }
}

export default RaffleWinner