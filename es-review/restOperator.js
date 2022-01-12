 // Old way
function addOldAway(nums){
  console.log(arguments);
}

// Using rest operator
function addNewAway(...nums){
  console.log(nums);
}


addOldAway(5, 7, 9);
addNewAway(5, 7, 9, 10);