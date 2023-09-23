import {injectable, inject} from 'tsyringe';

import ICommandsRepository from "../../../database/ICommandsRepository";
import BotService from '../../../services/botService';
import IRaffle from '../../../misc/raffle/IRaffle';

@injectable()
class RaffleJoin {
    constructor(
        @inject('CommandsRepository')
        private commandsRepository: ICommandsRepository,

        @inject('BotService')
        private botService: BotService,

        @inject('Raffle')
        private raffle: IRaffle
    ){};

    public execute(){
        const isRaffleOpen = this.raffle.isActive();

        if(!isRaffleOpen) return;

        const username = this.botService.getUserInfo().username;
        
        const userJoined = this.raffle.addUser(username);
        if(userJoined) this.botService.sendResponse(`${username} joined the raffle.`)
    }
}

export default RaffleJoin