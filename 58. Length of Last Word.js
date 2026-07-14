//Took 6 mins

 var lengthOfLastWord = function(s) {
    s=s.trim();
    let s_parts=s.split(" ");
    return s_parts[s_parts. length -1]. length
};
console.log(lengthOfLastWord("123 123 1234")); 
