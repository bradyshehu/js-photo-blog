const apiUri = "https://lanciweb.github.io/demo/api/pictures/";
const memoriesEl = document.getElementById("memories");
const bigImageEl = document.getElementById("open-image");
axios

  .get(apiUri)

  .then((responsesArray) => {
    let generatedHTml = ``;
    responsesArray.data.forEach((response) => {
      const { id, title, date, url } = response;
      // GENERO L'HTML DINAMICAMENTE E LO AGGIUNGO IN PAGINA
      generatedHTml += `
      <div class="col-xl-4 col-md-6 col-sm-12">
        <div id="section-${id}" class="section p-3 bg-white text-dark">
          <div class="section-img">
          <img
          src="${url}"
          alt="${title}"
          width="100%"
          />
          <img src="./img/pin.svg" alt="pin" id="pin" />
          </div>
          <div class="section-text pt-3">
            <p class="text-muted">${date}</p>
            <h3>${title}</h3>
          </div>
        </div>
      </div>
      `;
    });
    memoriesEl.innerHTML = generatedHTml;
    // PRENDO NODO DAL HTML GENERATO
    const sectionsEl = document.querySelectorAll(".section");

    // ADDEVENTLISTENER SUL CLICK DELLA SEZIONE PER INGRANDIRE IMMAGINE

    sectionsEl.forEach((section) => {
      section.addEventListener("click", () => {
        const currentUrlImage = document
          .querySelector(`#${section.id} img`)
          .getAttribute("src");

        // LAYOVER DELL'IMAGINE APERTA
        const openHtml = `
        <button id="close-button" class="btn btn-light fs-5">Chiudi</button>
        <div class="text-center m-5">
          <img src="${currentUrlImage}" alt="open-image" width="800px" />
        </div>
        `;
        bigImageEl.innerHTML = openHtml;
        bigImageEl.classList.toggle("d-none");
        section.classList.toggle("d-none");

        // BOTTONE DI CHIUSURA DEL LAYOVER DELL'IMMAGINE
        const closeButtonEl = document.getElementById("close-button");
        closeButtonEl.addEventListener("click", () => {
          bigImageEl.classList.toggle("d-none");
          section.classList.toggle("d-none");
        });
      });
    });
  });
