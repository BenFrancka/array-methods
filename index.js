const map = (array, callback) => {
  let newArray = [];
    
  for(const item of array) {
    const newItem = callback(item);
    newArray = [...newArray, newItem];
  }
  return newArray;
};

const filter = (array, callback) => {
  let trueArray = [];
  for(const item of array){
    const newItem = callback(item);
    if(newItem) {
      trueArray = [...trueArray, newItem];
    }
  }
  return trueArray;
};

module.exports = { 
  map,
  filter 
};
