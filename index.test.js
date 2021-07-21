const {
  map,
  filter,
  findIndex,
  every
} = require('./index');

describe('map', () => {
  it('takes an array and a callback and creates a new array with the return value of each called callback.', () => {
    const callback = (item) => item.toUpperCase();
    const arr = ['bob', 'ben'];
    const expected = ['BOB', 'BEN'];
    const actual = map(arr, callback);

    expect(actual).toEqual(expected);
  });
});

describe('filter', () => {
  it('takes an array and a callback and returns a new array with all items whose callback returned true.', () => {
    const callback = (item) => {
      if(item.startsWith('b') === true)
        return item;
    };
    const arr = ['bob', 'ben'];
    const expected = ['bob', 'ben'];
    const actual = filter(arr, callback);
  
    expect(actual).toEqual(expected);
  });
});

describe('findIndex', () => {
  it('takes an array and a callback and returns the index of the first item whose callback returns true.', () => {
    const callback = (item) => {
      if(item === 3)
        return true;
    };
    const array = [1, 2, 3, 4];
    const expected = 2;
    const actual = findIndex(array, callback);
    
    expect(actual).toEqual(expected);
  });
});

describe('every', () => {
  it('takes an array and a callback and returns true if every item in the array is true, otherwise returns false.', () => {
    const callback = (item) => {
      if(item.startsWith('b') === true)
        return true;
    };
    const arr = ['bob', 'ben'];
    const expected = true;
    const actual = every(arr, callback);
  
    expect(actual).toEqual(expected);
  });
});

