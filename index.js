const API_URL = "https://digimon-api.vercel.app/api/digimon"
const digimonApi = document.getElementsByClassName("contenedor")[0];
let arrayDigimon = [];

document.addEventListener("DOMContentLoaded", () => {
 fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    arrayDigimon = data;
    visualizarDigimon();
  })
  .catch(error => {
    console.error("Error:", error);
  });
});

function visualizarDigimon() {
  let htmlContentApi = "";
  for (let i = 0; i < arrayDigimon.length; i++) {
      let digimon = arrayDigimon[i];

     htmlContentApi += `
                <div class="row">
                    <div class="col-3">
                        <img src="${digimon.img}"  class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${digimon.name}</h4>
                        </div>
                        <p class="mb-1">${digimon.level}</p>
                    </div>
                </div> `
    }
    digimonApi.innerHTML = htmlContentApi;
};
