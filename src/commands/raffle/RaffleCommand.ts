import Command from "../../database/entities/Command";

class RaffleCommand extends Command{
    constructor(name: string){
        super(name, "LUCKY");
    }
}

export default RaffleCommand;