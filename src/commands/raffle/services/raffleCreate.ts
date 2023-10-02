import {injectable, inject} from 'tsyringe';

import RaffleCommand from "../RaffleCommand";

import BotService from "../../../services/botService";

import ICommandsRepository from "../../../database/ICommandsRepository";
import IRaffle from '../../../misc/raffle/IRaffle';

@injectable()
class RaffleCreate {
    constructor(
        @inject('CommandsRepository')
        private commandsRepository: ICommandsRepository,

        @inject('BotService')
        private botService: BotService,

        @inject('Raffle')
        private raffle: IRaffle
    ){};

    public execute(raffleName: string){
        const command: RaffleCommand = new RaffleCommand(raffleName);

        this.raffle.setNewRaffle(raffleName)

        this.commandsRepository.create(command);
        this.botService.sendResponse(`Opened new raffle, use !${raffleName} to join.`);
    }
}

export default RaffleCreate