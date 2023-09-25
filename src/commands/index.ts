import { inject, injectable } from "tsyringe";

import ICommandsRepository from "../database/ICommandsRepository";
import CommandsRouter from "./router/routes";

interface ICommand{
    name: string;
    args: string;
}

@injectable()
class CommandHandler{
    constructor(
        @inject('CommandsRepository')
        private commandsRepository: ICommandsRepository
    ){};

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
            const command = await this.commandsRepository.findByName(commandToExecute.name);

            if(!command || !command.isActive()) return; // verify is command is able to run
            
            CommandsRouter(commandToExecute);
        }
    }
}

export default CommandHandler;