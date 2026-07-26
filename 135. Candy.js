

 /**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let sortedRatings = [...ratings].sort((a, b) => a - b);
    let allIndex = [];
    let tempArr = [];
    let candy = [];
    let usedSubIndex = [];
    let noOfCandies = 0;

    for (let i = 0; i < ratings.length; i++) {
        tempArr = [...(allIndex[ratings[i]] || [])];
        tempArr.push(i);
        allIndex[ratings[i]] = [...tempArr];
        candy[i] = 1;
        usedSubIndex[ratings[i]] = 0;
    }

    for (let i = 0; i < sortedRatings.length; i++) {
        let currEleIndex = allIndex[sortedRatings[i]][usedSubIndex[sortedRatings[i]]];

        if (
            sortedRatings[i] > ratings[currEleIndex + 1] &&
            sortedRatings[i] > ratings[currEleIndex - 1]
        ) {
            candy[currEleIndex] =
                Math.max(candy[currEleIndex + 1], candy[currEleIndex - 1]) + 1;
        } else if (sortedRatings[i] > ratings[currEleIndex + 1]) {
            candy[currEleIndex] = candy[currEleIndex + 1] + 1;
        } else if (sortedRatings[i] > ratings[currEleIndex - 1]) {
            candy[currEleIndex] = candy[currEleIndex - 1] + 1;
        }

        noOfCandies += candy[currEleIndex];
        usedSubIndex[sortedRatings[i]]++;
    }

    return noOfCandies;
};

console.log(candy([1, 3, 4, 5, 2]));