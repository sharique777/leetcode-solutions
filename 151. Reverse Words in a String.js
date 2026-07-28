/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let s_parts=s.split(" ")
    let reverseWords=[]
    for (let i =  s_parts. length -1; i >=0 ; i--){
      if (s_parts[i] !== ""){
reverseWords.push(s_parts[i])
} 
} 
return reverseWords.join(" ")
};
console.log(reverseWords("a good   example")); 