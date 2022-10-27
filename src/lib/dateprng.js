const getDateIntArr = () => Date.now().toString().split("").reverse().map(d => parseInt(d))

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
      return newVal;
    });

    this.seed.push(this.seed.shift());

    return this.seed[0];
  }
};
export const prng = new MyRandom().generate()