var compareVersion = function (version1, version2) {
    let version1Parts = version1.split(".");
    let version2Parts = version2.split(".");

    let limit;
    if (version1Parts.length > version2Parts.length) {
        limit = version1Parts.length;
    } else {
        limit = version2Parts.length;
    }

for (let i = 0 ; i < limit; i++){
        let v1 = parseInt(version1Parts[i] || "0");
        let v2 = parseInt(version2Parts[i] || "0");

        if (v1 > v2) {
            return 1;
        } else if (v1 < v2) {
            return -1;
        }
    }

    return 0;
};

console.log(compareVersion("1.20.1","1.2.2")); 
