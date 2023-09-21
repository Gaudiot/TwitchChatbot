import Command from "./entities/Command";

export default interface ICommandsRepository{
    create(command: Command): Promise<Command>;
    findByName(name: string): Promise<Command | undefined>;
    removeByName(command: string): void;
    deactiveByName(commandName: string): Promise<Command | undefined>;
}