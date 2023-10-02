import { container } from 'tsyringe';
import { SubMethods, SubUserstate } from 'tmi.js';

import BotService from '../../services/botService';

const botService = container.resolve<BotService>('BotService');

// Called every time a user subscribe
function onSubscriptionHandler (channel: string, username: string, methods: SubMethods, message: string, userstate: SubUserstate){
    
}

export default onSubscriptionHandler;