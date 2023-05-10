import axios from 'axios';

const twitchApi = axios.create({
    baseURL: 'https://id.twitch.tv/oauth2/'
});

export default twitchApi;