function obtenerDatosPaises() {
  const apiUrl = "https://restcountries.com/v3/all";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      mostrarDatosEnPagina(data);
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });
}

function mostrarDatosEnPagina(data) {
  const resultadoElement = document.querySelector(".resultado");

  const countriesList = document.createElement("ul");

  data.forEach((country) => {
    const countryItem = document.createElement("li");

    countryItem.addEventListener("click", () => {
      mostrarInfoPais(country, resultadoElement);
    });

    countryItem.textContent = country.name.common;

    countriesList.appendChild(countryItem);
  });

  resultadoElement.innerHTML = "";

  resultadoElement.appendChild(countriesList);
}

function mostrarInfoPais(country, resultadoElement) {
  const infoDiv = document.createElement("div");

  const html = `
      <h2>${country.name.common}</h2>
      <p>Capital: ${country.capital}</p>
      <p>Población: ${country.population}</p>
      <p>Región: ${country.region}</p>
      ${country.flag}
  
    `;

  infoDiv.innerHTML = html;

  resultadoElement.innerHTML = "";

  resultadoElement.appendChild(infoDiv);
}

document.addEventListener("DOMContentLoaded", () => {
  obtenerDatosPaises();
});
