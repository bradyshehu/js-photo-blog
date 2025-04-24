const apiUri = "https://lanciweb.github.io/demo/api/pictures/";
const memoriesEl = document.getElementById("memories");
const bigImageEl = document.getElementById("open-image");
const closeButtonEl = document.getElementById("close-button");
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
              class="memory"
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
    const sectionsEl = document.querySelectorAll(
      ".section.p-3.bg-white.text-dark"
    );

    // ******************* DA SISTEMARE *************************

    // for (i = 0; i < sectionsEl.length; i++) {
    //   const section = sectionsEl[i];
    //   section.addEventListener("click", function (e) {
    //     const imgEl = document.querySelectorAll(".memory");
    //     e.preventDefault();
    //     console.log("ciao");
    //     for (j = 0; j < imgEl.length; j++) {
    //       if ((i = j)) {
    //         section.classList.add("d-none");
    //         bigImageEl.classList.remove("d-none");
    //         bigImageEl.append(imgEl[i]);
    //       }
    //     }
    //   });
    // }
  });

// bigImageEl.append(imgEl)
