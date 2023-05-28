const listaTitulos = document.querySelector("#contenedor-titulos");
const numeros = [1, 2, 3, 4, 5, 6];
const titulos = ["Batman", "Green lantern", "Superman", "Wonder woman", "Flash", "Aquaman"];

for (let i = 0; i < numeros.length; i++) {
    listaTitulos.innerHTML += `<h2>${titulos[i]}</h2>`;
}