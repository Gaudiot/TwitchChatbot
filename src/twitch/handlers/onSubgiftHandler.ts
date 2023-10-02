import { SubGiftUserstate, SubMethods } from "tmi.js";

// Called every time a user gives a subgift
function onSubgiftHandler (channel: string, username: string, streakMonths: number, recipient: string, methods: SubMethods, userstate: SubGiftUserstate){

}

export default onSubgiftHandler;