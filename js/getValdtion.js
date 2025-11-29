" use strict";
export const regexName = /^[a-zA-Z\s]{1,36}$/;
export const regexEmail = /^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{3}$/;
export const regexPhone = /^(02)?(01)[0125][0-9]{8}$/;
export const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const regexAge = /^(1[6-9]|[2-9][0-9]|100)$/;
const btn = document.getElementById("btnForm");

export function validateInput(input, regex) {
  const value = input.value.trim();

  if (value === "") {
    input.nextElementSibling.classList.add("invisible");
    input.classList.remove("notVald");
    btn.classList.replace("btn-danger", "form-btn");

    return false;
  }

  if (regex.test(value)) {
    input.classList.remove("notVald");
    input.nextElementSibling.classList.remove("visible");
    input.nextElementSibling.classList.add("invisible");
    btn.classList.replace("btn-danger", "form-btn");
    btn.classList.remove("animate__shakeX");
    return true;
  } else {
    input.classList.add("notVald");
    input.nextElementSibling.classList.remove("invisible");
    input.nextElementSibling.classList.add("visible");
    btn.classList.replace("form-btn", "btn-danger");
    btn.classList.add("animate__shakeX");

    return false;
  }
}
