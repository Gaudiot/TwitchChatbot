import { inject, injectable } from "tsyringe";

import ICommandsRepository from "../database/ICommandsRepository";
import CommandsRouter from "./router/routes";
import BotService from "../services/botService";

interface ICommand{
    name: string;
    args: string;
}

@injectable()
class CommandHandler{
    constructor(
        @inject('CommandsRepository')
        private commandsRepository: ICommandsRepository,

        @inject('BotService')
        private botService: BotService
    ){};

    private async validateCommandExecution(commandName: string): Promise<boolean>{
        const command = await this.commandsRepository.findByName(commandName);
        if(!command) return false;

        const { role } = this.botService.getUserInfo();
        
        return (command.isActive() && command.hasMinimumRole(role));
    }

    async execute(commandToExecute: string | ICommand): Promise<void>{
        if(typeof commandToExecute == 'string'){
            const commandRegex = RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/);
            const commandMatch = commandToExecute.match(commandRegex);
            if(!commandMatch) return;

            const [, name, args] = commandMatch;

            await this.execute({
                name,
                args
            });
        }else{
            const validCommand = await this.validateCommandExecution(commandToExecute.name);
            if(!validCommand) return;
            
            CommandsRouter(commandToExecute);
        }
    }
}

export default CommandHandler;