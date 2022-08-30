const drivers = 
  ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(collection) {

    const newDrivers = []

    for (const user of collection) {
        if (user.toLowerCase() === "sammy") {
            console.log(user);
        }
        if (user.toLowerCase() === "bobby") {
          console.log(user);
        }
        else (newDrivers.push(user))
    }
}

findMatching(drivers);