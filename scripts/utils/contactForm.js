export function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    document.querySelector(".visible-body").style.position = "absolute";
    document.querySelector("#firstname").focus();
}

export function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

export function sendData() {
    console.log(document.querySelector('#firstname').value);
    console.log(document.querySelector('#lastname').value);
    console.log(document.querySelector('#email').value);
    console.log(document.querySelector('#message').value);
}

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      closeModal();
    };
  });