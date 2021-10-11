"use strict"

class Team {
    constructor(team, trainer){
        this.teamname = team;
        this.trainer = trainer;
        this.roster = [];
    }



    describe(){
       return `${this.teamname} with trainer ${this.trainer} has these pokemons ${[...this.roster]}`;
    }

}

export default Team

