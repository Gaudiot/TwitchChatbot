import { inject, injectable } from "tsyringe";

import BotService from "../../../services/botService";

import DefaultGenerator from "../utils/DefaultGenerator";

import INumberGenerator from "../utils/INumberGenerator";

@injectable()
class MatchZeroUsers {
    constructor(
        @inject('BotService')
        private botService: BotService
    ){}

    execute(){
        const numberGenerator: INumberGenerator = new DefaultGenerator();
        const matchValue = numberGenerator.generateNumber(0, 100);

        const { username } = this.botService.getUserInfo();

        const otherUsername = this.botService.getRandomChatter();

        this.botService.sendResponse(`${username} and ${otherUsername} have a connexion of ${matchValue}%`);
    }
}

export default MatchZeroUsers;