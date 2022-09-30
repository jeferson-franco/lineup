const solution = require('./lineup.js');

test('test 1', () => {
    expect(solution('LLARL')).toBe(3);
});

test('test 2', () => {
    expect(solution('RLR')).toBe(1);
});

test('test 3', () => {
    expect(solution('')).toBe(0);
});

test('test 4', () => {
    expect(solution('L')).toBe(0);
});

test('test 5', () => {
    expect(solution('A')).toBe(1);
});

test('test 6', () => {
    expect(solution('AAAAAAAAAAAAAAA')).toBe(15);
});

test('test 7', () => {
    expect(solution('RRRRRRRRRRLLLLLLLLLRRRRLLLLLLLLLL')).toBe(16);
});

test('test 8', () => {
    expect(solution('AALAAALARAR')).toBe(5);
});
