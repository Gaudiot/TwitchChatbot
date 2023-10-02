import { Client } from "tmi.js";
import { container } from "tsyringe";

import connect from "./services/connect";
import BotService from "../services/botService";

import onConnectedHandler from "./handlers/onConnectedHandler";
import onMessageHandler from "./handlers/onMessageHandler";
import onSubscriptionHandler from "./handlers/onSubscriptionHandler";
import onCheerHandler from "./handlers/onCheerHandler";
import onSubgiftHandler from "./handlers/onSubgiftHandler";
import onRaidedHandler from "./handlers/onRaidedHandler";
import onRedeemHandler from "./handlers/onRedeemHandler";

const botService = container.resolve<BotService>('BotService');

class Twitch{
    private client: Client;
    
    async init(){
        this.client = await connect();
        botService.setClient(this.client);
    
        this.client.on('connected', onConnectedHandler);
        this.client.on('message', onMessageHandler);
        this.client.on('subscription', onSubscriptionHandler);
        this.client.on('cheer', onCheerHandler);
        this.client.on('subgift', onSubgiftHandler);
        this.client.on('raided', onRaidedHandler);
        this.client.on('redeem', onRedeemHandler);
        
        this.client.connect();
    }
};

export default Twitch;