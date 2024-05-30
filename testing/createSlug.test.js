const { test, expect } = require('@jest/globals');


const createSlug = (string) => {
    return string.toLowerCase()
}

test('the createSlug function should return a string', () => {
    const slug = createSlug('titolo di esempio');
    expect(typeof slug).toBe('string');
});



test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
    const slug = createSlug('titolo di Esempio');
    expect(slug.toLowerCase()).toBe(slug);
});