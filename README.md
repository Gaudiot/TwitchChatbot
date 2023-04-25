# TwitchChatbot

This is my personal attempt to make a general usage bot 

## Setup

To start the bot first you need to access from your browser the following link:
```bash
https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=<your_client_id>&redirect_uri=http://localhost:3000&scope=chat%3Aread+chat%3Aedit&state=c3ab8aa609ea11e793ae92361f002671
```

It will redirect you to a non-existent page, but copy the URL and withdraw the **code** and set is in your .env file as the AUTHORIZATION_CODE variable.