import {injectable, inject} from 'tsyringe';

import BotService from "../../../services/botService";
import IRaffle from '../../../misc/raffle/IRaffle';

@injectable()
class RaffleJoin {
    constructor(
        @inject('BotService')
        private botService: BotService,

        @inject('Raffle')
        private raffle: IRaffle
    ){};

    public execute(){
        const username = this.botService.getUserInfo().username;

        this.raffle.addUser(username);
    }
}

export default RaffleJoin