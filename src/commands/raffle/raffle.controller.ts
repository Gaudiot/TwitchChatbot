import {container} from 'tsyringe';
import RaffleCreate from './services/raffleCreate';
import RaffleClose from './services/raffleClose';
import RaffleWinner from './services/raffleWinner';

class RaffleController{
    public create(message: string): void{
        const raffleCreate = container.resolve(RaffleCreate);

        const messageRegex = RegExp(/^([a-zA-Z0-9]+)$/);
        const messageMatch = message.match(messageRegex);
        if(!messageMatch) return;

        raffleCreate.execute(message);
    }

    public close(): void{
        const raffleClose = container.resolve(RaffleClose);

        raffleClose.execute();
    }

    public winner(): void{
        const raffleWinner = container.resolve(RaffleWinner);

        raffleWinner.execute();
    }
}

export default RaffleController;