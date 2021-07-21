const {
  map,
  filter
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

