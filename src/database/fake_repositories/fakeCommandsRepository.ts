import ChatRole from "../../shared/enums/chatRoles.enum";
import ICommandRepository from "../ICommandsRepository";
import Command from "../entities/Command";

class FakeCommandsRepository implements ICommandRepository {
    commandsRepository: Command[] = [
        new Command(
            "raffle",
            "MASTER",
            ChatRole.Broadcaster
        ),
        new Command(
            "tinder",
            "MASTER"
        )
    ];

    async create(command: Command): Promise<Command> {
        this.commandsRepository.push(command);

        return command;
    };

    async findByName(name: string): Promise<Command | undefined> {
        const command = this.commandsRepository.find((command) => command.name == name);

        return command;
    }

    removeByName(commandName: string): void {
        const commandIndex = this.commandsRepository.findIndex((command) => command.name === commandName);

        if(commandIndex != -1){
            this.commandsRepository.splice(commandIndex, 1);
        }
    }

    async deactiveByName(commandName: string): Promise<Command | undefined> {
        const command = await this.findByName(commandName);

        if(!command) return command;

        command.deactivate();
        return command;
    }

    async isActiveByName(commandName: string): Promise<boolean> {
        const command = await this.findByName(commandName);
        if(!command) return false;

        return command.isActive();
    }
}

export default FakeCommandsRepository;