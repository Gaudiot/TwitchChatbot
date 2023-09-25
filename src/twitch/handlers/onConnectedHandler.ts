import { container } from 'tsyringe';

import BotService from '../../services/botService';

const botService = container.resolve<BotService>('BotService');

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr: string, port: number) {
    console.log(`* Connected to ${addr}:${port}`);
    botService.sendTargetlessResponse('bot is up and running');
}

export default onConnectedHandler;