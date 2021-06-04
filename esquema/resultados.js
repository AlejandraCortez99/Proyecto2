let nombreEquipo = document.getElementById("equipoInsertado");
let partidosGanados = document.getElementById("victorias");
let partidosEmpatados = document.getElementById("empates");
let partidosPerdidos = document.getElementById("derrotas");
let inputsRadio = document.getElementsByClassName("input-radio");
let tbodyAll = document.getElementById("resultados");

let buscar = (event) => {
    event.preventDefault();
    obtenerInformacion();
}
let obtenerInformacion = () => {
    fetch("https://api.football-data.org/v2/competitions/2014/matches", {
        method: "GET",
        headers: {
            "X-Auth-Token": "716998be260e41f58ef46b66b0029257",
        }
    })
        .then((response) => {
            return response.json();
        })
        .then((info) => {
            let partidosAll = info.matches;
            let equipo = nombreEquipo.value;
            obtenerPartidos(partidosAll, equipo);

        })
        .catch(error => console.log(error))
}
let obtenerPartidos = (todosLosPartidos, equipoBuscado) => {
    let partidos = [];
    if (equipoBuscado == "") {
        printPartidosBuscados(todosLosPartidos);
    } else {
        for (let i = 0; i < todosLosPartidos.length; i++) {
            if (todosLosPartidos[i].homeTeam.name == equipoBuscado || todosLosPartidos[i].awayTeam.name == equipoBuscado) {
                partidos.push(todosLosPartidos[i]);
            }
        }
        filtradoSegunInput(partidos);
    }
};
let filtradoSegunInput = (partidosEquipo) => {
    let partidosFiltrados = [];
    for (let i = 0; i < partidosEquipo.length; i++) {
        if (partidosGanados.checked == true && ((partidosEquipo[i].score.winner == "HOME_TEAM" && partidosEquipo[i].homeTeam.name == nombreEquipo.value) || (partidosEquipo[i].score.winner == "AWAY_TEAM" && partidosEquipo[i].awayTeam.name == nombreEquipo.value))) {
            partidosFiltrados.push(partidosEquipo[i]);
        } else if (
            partidosEmpatados.checked == true && partidosEquipo[i].score.winner == "DRAW") {
            partidosFiltrados.push(partidosEquipo[i]);
        } else if (
            partidosPerdidos.checked == true && ((partidosEquipo[i].score.winner == "AWAY_TEAM" && partidosEquipo[i].awayTeam.name !== nombreEquipo.value) || (partidosEquipo[i].score.winner == "HOME_TEAM" && partidosEquipo[i].homeTeam.name !== nombreEquipo.value))) {
            partidosFiltrados.push(partidosEquipo[i]);
        } else if (
            partidosGanados.checked == false &&
            partidosEmpatados.checked == false &&
            partidosPerdidos.checked == false) {
            partidosFiltrados = partidosEquipo;
        }
    }
    printPartidosBuscados(partidosFiltrados);
};
let printPartidosBuscados = function (newArray) {
    cleanPage();
    console.log(newArray);
    for (let i = 0; i < newArray.length; i++) {
        printPartido(newArray[i]);
    }
}
let printPartido = function (partido) {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${partido.homeTeam.name}</td>
        <td>${partido.score.fullTime.homeTeam} - ${partido.score.fullTime.awayTeam}</td>
        <td>${partido.awayTeam.name}</td>`;
    tbodyAll.appendChild(row);
};
let cleanPage = function () {
    /*nombreEquipo.value = "";
    for (let i = 0; i < inputsRadio.length; i++) {
        inputsRadio[i].checked = false;
    }*/
    tbodyAll.innerHTML = "";
}
obtenerInformacion()