import TinderController from "./tinder.controller";

function TinderRouter(message: string) {
    const tinderController = new TinderController();

    const regexMatchTwoUsers = RegExp(/^(\w+)(?:\W+)(\w+)(?:.*)?/);
    const matchTwoUsers = message.match(regexMatchTwoUsers);
    if(matchTwoUsers){
        const [, username1, username2] = matchTwoUsers;

        tinderController.two(username1, username2);
        return;
    }
    
    const regexMatchOneUser = RegExp(/^(\w+)(?:.*)?/);
    const matchOneUser = message.match(regexMatchOneUser);
    if(matchOneUser){
        const [, username1] = matchOneUser;

        tinderController.one(username1);
        return;
    }

    tinderController.zero();
};

export default TinderRouter;