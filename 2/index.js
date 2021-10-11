'Use strict';

import Team from "../2/Team.js";

let list = [];
let pokemonDataList = [];
let team = new Team("PokeGo", "Sam Buseyne");


function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => {
            return response.json();
        })
        .then(data => {
            list = data.results;
            list.forEach(e => {
                fetch(`${e.url}`)
                    .then(response => {
                        return response.json();
                    })
                    .then(list => {
                        pokemonDataList.push(list);
                    });
            })
        })
}

window.onload = function () {

    fetchPokemon();
    setTimeout(buildList, 3000);

    function buildList() {

        let html = '';
        pokemonDataList.sort(function(a,b){
            return a.id - b.id;
        });


        for(let p of pokemonDataList){
            html += `<article class="pokemonArticle">
            <figure class="pokemonFigure">
                <img src="${p.sprites.front_default}" alt="">
            </figure>
            <div class="pokemonInfo">
                <h2>${p.name}</h2>
                <div class="pokemonTypes">
                    <p>Type 1</p>
                    <p>Type 2</p>
                </div>
            </div>
            <div class="addToTeamButton">
            <a href="#" id="${p.id}" class="btn btn-primary ">Add to team</a>
            </div>
        </article>`

        }
        document.getElementById('sectionList').innerHTML = html;

        document.querySelectorAll('.btn').forEach(item =>{
            item.addEventListener('click', event => {
                let id = event.target.id;

                fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
                    .then(response => response.json())
                    .then(data => {
                        team.roster.push(data.results[id-1].name);
                        team.describe();
                    })
                let p = pokemonDataList.find(ele => ele.id == id);

                let message = team.addPokemon(p);
                refreshTeam(message);
            })
        })
    }

    refreshTeam();
}

function refreshTeam(m) {

    document.getElementById('team').innerHTML = team.describe();

    if(m){
        let messageBox = document.createElement('div');
        messageBox.classList.add('message');
        messageBox.setAttribute('role', 'alert');

        if(m.type == 'SUCCES'){
            messageBox.classList.add('message-succes');
        }else{
            messageBox.classList.add('message-danger');
        }

        messageBox.innerText = m.value;

        document.getElementById('message').innerHTML = '';
        document.getElementById('message').appendChild(messageBox);
    }
}