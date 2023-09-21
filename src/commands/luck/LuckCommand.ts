import Command from "../../database/entities/Command";

class LuckCommand extends Command{
    private active: boolean;

    constructor(name: string){
        super(name, "LUCKY");
        this.active = true;
    }

    public setActive(state: boolean){
        this.active = state;
    }
}

export default LuckCommand;