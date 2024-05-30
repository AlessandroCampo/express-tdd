const { test, expect } = require('@jest/globals');


const createSlug = (string) => {
    return 'Hello World';
}

test('the createSlug function should return a string', () => {
    const slug = createSlug('titolo di esempio');
    expect(typeof slug).toBe('string');
});