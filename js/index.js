import { navToggle, topZero } from "./scroll.js";

$(".nav-icon").click(navToggle);
import { getMovie } from "./movieData.js";
import { navGetSection } from "./scroll.js";
import { displayMovie } from "./displayMovie.js";
const btn = document.getElementById("btnForm");
import {
  validateInput,
  regexName,
  regexAge,
  regexEmail,
  regexPassword,
  regexPhone,
} from "./getValdtion.js";

getMovie();
displayMovie();
navGetSection();
topZero();
export function loading() {
  $(".loading").fadeOut(2000);
}

$(function () {
  loading();
});

$("#name").on("input", function () {
  validateInput(this, regexName);
});

$("#phone").on("input", function () {
  validateInput(this, regexPhone);
});
$("#email").on("input", function () {
  validateInput(this, regexEmail);
});
$("#age").on("input", function () {
  validateInput(this, regexAge);
});
$("#password").on("input", function () {
  validateInput(this, regexPassword);
});
function test() {
  if (this.value.trim() === "") {
    $(this).next(".error").addClass("invisible");

    this.classList.remove("notVald");
    btn.classList.replace("btn-danger", "form-btn");
    btn.classList.remove("animate__shakeX");
    return;
  }
  if ($("#password").val() === $("#repassword").val()) {
    $(this).next(".error").addClass("invisible");
    this.classList.remove("notVald");
    btn.classList.replace("btn-danger", "form-btn");
    btn.classList.remove("animate__shakeX");
  } else {
    $(this).next(".error").removeClass("invisible");
    this.classList.add("notVald");
    btn.classList.replace("form-btn", "btn-danger");

    btn.classList.add("animate__shakeX");
  }
}

$("#repassword").on("input", test);

const showPassword = document.getElementById("password");

const toggleIcond = document.getElementById("toggleIcon");
$(".showPass").on("click", function () {
  if (showPassword.getAttribute("type") === "password") {
    showPassword.removeAttribute("type", "password");
    showPassword.setAttribute("type", "text");
    toggleIcond.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    showPassword.removeAttribute("type", "text");
    showPassword.setAttribute("type", "password");
    toggleIcond.classList.replace("fa-eye", "fa-eye-slash");
  }
});
