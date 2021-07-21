const map = (array, callback) => {
  let newArray = [];
    
  for(const item of array) {
    const newItem = callback(item);
    newArray = [...newArray, newItem];
  }
  return newArray;
};



module.exports = { map };
