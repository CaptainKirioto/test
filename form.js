let formData = {
  email: "",
  message: "",
};

const input = document.querySelector("input");
const textarea = document.querySelector("textarea");

const form = document.querySelector(".feedback-form");

form.addEventListener("input", handleInput);
populateText();

function handleInput(event) {
  const key = event.target.name;
  formData[key] = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function populateText() {
  const data = JSON.parse(localStorage.getItem("feedback-form-state"));
  if (!data) {
    return;
  }

  const { email, message } = form.elements;
  email.value = data.email;
  message.value = data.message;
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (input.value === "" || textarea.value === "") {
    alert("Please, fill in all fields");
  } else {
    console.log(formData);
    localStorage.clear();
    form.reset();
  }
}
// const localStorageData = localStorage.getItem("feedback-form-state");
// if (localStorageData) {
//   const savedData = JSON.parse(localStorageData);
//   input.value = savedData.email;
//   textarea.value = savedData.message;
//   Object.assign(formData, savedData);
// }
