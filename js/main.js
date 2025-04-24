const apiUri = "https://lanciweb.github.io/demo/api/pictures/";
const memoriesEl = document.getElementById("memories");

axios

  .get(apiUri)

  .then((responsesArray) => {
    let generatedHTml = ``;
    responsesArray.data.forEach((response) => {
      const { id, title, date, url } = response;
      generatedHTml += `
      <div class="col-xl-4 col-md-6 col-sm-12">
        <div id="card-${id}" class="section p-3 bg-white text-dark">
          <div class="section-img">
            <img src="./img/pin.svg" alt="pin" id="pin" />
            <img
              src="${url}"
              alt="test"
              width="100%"
            />
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
    const sectionEl = document.querySelector(".section.p-3.bg-white.text-dark");
    sectionEl.addEventListener("click", function (e) {
      e.preventDefault();
      alert("ciao");
    });
  });
