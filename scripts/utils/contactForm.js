export function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    document.querySelector(".visible-body").style.position = "absolute";
}

export function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

export function sendData() {
    console.log(document.querySelector('#firstname').value);
}