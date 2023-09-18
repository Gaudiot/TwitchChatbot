import 'dotenv/config'
import 'dotenv-defaults/config'
import connect from './connect';
import { ChatUserstate } from 'tmi.js';

// Create a client with our options
const execute = async () => { 
    const client = await connect();

    // Register our event handlers (defined below)
    client.on('message', onMessageHandler);
    client.on('connected', onConnectedHandler);
    
    // Connect to Twitch:
    client.connect();
    
    // Called every time a message comes in
    function onMessageHandler (target: string, context: ChatUserstate, msg: string, self: boolean) {
      if (self) { return; } // Ignore messages from the bot
    
      // Remove whitespace from chat message
      const commandName = msg.trim();
    
      // If the command is known, let's execute it
      if (commandName === '!dice') {
        const num = rollDice();
        client.say(target, `You rolled a ${num}`);
        console.log(`* Executed ${commandName} command`);
      }else if(commandName === "!mir4"){
        client.say(target, `Aqui está tudo funcionando`)
      } else {
        console.log(`* Unknown command ${commandName}`);
      }
    }
}

// Function called when the "dice" command is issued
function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr: string, port: number) {
  console.log(`* Connected to ${addr}:${port}`);
}

execute();
