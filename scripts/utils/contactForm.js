export function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    document.querySelector("header").style.position = "absolute";
    document.querySelector("main").style.position = "absolute";
}

export function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}