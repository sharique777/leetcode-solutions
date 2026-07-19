/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    n = String(n);

    let seen_numbers = [];
    let newNumber = 0;

    while (newNumber !== 1) {
        newNumber = 0;

        for (let i = 0; i < n.length; i++) {
            newNumber += n[i] ** 2;
        }

        n = String(newNumber);

        if (seen_numbers.includes(newNumber)) {
            break;
        }

        seen_numbers.push(newNumber);
    }

    // console.log(seen_numbers);
    return n == 1;
};

console.log(isHappy(2));