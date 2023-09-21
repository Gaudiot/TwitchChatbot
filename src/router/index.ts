import { MasterRouter } from "../commands/router/routes";
import ICommandsRepository from "../database/ICommandsRepository";
import Command from "../database/entities/Command";

import { container } from "tsyringe";

export default async function commandsRouter(msg: string): Promise<void>{
    const commandsRepository = container.resolve<ICommandsRepository>('CommandsRepository');

    let commandName: string = getCommandName(msg);
    const command: Command | undefined = await commandsRepository.findByName(commandName);

    if(!command || !command.isActive()) return;

    // 'MASTER' | 'MESSAGE' | 'COUNTER' | 'LUCKY'
    switch(command.getType()){
        case "MASTER":
            // asdf();
            MasterRouter(msg);
            break;
        case "MESSAGE":
            // asdf();
            break;
        case "COUNTER":
            // asdf();
            break;
        case "LUCKY":
            // asdf();
            break;
        default:
            // asdf();
            break;
    }
}

function getCommandName(msg: string): string{
    const command = msg.split(" ")[0];

    return command;
}