/*
//////// Capturing DOM /////////////
*/
const dialogNavLinks = document.querySelector("#dialog-nav-links");
const menuToggleButton = document.querySelector(".menu-toggle");
// Modal number 1
const customModal1 = document.querySelector("#custom-modal-1");
const customModalOpenButton1 = document.querySelector(
  "#custom-modal-open-button-1"
);
const customModalCloseButton1 = document.querySelector(
  "#custom-modal-close-button-1"
);
// Modal number 2
const customModal2 = document.querySelector("#custom-modal-2");
const customModalOpenButton2 = document.querySelector(
  "#custom-modal-open-button-2"
);
const customModalCloseButton2 = document.querySelector(
  "#custom-modal-close-button-2"
);

// Other buttons
const button1 = document.querySelector("#dialog-nav-links ul li:nth-child(1)");
const button2 = document.querySelector("#dialog-nav-links ul li:nth-child(2)");
const button3 = document.querySelector("#dialog-nav-links ul li:nth-child(3)");
const button4 = document.querySelector("#dialog-nav-links ul li:nth-child(4)");
const button5 = document.querySelector("#dialog-nav-links ul li:nth-child(5)");
const button6 = document.querySelector("#dialog-nav-links ul li:nth-child(6)");

/*
//////// Functions /////////////
*/
function closeNavDialog(newLocation) {
  dialogNavLinks.style.animation =
    "translateDialogXout ease-in-out 0.3s forwards";
  setTimeout(() => {
    dialogNavLinks.close();
    if (newLocation) {
      window.location.href = `${newLocation}`;
    }
    dialogNavLinks.style.animation =
      "translateDialogXin ease-in-out 0.9s forwards";
  }, 300);
}

function closeFormDialog() {
  console.log("will close form dialog");
}

/*
//////// Listeners /////////////
*/
menuToggleButton.addEventListener("click", () => {
  dialogNavLinks.showModal();
});

// Modal buttons
customModalOpenButton1.addEventListener("click", () => {
  console.log("should remove hidden to modal 1...");
  customModal1.classList.toggle("hidden");
});

customModalOpenButton2.addEventListener("click", () => {
  console.log("should remove hidden to modal 2...");

  customModal2.classList.toggle("hidden");
});

customModalCloseButton1.addEventListener("click", () => {
  console.log("should add hidden to modal 1...");

  customModal1.classList.toggle("hidden");
});

customModalCloseButton2.addEventListener("click", () => {
  console.log("should add hidden to modal 2...");

  customModal2.classList.toggle("hidden");
});

// Nav Dialog button
button1.addEventListener("click", () => {
  console.log("Will navigate to the Home page");
  closeNavDialog("/index.html");
});

button2.addEventListener("click", () => {
  console.log("Will navigate to the Who Am I page");
  closeNavDialog("/index.html");
});

button3.addEventListener("click", () => {
  console.log("Will naviagte to the Ma Formation page");
  closeNavDialog("/html/formation.html");
});

button4.addEventListener("click", () => {
  console.log("Will naviagte to the Mes Competences page");
  closeNavDialog("/index.html");
});

button5.addEventListener("click", () => {
  console.log("Will naviagte to the Mes Projets page");
  closeNavDialog("/html/projets.html");
});

button6.addEventListener("click", () => {
  console.log("Will open the modal");
  closeNavDialog();
});
