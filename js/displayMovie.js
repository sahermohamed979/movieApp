export function displayMovie(index, movie) {
  let movieContainer = document.querySelector(".holder");

  movieContainer.innerHTML = "";

  for (let i = 0; i < index; i++) {
    const stars = generateStars(movie[i].vote_average);
    let movieHTML = ` <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="item position-relative overflow-hidden">
            <div class="card-img overflow-hidden">
              <img
                src="https://image.tmdb.org/t/p/w500${movie[i].poster_path}"
                alt="Movie"
                class="w-100"
              />
            </div>
            <div
              class="des overflow-hidden position-absolute animate__animated"
            >
              <h2
                class="title text-white animate__animated animate__slideOutLeft"
              >
                ${movie[i].title}
              </h2>
              <p
                class="des-p text-white animate__animated animate__slideOutLeft"
              >
                ${movie[i].overview}
              </p>
              <p
                class="text-white date animate__animated animate__slideOutLeft"
              >
                Release Date<span> : ${movie[i].release_date}</span>
              </p>
              <h3 class="animate__animated animate__slideOutLeft stars">
          
                ${stars}
              </h3>
              <h3
                class="rate animate__animated animate__slideOutLeft text-white"
              >
                ${movie[i].vote_average.toFixed(1)}
              </h3>
            </div>
          </div>
        </div>
    `;
    movieContainer.innerHTML += movieHTML;
  }
}

function generateStars(value) {
  let stars = "";
  if (value < 1) {
    stars = `<i class="fa-solid fa-star text-muted fs-6"></i>`;
  } else if (value < 2) {
    stars = `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
  } else if (value < 3) {
    stars = `<i class="fa-solid fa-star text-warning fs-6"></i>`;
  } else if (value < 4) {
    stars = `<i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
  } else if (value < 5) {
    stars = `<i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-solid fa-star text-warning fs-6"></i>`;
  } else if (value < 6) {
    stars = `<i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
  } else if (value < 7) {
    stars = `<i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-solid fa-star text-warning fs-6"></i>`;
  } else if (value < 8) {
    stars = `<i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
  } else if (value < 9) {
    stars = `<i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-solid fa-star text-warning fs-6"></i>`;
  } else if (value < 10) {
    stars = `<i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
  } else {
    stars = `<i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-solid fa-star text-warning fs-6"></i>`;
  }
  return stars;
}
