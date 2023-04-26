
#  Twitch Chatbot
This is my personal attempt to make a general usage twitch chat bot

#  Setup
##  **Pre-requisites**

- Have the latest version of [Node](https://nodejs.org/en/download)

##  Tutorial
Obs.: I made a video tutorial in case you want to watch it. Just click [here](https://youtu.be/KjFVCrE7vUg).

##  STEP-BY-STEP

1) Register your bot (follow this official [tutorial](https://dev.twitch.tv/docs/authentication/register-app/)).

2) Download this repository to your local computer.

3) Inside the root folder of the repository type `npm i` at the console.

4) (Optional) For an additional layer of safety create a file called `.env` at the root folder and copy the content from `.env.defaults` to it. (If you don't want to create this file, just use the `.env.defaults`)

5) At the `.env` file set the `CLIENT_ID` to your own client_id, set the `CLIENT_SECRET` to your own client_secret, and set the `USERNAME` to your bot's username.

6) Access the following link (accepting anything that appears) replacing the <your_client_id> with your own client_id:

  

``` bash

https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=<your_client_id>&redirect_uri=http://localhost:3000&scope=chat%3Aread+chat%3Aedit&state=c3ab8aa609ea11e793ae92361f002671

```

It will redirect you to an error page, then copy the url and withdraw the code in it. (example bellow).

http:/localhost:3000/?code=**4wlxvmfdq9egsokrv79o8des1vtzwz**&scope=chat%3Aread+chat%3Aedit&state=c3ab8aa609ea11e793ae92361f002671

7) With the code, set it in yout `.env` file as the `AUTHORIZATION_CODE` variable.

8) In the file `connect.js` at line 31 insert the name of your channel in place of gaudiot (remember to insert the name between __' '__ ).

9) Now you can run your bot, at the terminal run the command `node bot.js`.
