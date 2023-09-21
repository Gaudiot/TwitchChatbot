import 'dotenv/config'
import 'dotenv-defaults/config'
import 'reflect-metadata';

import './shared/containers/index'

import { ChatUserstate } from 'tmi.js';
import { container } from "tsyringe";

import connect from './connect';
import commandsRouter from './router';
import BotService from './services/botService';

const commandChar = '!';

const botService = container.resolve<BotService>('BotService');

// Create a client with our options
const execute = async () => { 
    const client = await connect();

    botService.setClient(client);

    // Register our event handlers (defined below)
    client.on('message', onMessageHandler);
    client.on('connected', onConnectedHandler);
    
    // Connect to Twitch:
    client.connect();
    
    // Called every time a message comes in
    function onMessageHandler (target: string, context: ChatUserstate, msg: string, self: boolean): void {
      if (self) return; // Ignore messages from the bot
      botService.setAttributes({
        target,
        context
      });

      // Remove whitespace from chat message
      const commandName = msg.trim();
      if(commandName.charAt(0) != commandChar) return;
      msg = removeCommandChar(msg);
      
      commandsRouter(msg);
    }
    
    // Called every time the bot connects to Twitch chat
    function onConnectedHandler (addr: string, port: number) {
      console.log(`* Connected to ${addr}:${port}`);
    }
}

function removeCommandChar(msg: string): string{
  return msg.substring(1);
}

execute();
