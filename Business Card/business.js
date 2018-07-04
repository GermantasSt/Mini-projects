const submit = document.querySelector("#submit");
const forName = document.querySelector("#forName");
const forEmail = document.querySelector("#forEmail");
const forAddress = document.querySelector("#forAddress");
const forPhone = document.querySelector("#forPhone");
const forDescription = document.querySelector("#forDescription");

function getInputValues(){
    const name = document.querySelector("#full-name").value;
    const email = document.querySelector("#email").value;
    const address = document.querySelector("#address").value;
    const phone = document.querySelector("#phone").value;
    const description = document.querySelector("#description").value;
    return {
        name, email, address, phone, description
    };
}
submit.addEventListener("click", () => {
    const all = getInputValues();
    forName.textContent = all.name;
    forEmail.textContent = all.email;
    forAddress.textContent = all.address;
    forPhone.textContent = all.phone;
    forDescription.textContent = all.description;
    localStorage.setItem("name", all.name);
    localStorage.setItem("email", all.email);
    localStorage.setItem("address", all.address);
    localStorage.setItem("phone", all.phone);
    localStorage.setItem("description", all.description);
});

window.addEventListener("load", () => {
    forName.textContent = localStorage.getItem("name");
    forEmail.textContent = localStorage.getItem("email");
    forAddress.textContent =localStorage.getItem("address");
    forPhone.textContent = localStorage.getItem("phone");
    forDescription.textContent = localStorage.getItem("description");
} )