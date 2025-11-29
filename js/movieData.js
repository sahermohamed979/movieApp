import { displayMovie } from "./displayMovie.js";
import { topZero } from "./scroll.js";
export async function getMovie() {
  let response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
    { method: "GET" }
  );
  let data = await response.json();
  displayMovie(data.results.length, data.results);
}

$(".nowPlaying").on("click", async function () {
  $(".holder").fadeOut(200);
  let response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
    { method: "GET" }
  );
  let data = await response.json();
  displayMovie(data.results.length, data.results);
  topZero();
  $(".holder").fadeIn(500);
});

$(".popular").on("click", async function () {
  $(".holder").fadeOut(200);
  let response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
    { method: "GET" }
  );
  let data = await response.json();
  displayMovie(data.results.length, data.results);
  topZero();
  $(".holder").fadeIn(500);
});

$(".topRated").on("click", async function () {
  $(".holder").fadeOut(200);
  let response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
    { method: "GET" }
  );
  let data = await response.json();
  displayMovie(data.results.length, data.results);
  topZero();
  $(".holder").fadeIn(500);
});
$(".trending").on("click", async function () {
  $(".holder").fadeOut(200);
  let response = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
    { method: "GET" }
  );
  let data = await response.json();
  displayMovie(data.results.length, data.results);
  topZero();
  $(".holder").fadeIn(500);
});
$(".upcoming").on("click", async function () {
  $(".holder").fadeOut(200);
  let response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
    { method: "GET" }
  );
  let data = await response.json();
  displayMovie(data.results.length, data.results);
  topZero();
  $(".holder").fadeIn(500);
});

$("#search").on("keyup", async function () {
  let name = $(this).val();

  if (name.trim() === "") {
    getMovie();
    return;
  }
  let response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${name}&api_key=eba8b9a7199efdcb0ca1f96879b83c44`,
    { method: "GET" }
  );
  let data = await response.json();
  displayMovie(data.results.length, data.results);
  topZero();
});
