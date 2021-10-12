"Use strict";


window.onload = function () {
    async function getData(url){
        let response = await fetch(url);
        let data = await  response.json();
        console.log(data);
        document.getElementById("card-title").innerHTML = `${data.Title}`;
        document.getElementById("card-text").innerHTML = `${data.Plot}`;
        document.getElementById("Director").innerHTML = `${data.Director}`;
        document.getElementById("Runtime").innerHTML = `${data.Runtime}`;
        document.getElementById("Year").innerHTML = `${data.Year}`;
        document.getElementById("image").innerHTML = `<img src="${data.Poster}" id="image" class="card-img" alt="...">`;
        return data



    }
    document.getElementById("button").addEventListener("click", e => {
        e.preventDefault();
        let movieTitle = document.getElementById('inputTitle').value;
        getData(`http://www.omdbapi.com/?t=${movieTitle}&apikey=3d9f5461&`)
    })

    function counter(){
        document.getElementById("counterButton").addEventListener('click', event => {
            console.log("check")
        })

    }

}

