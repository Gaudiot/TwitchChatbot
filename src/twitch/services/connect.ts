import tmi from 'tmi.js';
import TmiApi from './apis/tmiApi';

const connect = async () => {
    const twitchApi = new TmiApi();

    // try{
    //     const accessToken = await twitchApi.getAccessToken();
    //     process.env.AUTH_TOKEN = `oauth:${accessToken}`
    // }catch(err){
    //     console.log("[ERR]: ", err);
    // }

    // Define configuration options
    const opts: tmi.Options = {
        identity: {
            username: process.env.USERNAME,
            password: process.env.AUTH_TOKEN
        },
        channels: [
            'gaudiot'
        ],
        connection: {
            reconnect: true
        }
    };

    const client = new tmi.client(opts);

    return client;
}

export default connect;