import * as data from "../src/data/scores.json";
describe("Scores", () => {
    test("Pistol scores are defined or null", () => {
        data.shooters.forEach(element => {
            element.scores.forEach(score => {
                expect(score.hogans).toBeDefined();
                expect(score.speed).toBeDefined();
                expect(score.turkey).toBeDefined();
                expect(score.block).toBeDefined();
            });
        });
    });
    test("Shotgun scores are defined or null", () => {
        data.shooters.forEach(element => {
            element.scores.forEach(score => {
                expect(score.skeet).toBeDefined();
                expect(score.teal).toBeDefined();
                expect(score.trap).toBeDefined();
                expect(score.rabbit).toBeDefined();
            });
        });
    });
    test("Pistol subtotals add up correctly", () => {
        data.shooters.forEach(element => {
            let shooter = element.name;
            element.scores.forEach(score => {
                let pistolSubTotal = 0;
                let year = score.year;
                if (score.hogans) {
                    pistolSubTotal = pistolSubTotal + score.hogans;
                }
                if (score.speed) {
                    pistolSubTotal = pistolSubTotal + score.speed;
                }
                if (score.turkey) {
                    pistolSubTotal = pistolSubTotal + score.turkey;
                }
                // Note if score.block is undefined then the subtotal is still verified
                if (score.block !== null) {
                    pistolSubTotal = pistolSubTotal + score.block;
                } else {
                    // if score.block is null then don't verify the subtotal
                    return;
                }
                if (score.pistol) {
                    // added year and shooter name to make it easier to debug
                    expect({ pistolTotal: score.pistol, shooter, year }).toEqual({ pistolTotal: pistolSubTotal, shooter, year });
                }
            });
        });
    });
    test("Shotgun subtotals add up correctly", () => {
        data.shooters.forEach(element => {
            let shooter = element.name;
            element.scores.forEach(score => {
                let shotgunSubtotal = 0;
                let year = score.year;
                if (score.skeet) {
                    shotgunSubtotal = shotgunSubtotal + score.skeet;
                }
                if (score.teal) {
                    shotgunSubtotal = shotgunSubtotal + score.teal;
                }
                if (score.trap) {
                    shotgunSubtotal = shotgunSubtotal + score.trap;
                }
                // Note if score.rabbit is undefined then the subtotal is still verified
                if (score.rabbit !== null) {
                    shotgunSubtotal = shotgunSubtotal + score.rabbit;
                } else {
                    // if score.rabbit is null then don't verify the subtotal
                    return;
                }
                if (score.shotgun && score.year >= "2001") {
                    // added year and shooter name to make it easier to debug
                    expect({ shotgunTotal: score.shotgun, shooter, year }).toEqual({ shotgunTotal: shotgunSubtotal, shooter, year });
                }
            });
        });
    });
    test("Total scores add up correctly", () => {
        data.shooters.forEach(element => {
            let shooter = element.name;
            element.scores.forEach(score => {
                let year = score.year;
                if (score.total && score.pistol && score.shotgun) {
                    // added year and shooter name to make it easier to debug
                    expect({ total: score.total, year, shooter }).toEqual({ total: score.pistol + score.shotgun, year, shooter });
                }
            });
        });
    });
});