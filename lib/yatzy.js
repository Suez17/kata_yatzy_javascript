var Yatzy = {};

Yatzy.chance = function (d1, d2, d3, d4, d5) {
    return (d1 + d2 + d3 + d4 + d5);
}

Yatzy.yatzy = function (d1, d2, d3, d4, d5) {
    return (new Set([d1, d2, d3, d4, d5]).size === 1) ? 50 : 0;
}

Yatzy.ones = function (d1, d2, d3, d4, d5) {
    return findSumOfOccurences(1, [d1, d2, d3, d4, d5]);
}

Yatzy.twos = function (d1, d2, d3, d4, d5) {
    return findSumOfOccurences(2, [d1, d2, d3, d4, d5]);
}

Yatzy.threes = function (d1, d2, d3, d4, d5) {
    return findSumOfOccurences(3, [d1, d2, d3, d4, d5]);
}

Yatzy.fours = function (d1, d2, d3, d4, d5) {
    return findSumOfOccurences(4, [d1, d2, d3, d4, d5]);
}

Yatzy.fives = function (d1, d2, d3, d4, d5) {
    return findSumOfOccurences(5, [d1, d2, d3, d4, d5]);
}

Yatzy.sixes = function (d1, d2, d3, d4, d5) {
    return findSumOfOccurences(6, [d1, d2, d3, d4, d5]);
}

Yatzy.pair = function (d1, d2, d3, d4, d5) {
    const dices = [d1, d2, d3, d4, d5];
    return findMaxValue(findDuplicates(dices)) * 2;
}

Yatzy.twoPairs = function (d1, d2, d3, d4, d5) {
    let sumOfTwoPairs = 0;

    const dices = [d1, d2, d3, d4, d5];
    const duplicateDices = findDuplicates(dices);

    if (duplicateDices.size == 2) {
        sumOfTwoPairs = findSumOfAllOccurences(duplicateDices, dices, 2, false);
    }

    return sumOfTwoPairs;
}

Yatzy.threeOfAKind = function (d1, d2, d3, d4, d5) {
    const dices = [d1, d2, d3, d4, d5];
    const duplicateDices = findDuplicates(dices);
    return findSumOfAllOccurences(duplicateDices, dices, 3, false);
}

Yatzy.fourOfAKind = function (d1, d2, d3, d4, d5) {
    const dices = [d1, d2, d3, d4, d5];
    const duplicateDices = findDuplicates(dices);
    return findSumOfAllOccurences(duplicateDices, dices, 4, false);
}

Yatzy.smallStraight = function (d1, d2, d3, d4, d5) {
    const smallStraight = "12345";
    const dices = [d1, d2, d3, d4, d5];
    return (createOrderedChain(dices) === smallStraight) ? 15 : 0;
}

Yatzy.largeStraight = function (d1, d2, d3, d4, d5) {
    const largeStraight = "23456";
    const dices = [d1, d2, d3, d4, d5];
    return (createOrderedChain(dices) === largeStraight) ? 20 : 0;
}

Yatzy.fullHouse = function (d1, d2, d3, d4, d5) {
    let sumOfFullHouse = 0;

    const dices = [d1, d2, d3, d4, d5];
    const duplicateDices = findDuplicates(dices);

    if (duplicateDices.size == 2) {
        sumOfFullHouse = findSumOfAllOccurences(duplicateDices, dices, 3, true);
        if (sumOfFullHouse != 0) {
            sumOfFullHouse += findSumOfAllOccurences(duplicateDices, dices, 2, true);
        }
    }
    return sumOfFullHouse;
}

function findSumOfOccurences(targetValue, array) {
    return array
        .filter(value => value == targetValue)
        .reduce((acc, value) => acc + value, 0);
}

function findDuplicates(array) {
    const set = new Set();
    const duplicates = array
        .filter(value => {
            let isDuplicate = false;
            if (set.has(value)) {
                isDuplicate = true;
            } else {
                set.add(value);
            }
            return isDuplicate;
        });
    return new Set(duplicates);
}

function findMaxValue(set) {
    const values = Array.from(set);
    let maxValue = 0;
    if (values.length > 0) {
        maxValue = Math.max(...values);
    }
    return maxValue;
}

function findSumOfAllOccurences(targetValues, array, numberOfOccurences, strictComparison) {
    let sumOfAllOccurences = 0;

    for (const targetValue of targetValues) {
        const occurencesTargetValue = countOccurences(targetValue, array);
        if ((!strictComparison && occurencesTargetValue >= numberOfOccurences) ||
                (strictComparison && occurencesTargetValue == numberOfOccurences)) {
            sumOfAllOccurences += targetValue * numberOfOccurences;
        }
    }

    return sumOfAllOccurences;
}

function countOccurences(targetValue, array) {
    return array
        .filter(value => value === targetValue)
        .length;
}

function createOrderedChain(array) {
    return array
        .sort()
        .reduce((acc, value) => acc + value, "");
}

module.exports = Yatzy;


