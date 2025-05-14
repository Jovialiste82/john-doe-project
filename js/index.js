/*
//////// Capturing DOM /////////////
*/
const dialogNavLinks = document.querySelector("#dialog-nav-links");
const dialogContactFormOnMobile = document.querySelector("#dialog-form1-modal");
const dialogContactFormOnDesktop = document.querySelector(
  "#dialog-form2-modal"
);
const menuToggleButton = document.querySelector(".menu-toggle");
const formDialogButton1 = document.querySelector("#modal-1-open-button");
const formDialogButton2 = document.querySelector("#modal-2-open-button");
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
