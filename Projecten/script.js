'Use strict';

//General//

window.onload = function () {
    document.getElementById('OMDbButton').addEventListener('click', e => {
        e.preventDefault('click');
        let Title = document.getElementById('Title').value;
        let year = document.getElementById("Year").value;
        fetch(`http://www.omdbapi.com/?t=${Title}&y=${year}&apikey=3d9f5461&`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                let output = `<div>
                <div>
                    <div>
                        <img src="${data.Poster}">
                    </div>
                    <div>
                        <div>
                            <h5>${data.Title}</h5>
                            <p>${data.Plot}</p>
                            <div><p>Duration: ${data.Runtime}</small></p>
                        </div>
                    </div>
                </div>
            </div>`
                document.getElementById('loadingScreen').innerHTML = output;
            })
    })

    document.getElementById('IdSearch').addEventListener('click', e => {
        e.preventDefault('click');
        let Id = document.getElementById('ImdbId').value;
        console.log(Id);
        fetch(`http://www.omdbapi.com/?i=${Id}&apikey=3d9f5461&`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                let output = `<div>
                <div>
                    <div>
                        <img src="${data.Poster}">
                    </div>
                    <div>
                        <div>
                            <h5>${data.Title}</h5>
                            <p>${data.Plot}</p>
                            <div><p>Duration: ${data.Runtime}</small></p>
                        </div>
                    </div>
                </div>
            </div>`
                document.getElementById('loadingScreen').innerHTML = output;
            })
    })






}
