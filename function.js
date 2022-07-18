const btn_click = document.getElementById("click");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("modal_dialog");
const submit = document.getElementById("submit");
const succes = document.getElementById("succes");

function open(dialog) {
  if (dialog.open) {
    document.getElementById("click").style = "display:none";
    document.getElementById("succes").style = "display:flex";
  } else {
    document.getElementById("click").style = "display:flex";
    document.getElementById("succes").style = "display:none";
  }
}

btn_click.addEventListener("click", function () {
  dialog.showModal();
  open(dialog);
});

cancelButton.addEventListener("click", function () {
  dialog.close();
  open(dialog);
});

succes.addEventListener("click", function () {
  document.getElementById("click").style = "display:flex";
  document.getElementById("succes").style = "display:none";
});
