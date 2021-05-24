let tbody = document.getElementById("resultados");

let tarde = matches.matches;
for (let i = 0; i < tarde.length; i++) {
    if(tarde[i].status == "FINISHED") {
    let fila = document.createElement("tr");
    fila.innerHTML = `<td>${tarde[i].homeTeam.name}</td><td><img class="escudos" src="https://crests.football-data.org/${tarde[i].homeTeam.id}.svg}"></td>
    <td>${tarde[i].score.fullTime.homeTeam} - ${tarde[i].score.fullTime.awayTeam}</td>
    <td><img class="escudos" src="https://crests.football-data.org/${tarde[i].awayTeam.id}.svg}"></td>
    <td>${tarde[i].awayTeam.name}</td>`; 
    tbody.appendChild(fila);
    }
    
}
console.log(tarde);










