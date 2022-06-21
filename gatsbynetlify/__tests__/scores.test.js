import * as data from "../src/data/scores.json";
describe("Scores", () => {
  test("Pistol subtotals add up correctly", () => {
    let containsBlock
    data.shooters.forEach(element => {
        let shooter = element.name;
        element.scores.forEach(score => {
            let pistolSubTotal = 0;
            let year = score.year;
            if(score.hogans) {
                pistolSubTotal = pistolSubTotal + score.hogans;
            }
            if(score.speed) {
                pistolSubTotal = pistolSubTotal + score.speed;
            }
            if(score.turkey) {
                pistolSubTotal = pistolSubTotal + score.turkey;
            }
            if(score.block) {
                pistolSubTotal = pistolSubTotal + score.block;
            } else {
                // if score.block is null then don't check the subtotal
                return;
            }
            if(score.pistol) {
                // added year and shooter name to make it easier to debug
                expect({pistolTotal: score.pistol, shooter, year}).toEqual({pistolTotal: pistolSubTotal, shooter, year});
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
            if(score.skeet) {
                shotgunSubtotal = shotgunSubtotal + score.skeet;
            }
            if(score.teal) {
                shotgunSubtotal = shotgunSubtotal + score.teal;
            }
            if(score.trap) {
                shotgunSubtotal = shotgunSubtotal + score.trap;
            }
            if(score.rabbit) {
                shotgunSubtotal = shotgunSubtotal + score.rabbit;
            }
            if(score.shotgun && score.year >= "2001") {
                // added year and shooter name to make it easier to debug
                expect({shotgunTotal: score.shotgun, shooter, year}).toEqual({shotgunTotal: shotgunSubtotal, shooter, year});
            }
        });
    });
  });
  test("Total scores add up correctly", () => {
    data.shooters.forEach(element => {
        let shooter = element.name;
        element.scores.forEach(score => {
            let year = score.year;
            if(score.total && score.pistol && score.shotgun) {
                // added year and shooter name to make it easier to debug
                expect({total: score.total, year, shooter}).toEqual({total: score.pistol + score.shotgun, year, shooter});
            }
        });
    });
  });
});