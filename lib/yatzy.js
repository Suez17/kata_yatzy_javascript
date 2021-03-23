var Yatzy = {};

Yatzy.chance = function (d1, d2, d3, d4, d5) {
    return (d1 + d2 + d3 + d4 + d5);
}

Yatzy.yatzy = function (d1, d2, d3, d4, d5) {
    return (new Set([d1, d2, d3, d4, d5]).size === 1) ? 50 : 0;
}

Yatzy.ones = function (d1, d2, d3, d4, d5) {
    return sumTargetDiceValue(1, d1, d2, d3, d4, d5);
}

Yatzy.twos = function (d1, d2, d3, d4, d5) {
    return sumTargetDiceValue(2, d1, d2, d3, d4, d5);
}

Yatzy.threes = function (d1, d2, d3, d4, d5) {
    return sumTargetDiceValue(3, d1, d2, d3, d4, d5);
}

Yatzy.fours = function (d1, d2, d3, d4, d5) {
    return sumTargetDiceValue(4, d1, d2, d3, d4, d5);
}

Yatzy.fives = function (d1, d2, d3, d4, d5) {
    return sumTargetDiceValue(5, d1, d2, d3, d4, d5);
}

Yatzy.sixes = function (d1, d2, d3, d4, d5) {
    return sumTargetDiceValue(6, d1, d2, d3, d4, d5);
}

Yatzy.pair = function (d1, d2, d3, d4, d5) {
    return findMaxValue(findDuplicateDiceValues(d1, d2, d3, d4, d5)) * 2;
}

Yatzy.twoPairs = function (d1, d2, d3, d4, d5) {
    let sumOfTwoPairs = 0;
    if (findDuplicateDiceValues(d1, d2, d3, d4, d5).size == 2) {
        sumOfTwoPairs = sumOfAKind(2, false, d1, d2, d3, d4, d5);
    }
    return sumOfTwoPairs;
}

Yatzy.threeOfAKind = function (d1, d2, d3, d4, d5) {
    return sumOfAKind(3, false, d1, d2, d3, d4, d5);
}

Yatzy.fourOfAKind = function (d1, d2, d3, d4, d5) {
    return sumOfAKind(4, false, d1, d2, d3, d4, d5);
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

    if (findDuplicateDiceValues(d1, d2, d3, d4, d5).size == 2) {
        sumOfFullHouse = sumOfAKind(3, true, d1, d2, d3, d4, d5);
        if (sumOfFullHouse != 0) {
            sumOfFullHouse += sumOfAKind(2, true, d1, d2, d3, d4, d5);
        }
    }
    return sumOfFullHouse;
}

function sumTargetDiceValue(targetDiceValue, d1, d2, d3, d4, d5) {
    return [d1, d2, d3, d4, d5]
        .filter(d => d === targetDiceValue)
        .reduce((acc, d) => acc + d, 0);
}

function findDuplicateDiceValues(d1, d2, d3, d4, d5) {
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

function sumOfAKind(valueOfAKind, strictComparison, d1, d2, d3, d4, d5) {
    let sumOfAKind = 0;

    const dices = [d1, d2, d3, d4, d5];
    const duplicateDiceValues = findDuplicateDiceValues(d1, d2, d3, d4, d5);
    for (const duplicateDiceValue of duplicateDiceValues) {
        const totalDuplicateValues = countDuplicateValues(duplicateDiceValue, dices);
        if ((!strictComparison && totalDuplicateValues >= valueOfAKind) ||
            (strictComparison && totalDuplicateValues == valueOfAKind)) {
            sumOfAKind += duplicateDiceValue * valueOfAKind;
        }
    }

    return sumOfAKind;
}

function countDuplicateValues(targetValue, array) {
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


