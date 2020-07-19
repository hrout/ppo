import bbo from '../bbo';

describe('unionWith', () => {
  test('unionWith is a Function', () => {
    expect(bbo.unionWith).toBeInstanceOf(Function);
  });

  test('Produces the appropriate results', () => {
    expect(
      bbo.unionWith(
        [1, 1.2, 1.5, 3, 0],
        [1.9, 3, 0, 3.9],
        (a, b) => Math.round(a) === Math.round(b)
      )
    ).toEqual([1, 1.2, 1.5, 3, 0, 3.9]);
  });
});