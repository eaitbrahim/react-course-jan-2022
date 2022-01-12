export class Animal{
  constructor(type, legs){
    this.type = type;
    this.legs = legs;
  }

  makeNoise(sound='Loud Noise'){
    console.log(sound);
  }

  static returnTen(){
    return 10;
  }

  get metaData(){
    return `This animal of type: ${this.type}, and it has ${this.legs} legs.`;
  }
}

