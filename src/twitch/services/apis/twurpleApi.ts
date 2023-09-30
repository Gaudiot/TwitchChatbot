import { ApiClient } from "@twurple/api";
import { StaticAuthProvider } from "@twurple/auth";
import { ChatClient } from "@twurple/chat";

const CLIENT_ID = process.env.CLIENT_ID;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

if(!CLIENT_ID || !ACCESS_TOKEN) {
    throw new Error();
}

const authProvider = new StaticAuthProvider(CLIENT_ID, ACCESS_TOKEN);

const apiClient = new ApiClient({authProvider});

apiClient.chat.getChatters('gaudiot');

