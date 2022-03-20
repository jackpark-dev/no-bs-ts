abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`attack with ${this.getSpecialAttack()}`);
  }

  abstract getSpecialAttack(): string;
}

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return 'Hadoken';
  }
}

const ryu = new Ryu();
ryu.fight();
