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
    it("scores the sum of the highest pair", function() {
        assert.equal(6, Yatzy.score_pair(3,4,3,5,6));
        assert.equal(10, Yatzy.score_pair(5,3,3,3,5));
        assert.equal(12, Yatzy.score_pair(5,3,6,6,5));
    });
});

describe("Two pair", function() {
    it("scores the sum of the two pairs", function() {
        assert.equal(16, Yatzy.two_pair(3,3,5,4,5));
        assert.equal(16, Yatzy.two_pair(3,3,5,5,5));
    });
});

describe("Three of a kind", function() {
    it("scores the sum of the three of the kind", function() {
        assert.equal(9, Yatzy.three_of_a_kind(3,3,3,4,5));
        assert.equal(15, Yatzy.three_of_a_kind(5,3,5,4,5));
        assert.equal(9, Yatzy.three_of_a_kind(3,3,3,3,5));
    });
});

describe("Four of a kind", function() {
    it("scores the sum of the four of the kind", function() {
        assert.equal(12, Yatzy.four_of_a_kind(3,3,3,3,5));
        assert.equal(20, Yatzy.four_of_a_kind(5,5,5,4,5));
        assert.equal(9, Yatzy.three_of_a_kind(3,3,3,3,3));
    });
});

describe("Small straight", function() {
    it("scores 15", function() {
        assert.equal(15, Yatzy.smallStraight(1,2,3,4,5));
        assert.equal(15, Yatzy.smallStraight(2,3,4,5,1));
        assert.equal(0, Yatzy.smallStraight(1,2,2,4,5));
    });
});

describe("Large straight", function() {
    it("scores 20", function() {
        assert.equal(20, Yatzy.largeStraight(6,2,3,4,5));
        assert.equal(20, Yatzy.largeStraight(2,3,4,5,6));
        assert.equal(0, Yatzy.largeStraight(1,2,2,4,5));
    });
});

describe("Full house", function() {
    it("scores the sum of the full house", function() {
        assert.equal(18, Yatzy.fullHouse(6,2,2,2,6));
        assert.equal(0, Yatzy.fullHouse(2,3,4,5,6));
    });
});
