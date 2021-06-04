let cuerpoTabla= document.getElementById("estadisticas");
let listaOrdenada = []
fetch("https://api.football-data.org/v2/competitions/2014/standings", {
    method: "GET",
    headers: {
        "X-Auth-Token": "716998be260e41f58ef46b66b0029257",
        }
})
    .then(response => {
        return response.json();
    })
    .then(info => {
        let statement = info.standings[0].table;
    for (let i = 0; i < statement.length; i++) {
        let escudoEquipo = statement[i].team.id; 
        let equipo = statement[i].team.name; 
        let partidosJugados = statement[i].playedGames;
        let golesAFavor = statement[i].goalsFor;
        let media =  golesAFavor / partidosJugados ;
        let mediaRounded = Math.round(media * 10) /10;
        let actualizaciones = {
            escudo: escudoEquipo,
            nombre: equipo,
            PJ: partidosJugados,
            GF: golesAFavor,
            mediaGoles: mediaRounded,
        };
        listaOrdenada.push(actualizaciones);
        }
        let topFive = listaOrdenada.sort((a, b) => {
            return b.mediaGoles - a.mediaGoles;
        });   
        console.log(topFive);
            for (let i = 0; i < 5; i++) {
                let fila = document.createElement("tr");
                fila.innerHTML=`<td>${[i+1]}</td>
                <td><img class="escudos" src="https://crests.football-data.org/${topFive[i].escudo}.svg"></td>
                <td>${topFive[i].nombre}</td>
                <td>${topFive[i].PJ}</td>
                <td>${topFive[i].GF}</td>
                <td>${topFive[i].mediaGoles}</td>`;
                cuerpoTabla.appendChild(fila);
            }
        })

        .catch(error => console.log(error))