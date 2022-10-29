function roundToNearestMinute(date = new Date()) {
  const timefraction = 1000 * 10;
  return Math.round(date.getTime() / timefraction) * timefraction;
}
const getDateIntArr = () => roundToNearestMinute().toString().split("").reverse().map(d => parseInt(d));

class MyRandom {
  constructor() {
    this.seed = getDateIntArr();
  }

  generate() {
    const dateIntArr = getDateIntArr();

    this.seed = dateIntArr.map((d, index) => {
      let newVal = d + this.seed[index];
      if (newVal > 9) {
        newVal = newVal % 10;
      }
      return 0.5 - (newVal / 10);
    });

    this.seed.push(this.seed.shift());
    //console.log(this.seed);
    //console.log(roundToNearestMinute(), Date.now())

    return this.seed;
  }
};
export const prng = new MyRandom().generate();