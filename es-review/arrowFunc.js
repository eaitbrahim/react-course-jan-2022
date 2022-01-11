// Old way
function addOldWay(...nums){
  let total = nums.reduce(function(x, y){
    return x+y;
  });

  console.log('Old way: ', total);
}

addOldWay(4, 5, 6, 7);

// Using arrow function
const addNewWay = (...nums) => {
  let total = nums.reduce((x, y) => x+y);

  console.log('Using arrow func: ', total);
}

addNewWay(4, 5, 6, 7);


