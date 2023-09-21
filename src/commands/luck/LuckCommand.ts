import Command from "../../database/entities/Command";

class LuckCommand extends Command{
    constructor(name: string){
        super(name, "LUCKY");
    }
}

export default LuckCommand;