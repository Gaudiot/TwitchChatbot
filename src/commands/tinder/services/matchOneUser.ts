import { inject, injectable } from "tsyringe";

import BotService from "../../../services/botService";

import DefaultGenerator from "../utils/DefaultGenerator";

import INumberGenerator from "../utils/INumberGenerator";

@injectable()
class MatchOneUser {
    constructor(
        @inject('BotService')
        private botService: BotService
    ){}
    execute(usernameToMatch: string){
        const numberGenerator: INumberGenerator = new DefaultGenerator();
        let matchValue = numberGenerator.generateNumber(0, 100);

        const { username } = this.botService.getUserInfo();

        if(username == 'gaudiot' && usernameToMatch == 'myoliv') matchValue = 100;
        if(username == 'myoliv' && usernameToMatch == 'gaudiot') matchValue = 100;

        this.botService.sendResponse(`${username} and ${usernameToMatch} have a connexion of ${matchValue}%`);
    }
}

export default MatchOneUser;