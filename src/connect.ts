import { client } from 'tmi.js';
import twitchApi from './services/twitchApi';

interface ITwitchTokenResponse {
    access_token: string;
}

const connect = async () => {
    try{
        const {data: tokenData} = await twitchApi.post<ITwitchTokenResponse>('/token', {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            code: process.env.AUTHORIZATION_CODE,
            grant_type: 'authorization_code',
            redirect_uri: 'http://localhost:3000'
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        )
        const {access_token} = tokenData;
        process.env.AUTH_TOKEN = `oauth:${access_token}`
    }catch(err){
        console.log("[ERR]: ", err);
    }

    // Define configuration options
    const opts = {
        identity: {
            username: process.env.USERNAME,
            password: process.env.AUTH_TOKEN
        },
        channels: [
            'gaudiot'
        ]
    };

    const twitchClient = new client(opts);

    return twitchClient;
}

export default connect;