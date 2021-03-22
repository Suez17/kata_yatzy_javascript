var assert = require("assert");
var Yatzy = require("../lib/yatzy");


describe('Chance', function() {
    it('scores 15', function(){
        assert.equal(15, Yatzy.chance(2, 3, 4, 5, 1));
    });

    it('scores 16', function(){
        assert.equal(16, Yatzy.chance(3, 3, 4, 5, 1));
    });
});

describe("Yatzy", function() {
    it("scores 50", function() {
        assert.equal(50, Yatzy.yatzy(4,4,4,4,4));
    });

    it("scores 50", function() {
        assert.equal(50, Yatzy.yatzy(6,6,6,6,6));
    });

    it("scores 0", function() {
        assert.equal(0, Yatzy.yatzy(6,6,6,6,3));
    });
});

describe("Ones", function() {
    it("scores 1", function() {
        assert.equal(1, Yatzy.ones(1,2,3,4,5));
    });

    it("scores 2", function() {
        assert.equal(2, Yatzy.ones(1,2,1,4,5));
    });

    it("scores 0", function() {
        assert.equal(0, Yatzy.ones(6,2,2,4,5));
    });

    it("scores 4", function() {
        assert.equal(4, Yatzy.ones(1,2,1,1,1));
    });
});

describe("Twos", function() {
    it("scores 4", function() {
        assert.equal(4, Yatzy.twos(1,2,3,2,6));
    });

    it("scores 10", function() {
        assert.equal(10, Yatzy.twos(2,2,2,2,2));
    });

    it("scores 0", function() {
        assert.equal(0, Yatzy.twos(1,3,4,5,6));
    });
});

describe("Threes", function() {
    it("scores 6", function() {
        assert.equal(6, Yatzy.threes(1,2,3,2,3));
    });

    it("scores 12", function() {
        assert.equal(12, Yatzy.threes(2,3,3,3,3));
    });

    it("scores 0", function() {
        assert.equal(0, Yatzy.threes(2,2,2,2,1));
    });
});

describe("Fours", function() {
    it("scores 12", function() {
        assert.equal(12, Yatzy.fours(4,4,4,5,5));
    });

    it("scores 8", function() {
        assert.equal(8, Yatzy.fours(4,4,5,5,5));
    });

    it("scores 4", function() {
        assert.equal(4, Yatzy.fours(4,5,5,5,5));
    });

    it("scores 0", function() {
        assert.equal(0, Yatzy.fours(5,5,5,5,5));
    });
});

describe("Fives", function() {
    it("scores 10", function() {
        assert.equal(10, Yatzy.fives(4,4,4,5,5));
    });

    it("scores 15", function() {
        assert.equal(15, Yatzy.fives(4,4,5,5,5));
    });

    it("scores 20", function() {
        assert.equal(20, Yatzy.fives(4,5,5,5,5));
    });

    it("scores 0", function() {
        assert.equal(0, Yatzy.fives(4,4,4,4,4));
    });
});

describe("Sixes", function() {
    it("scores 0", function() {
        assert.equal(0, Yatzy.sixes(4,4,4,5,5));
    });

    it("scores 6", function() {
        assert.equal(6, Yatzy.sixes(4,4,6,5,5));
    });

    it("scores 18", function() {
        assert.equal(18, Yatzy.sixes(6,5,6,6,5));
    });
});

describe("One pair", function() {
    it("scores 6", function() {
        assert.equal(6, Yatzy.pair(3,4,3,5,6));
    });

    it("scores 10", function() {
        assert.equal(10, Yatzy.pair(5,3,3,3,5));
    });

    it("scores 12", function() {
        assert.equal(12, Yatzy.pair(5,3,6,6,5));
    });

    it("scores 0", function() {
        assert.equal(0, Yatzy.pair(2,3,1,6,5));
    });
});

