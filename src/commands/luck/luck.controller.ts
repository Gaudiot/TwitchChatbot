import {container} from 'tsyringe';
import LuckCreate from './services/luckCreate';

class LuckController{
    public create(message: string): void{
        const parsedMessage = message.split(" ");
        parsedMessage.splice(0, 2);

        const newMessage = parsedMessage.join(" ");

        const luckCreate = container.resolve(LuckCreate);

        luckCreate.execute(newMessage);
    }
}

export default LuckController;