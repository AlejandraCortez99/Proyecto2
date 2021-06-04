fetch('https://api.football-data.org/v2/competitions/2014/matches', {
    method: 'GET',
    headers: {
        "X-Auth-Token": "716998be260e41f58ef46b66b0029257",
    },
})
    .then((response) => {
        return response.json();
        })
    .then((info) => {

    });



fetch("https://api.football-data.org/v2/competitions/2014/standings", {
    method: "GET",
    headers: {
        "X-Auth-Token": "716998be260e41f58ef46b66b0029257",
    },
})
    .then((response) => {
        return response.json();
        })
    .then((info) => {
        let equipos = info.standings[0].table; 
        let diezPrimeros = equipos.filter(function (equipo) {
        return (equipo.position < 11);   
        })
    })

let tbody = document.getElementById("resultados");

let partidos = matches.matches;

for (let i = 0; i < partidos[i].length; i++) {
    if(partidos[i].status == "FINISHED") {
    let fila = document.createElement("tr");
    fila.innerHTML = `<td>${partidos[i].homeTeam.name}</td>
    <td><img class="escudos" src="https://crests.football-data.org/${partidos[i].homeTeam.id}.svg}"></td>
    <td>${partidos[i].score.fullTime.homeTeam} - ${partidos[i].score.fullTime.awayTeam}</td>
    <td><img class="escudos" src="https://crests.football-data.org/${partidos[i].awayTeam.id}.svg}"></td>
    <td>${partidos[i].awayTeam.name}</td>`;
    tbody.appendChild(fila);
    }
};

console.log(partidos);
/*JS CLASIFICACION TOTAL*/

let tbodytotal = document.getElementById("clasificacion-total");

let total = puntuaciones.standings[0].table;

let formW = "../media/stick-verde.svg";
let formD = "../media/empate.svg";
let formL = "../media/derrota.svg";

for(let i = 0; i < total.length; i++) {
    let form = total[i].form;
    console.log(form);

    let formString = form.split(",");
    let formIcons = [];
    console.log(formIcons);
    for (let i = 0; i < formString.length; i++) {
        if (formString[i] == "W") {
            formIcons.push(formW);
        } else if (formString[i] == "D") {
            formIcons.push(formD);
        } else if (formString[i] == "L") {
            formIcons.push(formL);
        }
    }

let row = document.createElement("tr");
row.innerHTML = `<td>${total[i].position}</td>
<td><img class="escudos" src="https://crests.football-data.org/${total[i].team.id}.svg"></td>
<td>${total[i].team.name}</td>
<td>${total[i].playedGames}</td>
<td>${total[i].won}</td>
<td>${total[i].draw}</td>
<td>${total[i].lost}</td>
<td>${total[i].goalsFor}</td>
<td>${total[i].goalsAgainst}</td>
<td>${total[i].goalDifference}</td>
<td>${total[i].points}</td>
<td class="lastfive"><img src="${formIcons[0]}">
<img src="${formIcons[1]}">
<img src="${formIcons[2]}">
<img src="${formIcons[3]}">
<img src="${formIcons[4]}"></td>`;

tbodytotal.appendChild(row);

}


let fila = document.createElement("tr");
        fila.innerHTML=`<td></td>
        <td>${actualizaciones.nombre}</td>
        <td>${actualizaciones.PJ}</td>
        <td>${actualizaciones.GF}</td>
        <td>${actualizaciones.mediaGoles}</td>`;
        cuerpoTabla.appendChild(fila);

//Filtros
let obtenerPartidos = partidosAll.filter(busquedaEquipo => {
    return nombreHomeTeam || nombreAwayTeam == busquedaEquipo; 
