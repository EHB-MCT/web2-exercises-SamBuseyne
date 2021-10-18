"Use strict";

let counter = 0;
const fetchUrl = "http://www.omdbapi.com/?s=&apikey=3d9f5461&"

window.onload = function () {

    async function getData(url) {
        let data = await fetch(url);
        return await data.json();
    }


    document.getElementById("button").addEventListener("click", e => {
        e.preventDefault();
        let search = document.getElementById('inputTitle').value;
        let year = document.getElementById("inputYear").value;
        getData(`${fetchUrl}&t=${search}&y=${year}`)
            .then(data => {
                let movieCard = createMovieCard(data);
                addCards(movieCard);
            })
    })

    function createMovieCard(m) {
        return `<div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
            <div class="col-md-4" id="image">
                <img src="${m.Poster}"  class="card-img" alt="${m.Title}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 id="card-title">${m.Title}</h5>
                    <p id="card-text">${m.Plot}</p>
                        <p id="Year">${m.Year}</p>
                        <p id="Director">${m.Director}</p>
                        <p id="Runtime">${m.Runtime}</p>
                        <button type="button" id="addButton" runtime = "${m.Runtime}">+</button>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>`

    document.getElementById("addButton").addEventListener('click', event => {
        event.preventDefault();
        console.log("check")
        timeCounter(m.Runtime);
    })
    
    }


    function addCards(mC) {
        document.getElementById("filmList").innerHTML += mC;
    }

}




function timeCounter(runtime) {
    let time = parseInt(runtime);
    runtime += time
    document.getElementById("runtimeCounter").innerHTML = `${runtime} min`;
}