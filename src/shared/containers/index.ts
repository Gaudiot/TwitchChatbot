import { container } from "tsyringe";

import ICommandsRepository from "../../database/ICommandsRepository";

import FakeCommandsRepository from "../../database/fake_repositories/fakeCommandsRepository";
import BotService from "../../services/botService";
import IRaffle from "../../misc/raffle/IRaffle";
import Raffle from "../../misc/raffle/raffle";

container.registerSingleton<ICommandsRepository>(
    'CommandsRepository',
    FakeCommandsRepository  
);

container.registerSingleton<BotService>(
    'BotService',
    BotService
)

container.registerSingleton<IRaffle>(
    'Raffle',
    Raffle
)