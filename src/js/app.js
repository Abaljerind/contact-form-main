/* list yang belum selesai: 
1. error-state [DONE]
2. desktop-view [DONE]
3. success-state [DONE]
*/

document.addEventListener("DOMContentLoaded", function () {
  // declare variable
  const contactForm = document.getElementById("contactForm");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const emailAddress = document.getElementById("email");
  const generalType = document.getElementById("general");
  const supportType = document.getElementById("support");
  const message = document.getElementById("message");
  const agreement = document.getElementById("agree");

  const buttonSubmit = document.querySelector("button[type=submit]");

  const invalidFirstName = document.getElementById("firstNameInvalid");
  const invalidLastName = document.getElementById("lastNameInvalid");
  const invalidEmail = document.getElementById("emailInvalid");
  const invalidQueryType = document.getElementById("queryTypeInvalid");
  const invalidMessage = document.getElementById("messageInvalid");
  const invalidAgree = document.getElementById("agreeInvalid");

  const successState = document.getElementById("success-state");

  // form event
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    if (firstName.value.length === 0 || !isNaN(firstName.value)) {
      invalidFirstName.classList.remove("hidden");
      firstName.classList.remove("valid-input");
      firstName.classList.add("invalid-input");
      isValid = false;
    } else {
      invalidFirstName.classList.add("hidden");
      firstName.classList.add("valid-input");
      firstName.classList.remove("invalid-input");
    }

    if (lastName.value.length === 0 || !isNaN(lastName.value)) {
      invalidLastName.classList.remove("hidden");
      lastName.classList.remove("valid-input");
      lastName.classList.add("invalid-input");
      isValid = false;
    } else {
      invalidLastName.classList.add("hidden");
      lastName.classList.add("valid-input");
      lastName.classList.remove("invalid-input");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailAddress.value)) {
      invalidEmail.classList.remove("hidden");
      emailAddress.classList.remove("valid-input");
      emailAddress.classList.add("invalid-input");
      isValid = false;
    } else {
      invalidEmail.classList.add("hidden");
      emailAddress.classList.add("valid-input");
      emailAddress.classList.remove("invalid-input");
    }

    if (generalType.checked == true || supportType.checked == true) {
      invalidQueryType.classList.add("hidden");
    } else {
      invalidQueryType.classList.remove("hidden");
      isValid = false;
    }

    if (message.value.length === 0) {
      invalidMessage.classList.remove("hidden");
      message.classList.remove("valid-input");
      message.classList.add("invalid-input");
      isValid = false;
    } else {
      invalidMessage.classList.add("hidden");
      message.classList.add("valid-input");
      message.classList.remove("invalid-input");
    }

    if (agreement.checked == true) {
      invalidAgree.classList.add("hidden");
    } else {
      invalidAgree.classList.remove("hidden");
      isValid = false;
    }

    if (isValid) {
      // munculkan modal jika isValid = true
      successState.classList.remove("hidden");

      setTimeout(() => {
        successState.classList.remove("animate-fade-in");
        successState.classList.add("animate-fade-out");
      }, 3000);

      setTimeout(() => {
        successState.classList.add("hidden");
        successState.classList.remove("animate-fade-out");

        // melakukan submit secara manual setelah modal disembunyikan.
        contactForm.submit();
      }, 5000);
    }
  });
});
