 var myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
 const addFilm = document.querySelector(".add-film"),
 img = document.querySelector(".image"),
 title = document.querySelector(".title"),
 date = document.querySelector(".date");
 let filmCheck;
  addFilm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (addFilm.getAttribute("id") === "changeFilm") {
      let film = JSON.parse(localStorage[filmCheck]);
      if (film.title != title.value) {
        localStorage.removeItem(film.title);
        film.img = img.value;
        film.title = title.value;
        film.date = date.value;
        loadFilmJSON(title.value, film);
      } else {
        film.img = img.value;
        film.title = title.value;
        film.date = date.value;
        loadFilmJSON(title.value, film);
      }
    } else if (addFilm.getAttribute("id") === "addFilm") {
      const films = {};
      if (
        !checkFormsFilmAdd(
          title.value
        )
      )
        return;
      films.img = img.value;
      films.title = title.value;
      films.date = date.value;
      films.inFavourite = false;
      loadFilmJSON(title.value, films);
    }
    loadFilm();
    myModal.hide();
    event.target.reset();
  });
  function checkFormsFilmAdd(title) {
      if (title && !localStorage.getItem(title)) {
            return true;
      } else alert("Такой фильм уже добавлен");
  }
  function loadFilmJSON(key, films) {
    localStorage.setItem(key, JSON.stringify(films));
  }
  function loadFilm() {
    document.querySelector(".main_2").innerHTML = "";
    let i = 0;
    for (let key in localStorage) {
      i++;
      if (!localStorage.hasOwnProperty(key)) {
        continue;
      }
      let div = document.createElement("div");
      div.classList.add("card", "mb-3");
      document.querySelector(".main_2").append(div);
      let item = JSON.parse(localStorage[key]);
      div.innerHTML = `<div class="row g-0 items">
                                <div class="col-md-2">
                                    <img src="img/${item.img.split('\\').pop().split('/').pop()}" class="img-fluid rounded-start"/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${item.title}</h5>
                                        <p class="card-text"><small class="text-muted">Дата выхода фильма: ${item.date}</small></p>
                                        <div class="btn-group mt-4" role="group" aria-label="Basic checkbox toggle button group">
                                        <input type="checkbox" class="btn-check film-favourite" id="btncheck${i}"  autocomplete="off" ${item.inFavourite ? "checked" : ""} />
                                        <label class="btn btn-outline-dark" for="btncheck${i}">Избранное</label>
                                    </div>
                                        <div class="dropdown">
                                          <button class="btn btn-outline-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 20">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                      </svg>
                    </button>
                    <ul class="dropdown-menu">
                      <li><button type="button" class="change-film btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Редактировать</button></li>
                      <li><button type="button" class="delete btn btn-outline-dark">Удалить</button></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`;
    }
  }
  document.addEventListener("click", (event) => {
    if (!event.target.classList.contains("delete")) return;
    let parent = event.target.closest(".items");
    localStorage.removeItem(parent.querySelector(".card-title").textContent);
    loadFilm();
  });
  document.addEventListener("click", (event) => {
    if (!event.target.classList.contains("change-film")) return;
    let parent = event.target.closest(".items");
    document.querySelector(".modal-title").textContent = "Редактировать фильм";
    document.querySelector(".btn-film").value = "Редактировать фильм";
    let film = JSON.parse(
      localStorage[parent.querySelector(".card-title").textContent]
    );
    title.value = film.title;
    date.value = film.date;
    filmCheck = film.title;
    addFilm.setAttribute("id", "changeFilm");
    loadFilm();
  });
  loadFilm();
  document.querySelector(".btn-add-film").addEventListener("click", () => {
    document.querySelector(".modal-title").textContent = "Добавить фильм";
    document.querySelector(".btn-film").value = "Добавить фильм";
    addFilm.setAttribute("id", "addFilm");
  });
  document.addEventListener("change", (event) => {
    if (!event.target.classList.contains("film-favourite")) return;
    let parent = event.target.closest(".items");
    let item = JSON.parse(
      localStorage[parent.querySelector(".card-title").textContent]
    );
    item.inFavourite = event.target.checked;
    loadFilmJSON(item.title, item);
  });
  document.addEventListener("click", (event) => {
    if (!event.target.classList.contains("btn-film-close")) return;
    event.target.closest(".add-film").reset();
  });
  document.addEventListener("click", (event) => {
    if (!event.target.classList.contains("btn-close")) return;
    event.target.parentElement.nextElementSibling.firstElementChild.reset();
  });
