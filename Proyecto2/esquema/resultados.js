let tbody = document.getElementById("resultados");

let tarde = matches.matches;
for (let i = 0; i < tarde.length; i++) {

let fila = document.createElement("tr");
fila.innerHTML = `<td>${tarde[i].homeTeam.name}</td><td>${tarde[i].score.fullTime.homeTeam}</td><td>${tarde[i].score.fullTime.awayTeam}</td><td>${tarde[i].awayTeam.name}</td>`; 

tbody.appendChild(fila);
}
console.log(tarde);









