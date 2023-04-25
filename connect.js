import tmi from 'tmi.js';
import twitchApi from './services/twitchApi.js';

const connect = async () => {
    try{
        const {data: tokenData} = await twitchApi.post('/token', {
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

    const client = new tmi.client(opts);

    return client;
}

export default connect;