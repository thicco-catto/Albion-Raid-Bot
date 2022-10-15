export class Command{
    slashCommand;
    response;

    constructor(slashCommand, response){
        this.slashCommand = slashCommand;
        this.response = response
    }
}
