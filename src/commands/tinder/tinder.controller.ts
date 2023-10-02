import {container} from 'tsyringe';

import MatchZeroUsers from './services/matchZeroUsers';
import MatchOneUser from './services/matchOneUser';
import MatchTwoUsers from './services/matchTwoUsers';

class TinderController{
    public zero(): void{
        const matchZeroUsers = container.resolve(MatchZeroUsers);

        matchZeroUsers.execute();
    }

    public one(username: string): void{
        const matchOneUser = container.resolve(MatchOneUser);

        matchOneUser.execute(username);
    }
    
    public two(username1: string, username2: string): void{
        const matchTwoUsers = container.resolve(MatchTwoUsers);

        matchTwoUsers.execute(username1, username2);
    }
}

export default TinderController;