var Yatzy = {};

Yatzy.chance = function(d1, d2, d3, d4, d5) {
    return (d1 + d2 + d3 + d4 + d5);
}

Yatzy.yatzy = function(d1, d2, d3, d4, d5) {
    return (new Set([d1, d2, d3, d4, d5]).size === 1) ? 50 : 0;
}

Yatzy.ones = function(d1, d2, d3, d4, d5) {
    return sumTargetDiceValue(1, d1, d2, d3, d4, d5);
}

Yatzy.twos = function(d1, d2, d3, d4, d5) {
    return sumTargetDiceValue(2, d1, d2, d3, d4, d5);
}

Yatzy.threes = function(d1, d2, d3, d4, d5) {
    return sumTargetDiceValue(3, d1, d2, d3, d4, d5);
}

Yatzy.fours = function(d1, d2, d3, d4, d5) {
    return sumTargetDiceValue(4, d1, d2, d3, d4, d5);
}

Yatzy.fives = function(d1, d2, d3, d4, d5) {
    return sumTargetDiceValue(5, d1, d2, d3, d4, d5);
}

Yatzy.sixes = function(d1, d2, d3, d4, d5) {
    return sumTargetDiceValue(6, d1, d2, d3, d4, d5);
}

Yatzy.pair = function(d1, d2, d3, d4, d5) {
    return getMaxValue(getDuplicateDiceValues(d1, d2, d3, d4, d5)) * 2;
}

Yatzy.twoPairs = function(d1, d2, d3, d4, d5) {
    let sumOfTwoPairs = 0;
    if (getDuplicateDiceValues(d1, d2, d3, d4, d5).size == 2) {
        sumOfTwoPairs = sumOfAKind(2, false, d1, d2, d3, d4, d5);
    }
    return sumOfTwoPairs;
}

Yatzy.threeOfAKind = function(d1, d2, d3, d4, d5) {
    return sumOfAKind(3, false, d1, d2, d3, d4, d5);
}

Yatzy.fourOfAKind = function(d1, d2, d3, d4, d5) {
    return sumOfAKind(4, false, d1, d2, d3, d4, d5);
}

Yatzy.smallStraight = function(d1, d2, d3, d4, d5) {
    const smallStraight = "12345";
    return (getOrderedDices(d1, d2, d3, d4, d5) === smallStraight) ? 15 : 0;
}

Yatzy.largeStraight = function(d1, d2, d3, d4, d5) {
    const largeStraight = "23456";
    return (getOrderedDices(d1, d2, d3, d4, d5) === largeStraight) ? 20 : 0;
}

Yatzy.fullHouse = function(d1, d2, d3, d4, d5)
{
    var tallies;
    var  _2 = false;
    var i;
    var _2_at = 0;
    var _3 = false;
    var _3_at = 0;




    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1-1] += 1;
    tallies[d2-1] += 1;
    tallies[d3-1] += 1;
    tallies[d4-1] += 1;
    tallies[d5-1] += 1;

    for (i = 0; i != 6; i += 1)
        if (tallies[i] == 2) {
            _2 = true;
            _2_at = i+1;
        }

    for (i = 0; i != 6; i += 1)
        if (tallies[i] == 3) {
            _3 = true;
            _3_at = i+1;
        }

    if (_2 && _3)
        return _2_at * 2 + _3_at * 3;
    else
        return 0;
}

function sumTargetDiceValue(targetDiceValue, d1, d2, d3, d4, d5) {
    return [d1, d2, d3, d4, d5]
        .filter(d => d == targetDiceValue)
        .reduce((acc, d) => acc + d, 0);
}

function getDuplicateDiceValues(d1, d2, d3, d4, d5) {
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

function getMaxValue(set) {
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
    const duplicateDiceValues = getDuplicateDiceValues(d1, d2, d3, d4, d5);
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

function getOrderedDices(d1, d2, d3, d4, d5) {
    return [d1, d2, d3, d4, d5]
        .sort()
        .reduce((acc, d) => acc + d, "");
}

module.exports = Yatzy;


