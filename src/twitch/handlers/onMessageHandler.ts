import { ChatUserstate } from "tmi.js";
import { container } from 'tsyringe';

import BotService from '../../services/botService';
import commandsRouter from "../../router";

const COMMAND_CHAR = '!';
const botService = container.resolve<BotService>('BotService');

// Called every time a message comes in
function onMessageHandler (target: string, context: ChatUserstate, message: string, self: boolean): void {
  if (self) return; // Ignore messages from the bot
  const commandRegex = RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/);
  const commandMatch = message.match(commandRegex);

  if(!commandMatch) return;
  const [, command, args] = commandMatch;

  botService.setAttributes({
    target,
    context
  });
  
  // Remove whitespace from chat message
  const commandName = message.trim();
  if(commandName.charAt(0) != COMMAND_CHAR) return;
  message = removeCommandChar(message);
  
  commandsRouter(message);
}

function removeCommandChar(message: string): string{
  return message.substring(1);
}

export default onMessageHandler;