describe("Two pairs", function() {
    it("scores 16", function() {
        assert.equal(16, Yatzy.twoPairs(3,3,5,4,5));
    });

    it("scores 16 when full house", function() {
        assert.equal(16, Yatzy.twoPairs(3,3,5,5,5));
    });

    it("scores 0 when one pair", function() {
        assert.equal(0, Yatzy.twoPairs(3,3,1,2,4));
    });

    it("scores 0 when no pair", function() {
        assert.equal(0, Yatzy.twoPairs(1,2,3,4,5));
    });
});

describe("Three of a kind", function() {
    it("scores 9", function() {
        assert.equal(9, Yatzy.threeOfAKind(3,3,3,4,5));
    });

    it("scores 15", function() {
        assert.equal(15, Yatzy.threeOfAKind(5,3,5,4,5));
    });

    it("scores 9 when four of a kind", function() {
        assert.equal(9, Yatzy.threeOfAKind(3,3,3,3,5));
    });

    it("scores 0 when pair", function() {
        assert.equal(0, Yatzy.threeOfAKind(1,3,5,4,5));
    });

    it("scores 0", function() {
        assert.equal(0, Yatzy.threeOfAKind(1,3,6,4,5));
    });
});

describe("Four of a kind", function() {
    it("scores 12", function() {
        assert.equal(12, Yatzy.fourOfAKind(3,3,3,3,5));
    });

    it("scores 20", function() {
        assert.equal(20, Yatzy.fourOfAKind(5,5,5,4,5));
    });

    it("scores 12 when five of a kind", function() {
        assert.equal(12, Yatzy.fourOfAKind(3,3,3,3,3));
    });

    it("scores 0 when full house", function() {
        assert.equal(0, Yatzy.fourOfAKind(3,3,3,5,5));
    });

    it("scores 0 when three of a kind", function() {
        assert.equal(0, Yatzy.fourOfAKind(3,3,3,4,5));
    });

    it("scores 0 when pair", function() {
        assert.equal(0, Yatzy.fourOfAKind(3,3,2,4,5));
    });
});

describe("Small straight", function() {
    it("scores 15 when ordered", function() {
        assert.equal(15, Yatzy.smallStraight(1,2,3,4,5));
    });

    it("scores 15 when unordered", function() {
        assert.equal(15, Yatzy.smallStraight(2,3,4,5,1));
    });

    it("scores 0", function() {
        assert.equal(0, Yatzy.smallStraight(1,2,2,4,5));
    });
});

describe("Large straight", function() {
    it("scores 20 when ordered", function() {
        assert.equal(20, Yatzy.largeStraight(6,2,3,4,5));
    });

    it("scores 20 when unordered", function() {
        assert.equal(20, Yatzy.largeStraight(2,3,4,5,6));
    });

    it("scores 0 when small straight", function() {
        assert.equal(0, Yatzy.largeStraight(1,2,3,4,5));
    });

    it("scores 0", function() {
        assert.equal(0, Yatzy.largeStraight(1,2,2,4,5));
    });
});

describe("Full house", function() {
    it("scores 18", function() {
        assert.equal(18, Yatzy.fullHouse(6,2,2,2,6));    
    });

    it("scores 0", function() {
        assert.equal(0, Yatzy.fullHouse(2,3,4,5,6));
    });

    it("scores 0 when pair", function() {
        assert.equal(0, Yatzy.fullHouse(2,2,3,5,6));
    });

    it("scores 0 when two pairs", function() {
        assert.equal(0, Yatzy.fullHouse(2,2,4,4,6));
    });

    it("scores 0 when three of a kind", function() {
        assert.equal(0, Yatzy.fullHouse(2,2,2,4,6));
    });

    it("scores 0 when four of a kind", function() {
        assert.equal(0, Yatzy.fullHouse(2,2,2,2,6));
    });

    it("scores 0 when five of a kind", function() {
        assert.equal(0, Yatzy.fullHouse(2,2,2,2,2));
    });
});
