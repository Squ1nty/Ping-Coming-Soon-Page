let emailInput = document.getElementById("emailInput");
let errorText = document.getElementById("errorText");
let submitBtn = document.getElementById("submitBtn");
let emailForm = document.getElementById("emailForm");

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  emailInput.classList.remove("successState");
  emailInput.classList.remove("errorState");
  errorText.classList.remove("errorState");

  errorText.textContent = "";

  if(!emailInput.checkValidity()){
    if(emailInput.validity.typeMismatch){
      errorText.textContent = "Please provide a valid email address";
    }
    else if(emailInput.validity.valueMissing){
      errorText.textContent = "Required";
    }
    errorText.classList.add("errorState");
    emailInput.classList.add("errorState");
    return;
  }
  else{
    console.log("Success!");
    emailInput.classList.add("successState");
  }
});