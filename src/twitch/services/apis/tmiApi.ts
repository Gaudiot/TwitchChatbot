import twitchApi from "../../../services/twitchApi";

interface IResponse {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: string[];
    token_type: string;
}

const CLIENT_ID = process.env.CLIENT_ID;

class TmiApi{
    async getAuthCode(): Promise<string>{
        const { data } =  await twitchApi.get('/authorize', {
            params: {
                response_type: "code",
                client_id: CLIENT_ID,
                redirect_uri: "http://localhost:3000",
                scope: "chat:read chat:edit",
                state: "c3ab8aa609ea11e793ae92361f002671"
            }
        });

        return "";
    }

    async getAccessToken(): Promise<string>{
        const {data: response} = await twitchApi.post<IResponse>('/token', {
                client_id: CLIENT_ID,
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

        const { access_token } = response;
        return access_token;
    }
}

export default TmiApi;