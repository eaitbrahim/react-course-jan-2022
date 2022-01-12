const personalInformation = {
  firstName:  'Mehdi',
  lastName: 'Aitbrahim',
  city: 'Toledo',
  state: 'OH',
  zipCode: 43609
};

const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);