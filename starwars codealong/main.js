let res = {}; let baseURL = "https://swapi.co/api/"
function getInfo(info){
    axios.get(baseURL+info)
    .then(function(result) {
        res = result.data
        document.getElementById("outputinfo").innerHTML = ""
        res.results.forEach(element => {
            document.getElementById("outputinfo").innerHTML += `
            <p><b>Name:</b> ${element.name} </p>
            <p><b>List of films</b></p>
            <ul>
                ${element.films.map((e) => `<li><a href = "${e}">${e}</a></li>`).join("")}
            </ul>
            <hr>
                `
        })
    })

}