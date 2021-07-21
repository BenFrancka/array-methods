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

const findIndex = (array, callback) => {
  let index = 0;
  for(const item of array){
    if(callback(item) !== true)
      index++;
    if(callback(item) === true)
      return index;
    if(!item)
      return -1;
  } 

  

};

//my initial thought process with findIndex, but how to work the callback function in???
/* function findIndex(array, targetIndex) {
  for(let value in array){
    if(array[value] === target){
      return value;
    }
  }
  return -1;
}*/

const reduce = (array, callback, initialValue) => {
  let accumulator = initialValue;

  for(let item = 0; item < array.length; item++) {
    if(array[item]) {
      accumulator = callback(accumulator, array[item]);
    }
  }
  return accumulator;
};

const every = (array, callback) => {
  for(const item of array){
    const newItem = callback(item);
    if(newItem){
      return true;
    } else return false;
  }
};

module.exports = { 
  map,
  filter,
  findIndex,
  every,
  reduce
};
