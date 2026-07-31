/**
* @param {number} numerator
* @param {number} denominator
* @return {string}
*/
var fractionToDecimal = function (numerator, denominator) {
let negative = false;
let numeratorStr = String(Math.abs(numerator));

if ((numerator<0&&denominator<0)) {
  negative=false
  }
  else if (numerator<0||denominator<0) {
  negative=true
} 
    denominator=Math.abs(denominator)
let currentDividend = 0;
let remainder = 0;
let digit = 0;
let recuriingStartIndex = 0;
let decimalAdded = false;
let result = [];
let decimalPlaces = [];
let remainders = [];
let decimalPlacesRepeatingNum = "";
for (let i = 0; i < numeratorStr.length; i++) {
let currentDigit = numeratorStr[i];
if (currentDigit=="+" || currentDigit=="-") {
  
  continue
  }
  
currentDividend = currentDividend * 10 + Number(currentDigit);

digit = Math.floor(currentDividend / denominator);

if (!(digit == 0&&i===0)) {
if (decimalAdded){
  /* if (decimalPlaces.includes(digit)) {
 if ( decimalPlacesRepeatingNum==="") {
   recuriingStartIndex=result.lastIndexOf(digit)
    x=decimalPlaces.slice(decimalPlaces.lastIndexOf(digit),decimalPlaces. length ).join("")
   
 } 
    decimalPlacesRepeatingNum+=digit
    if ( x=== decimalPlacesRepeatingNum){
result.splice(recuriingStartIndex+0,0,"(")
result.push(")");
break
} 
} else {
  if ( decimalPlacesRepeatingNum!=="") {result.push(decimalPlacesRepeatingNum)}
result.push(digit);
  decimalPlacesRepeatingNum=""
} 
decimalPlaces.push(digit);*/
if (remainders.includes(remainder)) {
  recuriingStartIndex=remainders.lastIndexOf(remainder)+decimalIndex
    result.splice(recuriingStartIndex+0,0,"(")
result.push(")");
break
} 
remainders.push(remainder)
} else {
  
}
result.push(digit);

}

remainder = currentDividend - digit * denominator;
currentDividend = remainder;

if (denominator > currentDividend && currentDividend !== 0) {
if (i !== numeratorStr.length - 1) {
continue;
} else {
numeratorStr += "0";

if (!decimalAdded) {
if (i === 0) {
result.push("0");
}
  decimalIndex=result. length +1

result.push(".");
decimalAdded = true;
}
}
}
}
let finalResult=result.join("")||"0";
if (negative ===true &&finalResult!=0){
finalResult="-"+finalResult
} 
return finalResult
};

console.log(fractionToDecimal(0,-8));