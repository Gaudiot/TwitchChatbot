import { container } from "tsyringe";
import ICommandsRepository from "../../database/ICommandsRepository";
import FakeCommandsRepository from "../../database/fake_repositories/fakeCommandsRepository";
import BotService from "../../services/botService";

container.registerSingleton<ICommandsRepository>(
    'CommandsRepository',
    FakeCommandsRepository  
);

container.registerSingleton<BotService>(
    'BotService',
    BotService
)