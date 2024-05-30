const { test, expect } = require('@jest/globals');


const createSlug = (string) => {
    return string.toLowerCase().replaceAll(' ', '-')
}

test('the createSlug function should return a string', () => {
    const slug = createSlug('titolo di esempio');
    expect(typeof slug).toBe('string');
});



test('createSlug should return a string in lower case', () => {
    const slug = createSlug('titolo di Esempio');
    expect(slug.toLowerCase()).toBe(slug);
});


test('createSlug should return a string where all blank spaces are replaced by -', () => {
    const slug = createSlug('titolo di Esempio');
    expect(slug).not.toContain(" ");
});