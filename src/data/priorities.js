
class Priority{
  constructor(num, color, colorName) {
    this.num = num;
    this.color = color;
    this.colorName = colorName;
  }
}

const priorities = [
  new Priority(1, 'rgb(220, 20, 60)', 'crimson'),
  new Priority(2, 'rgb(255, 140, 0)', 'darkorange'),
  new Priority(3, 'rgb(100, 149, 237)', 'cornflowerblue'),
  new Priority(4, 'rgb(175, 175, 175)', 'darkgray')
];

export default priorities;
