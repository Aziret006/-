// Создание и стилизация контейнера формы
const formContainer = document.createElement("div");
formContainer.style.width = "400px";
formContainer.style.margin = "0 auto";
formContainer.style.padding = "20px";
formContainer.style.border = "1px solid #ddd";
formContainer.style.borderRadius = "5px";
formContainer.style.backgroundColor = "#f9f9f9";
formContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
formContainer.style.opacity = "0";
formContainer.style.transform = "translateY(-20px)";
formContainer.style.transition =
  "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
setTimeout(() => {
  formContainer.style.opacity = "1";
  formContainer.style.transform = "translateY(0)";
}, 100);

const labelCardNumber = document.createElement("label");
labelCardNumber.textContent = "CARD NUMBER:";
labelCardNumber.style.marginBottom = "5px";
labelCardNumber.style.display = "block";
formContainer.appendChild(labelCardNumber);

const cardInput = document.createElement("input");
cardInput.type = "text";
cardInput.placeholder = "0000 0000 0000 0000";
cardInput.style.width = "93%";
cardInput.style.padding = "10px";
cardInput.style.marginBottom = "20px";
cardInput.style.border = "1px solid #ccc";
cardInput.style.borderRadius = "4px";
cardInput.style.outlineColor = "#ff8c00";
cardInput.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
formContainer.appendChild(cardInput);

const cardDetailsContainer = document.createElement("div");
cardDetailsContainer.style.display = "flex";
cardDetailsContainer.style.columnGap = "30px";
cardDetailsContainer.style.marginBottom = "20px";

const expiryContainer = document.createElement("div");
expiryContainer.style.width = "40%";

const labelExpiry = document.createElement("label");
labelExpiry.textContent = "EXPIRATION DATE:";
labelExpiry.style.marginBottom = "5px";
labelExpiry.style.display = "block";
expiryContainer.appendChild(labelExpiry);

const expiryInput = document.createElement("input");
expiryInput.type = "text";
expiryInput.placeholder = "MM / YYYY";
expiryInput.style.width = "100%";
expiryInput.style.padding = "10px";
expiryInput.style.border = "1px solid #ccc";
expiryInput.style.borderRadius = "4px";
expiryInput.style.outlineColor = "#ff8c00";
expiryInput.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
expiryContainer.appendChild(expiryInput);

cardDetailsContainer.appendChild(expiryContainer);

const cvcContainer = document.createElement("div");
cvcContainer.style.width = "45.66%";

const labelCVC = document.createElement("label");
labelCVC.textContent = "CVV:";
labelCVC.style.marginBottom = "5px";
labelCVC.style.display = "block";
cvcContainer.appendChild(labelCVC);

const cvcInput = document.createElement("input");
cvcInput.type = "text";
cvcInput.placeholder = "000";
cvcInput.style.width = "100%";
cvcInput.style.padding = "10px";
cvcInput.style.border = "1px solid #ccc";
cvcInput.style.borderRadius = "4px";
cvcInput.style.outlineColor = "#ff8c00";
cvcInput.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
cvcContainer.appendChild(cvcInput);

cardDetailsContainer.appendChild(cvcContainer);

formContainer.appendChild(cardDetailsContainer);

const submitButton = document.createElement("button");
submitButton.textContent = "PAY WITH CARD";
submitButton.style.width = "100%";
submitButton.style.padding = "10px";
submitButton.style.backgroundColor = "#ddd";
submitButton.style.color = "#fff";
submitButton.style.border = "none";
submitButton.style.borderRadius = "4px";
submitButton.style.cursor = "not-allowed";
submitButton.style.transition =
  "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease";
submitButton.disabled = true;
formContainer.appendChild(submitButton);

const inputs = [cardInput, expiryInput, cvcInput];
inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.style.transform = "scale(1.05)";
    input.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  });
  input.addEventListener("blur", () => {
    input.style.transform = "scale(1)";
    input.style.boxShadow = "none";
  });

  input.addEventListener("input", () => {
    let isValid = true;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        isValid = false;
      }
    });

    if (isValid) {
      submitButton.style.backgroundColor = "#ff8c00";
      submitButton.style.cursor = "pointer";
      submitButton.style.transform = "scale(1)";
      submitButton.disabled = false;
    } else {
      submitButton.style.backgroundColor = "#ddd";
      submitButton.style.cursor = "not-allowed";
      submitButton.disabled = true;
    }
  });
});

submitButton.addEventListener("mouseover", () => {
  if (!submitButton.disabled) {
    submitButton.style.transform = "scale(1.05)";
    submitButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  }
});

submitButton.addEventListener("mouseout", () => {
  submitButton.style.transform = "scale(1)";
  submitButton.style.boxShadow = "none";
});

submitButton.addEventListener("click", () => {
  if (!submitButton.disabled) {
    submitButton.style.transform = "scale(0.95)";
    setTimeout(() => {
      submitButton.style.transform = "scale(1)";
      alert("Оплата успешно произведена!");
    }, 100);
  }
});

document.body.appendChild(formContainer);
