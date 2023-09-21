import {container} from 'tsyringe';

import LuckCreate from './services/luckCreate';
import LuckClose from './services/luckClose';
import LuckWinner from './services/luckWinner';

class LuckController{
    public create(message: string): void{
        const commandName = message.split(" ")[2];

        const luckCreate = container.resolve(LuckCreate);

        luckCreate.execute(commandName);
    }

    public close(message: string): void{
        const commandName: string = message.split(" ")[2];

        const luckClose = container.resolve(LuckClose);

        luckClose.execute(commandName);
    }

    public winner(): void{
        const luckWinner = container.resolve(LuckWinner);

        luckWinner.execute();
    }
}

export default LuckController;