function getPasswordChecker(password) {
    let correctPassword = password;

    return function (password) {
        return correctPassword === password
    }
}

let check = getPasswordChecker("3433");

console.log(check("333"));
console.log(check("3123"));
console.log(check("3433"));