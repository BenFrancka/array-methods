const {
  map
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
