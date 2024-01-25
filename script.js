const btn = document.querySelector(".notify__btn");
const input = document.querySelector(".notify__input");
const error = document.querySelector(".error-msg");
const suceed = document.querySelector(".suceed-msg");

btn.addEventListener("click", function () {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailRegex.test(input.value.trim().toLowerCase())) {
    error.style.display = "block";
    input.style.borderColor = "red";
  } else {
    input.style.borderColor = "green";
    error.style.display = "none";
    suceed.style.display = "block";
  }
});
