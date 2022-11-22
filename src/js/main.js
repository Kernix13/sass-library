console.log("Working");

const person1 = {
  name: "Jim",
  city: "Springfield"
}

function personCheck(obj) {
  if (obj.name === "Jim") {
    console.log(obj.city)
  }
}
personCheck(person1)

let canType = true;
function newKeyboard(bool) {
  if (bool) {
    console.log("Okay, it works")
  }
}

newKeyboard(canType);