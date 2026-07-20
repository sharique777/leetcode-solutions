/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 7min
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    s_parts = s.split("");
    t_parts = t.split("");
    occu_s = {};
    occu_t = {};
    for (let i = 0; i < s.length; i++) {
        occu_s[s[i]] = (occu_s[s[i]] || 0) + 1;
        occu_t[t[i]] = (occu_t[t[i]] || 0) + 1;
    }

    for (const key in occu_s) {
        if (occu_s[key] !== occu_t[key]) {
            return false;
        }
    }
    return true;
};
console.log(isAnagram("anagram", "nagaram"));
