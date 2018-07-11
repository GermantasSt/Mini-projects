let guestInput = document.querySelector("#guestInput");
let oldGuest = document.querySelector("#oldGuest");
let newGuest = document.querySelector("#newGuest");
const addGuestEnd = document.querySelector("#addGuestEnd");
const addGuestStart = document.querySelector("#addGuestStart");
const removeFirst = document.querySelector("#removeFirst");
const removeLast = document.querySelector("#removeLast");
const reversList = document.querySelector("#reverseList");
const guestList = document.querySelector("#guestList");
const sortAZ = document.querySelector("#sortAZ");
const sortZA = document.querySelector("#sortZA");
const replaceGuest = document.querySelector("#replaceGuest");
const buttons = document.querySelectorAll("button");

const arrayGuest = [];
guestList.innerHTML = arrayGuest;

function replace() {
  let oldGuestIndex = arrayGuest.findIndex(
    value => value === `${oldGuest.value}<br/>`
  );
  if (oldGuestIndex !== -1) {
    arrayGuest[oldGuestIndex] = newGuest.value;
  } else {
    alert("This Guest is not on the list");
  }
}

function manageGuest(event) {
  const clickedButton = event.target.id;
  switch (clickedButton) {
    case "addGuestEnd":
      arrayGuest.push(guestInput.value + "<br/>");
      break;
    case "addGuestStart":
      arrayGuest.unshift(guestInput.value + "<br/>");
      break;
    case "removeFirst":
      arrayGuest.shift(guestInput.value + "<br/>");
      break;
    case "removeLast":
      arrayGuest.pop(guestInput.value + "<br/>");
      break;
    case "reverseList":
      arrayGuest.reverse();
      break;
    case "sortAZ":
      arrayGuest.sort();
      break;
    case "sortZA":
      arrayGuest.sort((a, b) => a < b);
      break;
    case "replaceGuest":
      replace();
      break;
  }
  guestList.innerHTML = arrayGuest.join("");
}
buttons.forEach(button => button.addEventListener("click", manageGuest));
