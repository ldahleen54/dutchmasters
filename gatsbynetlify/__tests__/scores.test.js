import * as data from "../src/data/scores.json";
describe("Scores", () => {
  test("Pistol subtotals add up correctly", () => {
    data.shooters.forEach(element => {
        element.scores.forEach(score => {
            let pistolSubTotal = 0;
            if(score.hogans) {
                pistolSubTotal = pistolSubTotal + score.hogans;
            }
            if(score.speed) {
                pistolSubTotal = pistolSubTotal + score.speed;
            }
            if(score.turkey) {
                pistolSubTotal = pistolSubTotal + score.turkey;
            }
            if(score.gut) {
                pistolSubTotal = pistolSubTotal + score.gut;
            }
            if(score.pistol) {
                expect(score.pistol).toEqual(pistolSubTotal);
            }
        });
    });
  });
  test("Shotgun subtotals add up correctly", () => {
    data.shooters.forEach(element => {
        element.scores.forEach(score => {
            let shotgunSubtotal = 0;
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
                expect(score.shotgun).toEqual(shotgunSubtotal);
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
                expect({score: score.total, year, shooter}).toEqual({score: score.pistol + score.shotgun, year, shooter});
            }
        });
    });
  });
});