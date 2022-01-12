// Old way to use strings
const word1 = 'Mehdi';
const word2 = 'Aitbrahim';

const oldWayFullName = word1 + ' ' + word2;
console.log('Old way: ', oldWayFullName);

// New way
const newWayFullName = `${word1} ${word2}`;
console.log('New way: ', newWayFullName);

// Old way for dealing with return to new line
const oldWaySentence = 'Learn \n React.js';
console.log('Old way: ', oldWaySentence);

// New way:
const newWaySentence = `Learn
React.js
`;
console.log('New way: ', newWaySentence);