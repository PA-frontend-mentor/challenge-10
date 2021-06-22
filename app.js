const inputWrappers = document.querySelectorAll(".input-wrapper");
const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", () => {
  addError();
});

const addError = () => {
  inputWrappers.forEach((input) => {
    if (input.childNodes[1].childNodes[1].value == "" && input.childNodes[1].childNodes.length == 3) {
      const errorImg = document.createElement("div");
      errorImg.className = "error-img";

      const errorText = document.createElement("p");
      errorText.innerText = "This field is required!";

      input.childNodes[1].appendChild(errorImg);
      input.appendChild(errorText);
      input.childNodes[1].childNodes[1].className += " error";
    }
  });
};



inputWrappers.forEach(input => {
  input.childNodes[1].childNodes[1].addEventListener('input', (e) => {

    if(input.childNodes.length == 4) {
      input.removeChild(input.lastChild);
      input.childNodes[1].removeChild(input.childNodes[1].lastChild)
      input.childNodes[1].childNodes[1].className = ''
    }

  })
  
})