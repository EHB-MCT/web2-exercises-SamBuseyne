"use strict"

export default class Team {
    constructor(team, trainer){
        this.teamName = team;
        this.trainer = trainer;
        this.roster = [];
    }



    describe(){
       let names = [];
       this.roster.forEach(ele => names.push(ele.name));

       return `Team ${this.teamName} with trainer ${this.trainer}
       has the following pokemons: ${[...names]}`;
    }


    addPokemon(p){
        let message = {
            value: '',
            type: 'ERROR'
        };


        if(this.roster.length > 6){
            message.value = 'The roster is full!';
            return message;
        }

        if(this.roster.find(ele => ele.id == p.id)){
            message.value = 'This pokemon is already part of your roster';
            return message;
        }

        this.roster.push(p);
        message.value = `The pokemon ${p.name} has been succesfully added to the team!`;
        message.type = 'SUCCES';
        return message;
    }

}



