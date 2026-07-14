var plusOne = function(digits) {
    let sum=BigInt(digits.join(""))
return (sum+1n).toString().split("").map(Number)
};
plusOne([4,3,2,1])