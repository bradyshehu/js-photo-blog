const apiUri = "https://lanciweb.github.io/demo/api/pictures/";
const memoriesEl = document.getElementById("memories");

axios

  .get(apiUri)

  .then((responsesArray) => {
    let generatedHTml = ``;
    responsesArray.data.forEach((response) => {
      const { id, title, date, url } = response;
      generatedHTml += `
            <div class="col-4">
          <div class="section p-3 bg-white text-dark">
            <div class="section-img">
              <img src="./img/pin.svg" alt="pin" id="pin" />
              <img
                src="${url}"
                alt="test"
                width="100%"
              />
            </div>
            <div class="section-text py-3">
                <p>${date}</p>
                <p>${title}</p>
            </div>
          </div>
        </div>
    `;
    });
    memoriesEl.innerHTML = generatedHTml;
  });
