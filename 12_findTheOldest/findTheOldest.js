const findTheOldest = function (people) {

    people.sort((a, b) => {
        const currentYear = (new Date()).getFullYear()
        const aYOD = a.yearOfDeath === undefined ? currentYear : a.yearOfDeath
        const bYOD = b.yearOfDeath === undefined ? currentYear : b.yearOfDeath
        if ((aYOD - a.yearOfBirth) < (bYOD - b.yearOfBirth)) {
            return 1
        } else {
            return -1
        }
    }
    )
    return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
