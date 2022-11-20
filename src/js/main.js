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