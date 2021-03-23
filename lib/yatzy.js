var Yatzy = {};

Yatzy.chance = function (d1, d2, d3, d4, d5) {
    return (d1 + d2 + d3 + d4 + d5);
}

Yatzy.yatzy = function (d1, d2, d3, d4, d5) {
    return (new Set([d1, d2, d3, d4, d5]).size === 1) ? 50 : 0;
}

Yatzy.ones = function (d1, d2, d3, d4, d5) {
    return getSumOfOccurences(1, [d1, d2, d3, d4, d5]);
}

Yatzy.twos = function (d1, d2, d3, d4, d5) {
    return getSumOfOccurences(2, [d1, d2, d3, d4, d5]);
}

Yatzy.threes = function (d1, d2, d3, d4, d5) {
    return getSumOfOccurences(3, [d1, d2, d3, d4, d5]);
}

Yatzy.fours = function (d1, d2, d3, d4, d5) {
    return getSumOfOccurences(4, [d1, d2, d3, d4, d5]);
}

Yatzy.fives = function (d1, d2, d3, d4, d5) {
    return getSumOfOccurences(5, [d1, d2, d3, d4, d5]);
}

Yatzy.sixes = function (d1, d2, d3, d4, d5) {
    return getSumOfOccurences(6, [d1, d2, d3, d4, d5]);
}

Yatzy.pair = function (d1, d2, d3, d4, d5) {
    return findMaxValue(findDuplicateDices(d1, d2, d3, d4, d5)) * 2;
}

Yatzy.twoPairs = function (d1, d2, d3, d4, d5) {
    let sumOfTwoPairs = 0;

    const duplicateDices = findDuplicateDices(d1, d2, d3, d4, d5);

    if (duplicateDices.size == 2) {
        sumOfTwoPairs = getSumOfAllOccurences(duplicateDices, [d1, d2, d3, d4, d5], 2, false);
    }

    return sumOfTwoPairs;
}

Yatzy.threeOfAKind = function (d1, d2, d3, d4, d5) {
    const duplicateDices = findDuplicateDices(d1, d2, d3, d4, d5);
    return getSumOfAllOccurences(duplicateDices, [d1, d2, d3, d4, d5], 3, false);
}

Yatzy.fourOfAKind = function (d1, d2, d3, d4, d5) {
    const duplicateDices = findDuplicateDices(d1, d2, d3, d4, d5);
    return getSumOfAllOccurences(duplicateDices, [d1, d2, d3, d4, d5], 4, false);
}

Yatzy.smallStraight = function (d1, d2, d3, d4, d5) {
    const smallStraight = "12345";
    return (createOrderedChainOfDice(d1, d2, d3, d4, d5) === smallStraight) ? 15 : 0;
}

Yatzy.largeStraight = function (d1, d2, d3, d4, d5) {
    const largeStraight = "23456";
    return (createOrderedChainOfDice(d1, d2, d3, d4, d5) === largeStraight) ? 20 : 0;
}

Yatzy.fullHouse = function (d1, d2, d3, d4, d5) {
    let sumOfFullHouse = 0;

    const duplicateDices = findDuplicateDices(d1, d2, d3, d4, d5);

    if (duplicateDices.size == 2) {
        const dices = [d1, d2, d3, d4, d5];

        sumOfFullHouse = getSumOfAllOccurences(duplicateDices, dices, 3, true);
        if (sumOfFullHouse != 0) {
            sumOfFullHouse += getSumOfAllOccurences(duplicateDices, dices, 2, true);
        }
    }
    return sumOfFullHouse;
}

function getSumOfOccurences(targetValue, array) {
    return array
        .filter(value => value == targetValue)
        .reduce((acc, value) => acc + value, 0);
}

function findDuplicateDices(d1, d2, d3, d4, d5) {
    const set = new Set();
    const duplicateDiceValues = [d1, d2, d3, d4, d5]
        .filter(d => {
            let isDuplicate = false;
            if (set.has(d)) {
                isDuplicate = true;
            } else {
                set.add(d);
            }
            return isDuplicate;
        });
    return new Set(duplicateDiceValues);
}

function findMaxValue(set) {
    const values = Array.from(set);
    let maxValue = 0;
    if (values.length > 0) {
        maxValue = Math.max(...values);
    }
    return maxValue;
}

function getSumOfAllOccurences(targetValues, array, numberOfOccurences, strictComparison) {
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

function createOrderedChainOfDice(d1, d2, d3, d4, d5) {
    return [d1, d2, d3, d4, d5]
        .sort()
        .reduce((acc, d) => acc + d, "");
}

module.exports = Yatzy;


