import TinderController from "./tinder.controller";

function TinderRouter(message: string) {
    const tinderController = new TinderController();

    const regexMatchTwoUsers = RegExp(/^(\w+)(?:\W+)(\w+)(?:.*)?/);
    const matchTwoUsers = message ? message.match(regexMatchTwoUsers) : false;
    if(matchTwoUsers){
        const [, username1, username2] = matchTwoUsers;

        tinderController.two(username1, username2);
        return;
    }
    
    const regexMatchOneUser = RegExp(/^(\w+)(?:.*)?/);
    const matchOneUser = message ? message.match(regexMatchOneUser) : false;
    if(matchOneUser){
        const [, username1] = matchOneUser;

        tinderController.one(username1);
        return;
    }

    tinderController.zero();
};

export default TinderRouter;