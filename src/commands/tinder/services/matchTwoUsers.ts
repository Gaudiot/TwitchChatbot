import { inject, injectable } from "tsyringe";

import BotService from "../../../services/botService";

import DefaultGenerator from "../utils/DefaultGenerator";

import INumberGenerator from "../utils/INumberGenerator";

@injectable()
class MatchTwoUsers {
    constructor(
        @inject('BotService')
        private botService: BotService
    ){}
    execute(username1: string, username2: string){
        const numberGenerator: INumberGenerator = new DefaultGenerator();
        const matchValue = numberGenerator.generateNumber(0, 100);

        this.botService.sendResponse(`${username1} and ${username2} have a connexion of ${matchValue}%`);
    }
}

export default MatchTwoUsers;