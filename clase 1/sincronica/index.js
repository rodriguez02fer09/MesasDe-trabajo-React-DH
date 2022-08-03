const lista = ["pelis1", "pelis2", "pelis3", "pèlis4"]

document.getElementById("root").innerHTML = `<ul>${lista.map((pelis) => `<li>${pelis} </li>`).join("")} </ul>`