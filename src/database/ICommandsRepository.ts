import Command from "./entities/Command";

export default interface ICommandsRepository{
    create(command: Command): Promise<Command>;
    isActiveByName(commandName: string): Promise<boolean>;
    findByName(name: string): Promise<Command | undefined>;
    removeByName(command: string): void;
    deactiveByName(commandName: string): Promise<Command | undefined>;
}