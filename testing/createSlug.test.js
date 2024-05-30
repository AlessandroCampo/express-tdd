const { test, expect } = require('@jest/globals');
const createSlug = require('../alexSlugger.js');






test('the createSlug function should return a string', () => {
    const slug = createSlug('titolo di esempio', ['array che contiene un botto di slug']);
    expect(typeof slug).toBe('string');
});



test('createSlug should return a string in lower case', () => {
    const slug = createSlug('Titolo di Esempio', ['array che contiene un botto di slug']);
    expect(slug.toLowerCase()).toBe(slug);
});


test('createSlug should return a string where all blank spaces are replaced by -', () => {
    const slug = createSlug('titolo di esempio', ['array che contiene un botto di slug']);
    expect(slug).not.toContain(" ");
});

test('createSlug should include a counter at the end, which is incremented by one whenever the slug already exists. Therefore the function should return a slug that is not contained in the array passed as seocnd parameter', () => {

    const exampleTitles = ['titolo di prova', 'titolo di prova 2', 'titolo di prova', 'titolo di esempio', 'titolo di prova 2'];
    const hopefullyUniqueTitles = exampleTitles.reduce((acc, title) => {
        return [...acc, createSlug(title, ['array with an insane amount of slugs'])]
    }, [])
    const rI = Math.floor(Math.random() * exampleTitles.length)
    expect(hopefullyUniqueTitles).not.toContain(createSlug(exampleTitles[rI], hopefullyUniqueTitles));
});

test('createSlug should throw an error if title is not present or is not properly formatted', () => {
    expect(() => { createSlug(undefined, []) }).toThrowError();
    expect(() => { createSlug('', []) }).toThrowError();
    expect(() => { createSlug('          ', []) }).toThrowError();
    expect(() => { createSlug('a', []) }).toThrowError();
    expect(() => { createSlug('12345678910123456789101234567891012345678910123456789101234567891012345678910123456789101234567891012345678910123456789101234567891012345678', []) }).toThrowError();
    expect(() => { createSlug(23, []) }).toThrowError();
    expect(() => { createSlug('////', []) }).toThrowError();
    expect(() => { createSlug('/ /', []) }).toThrowError();

});


test('createSlug should throw an error if the array passed as second param is missing or not in valid format', () => {
    expect(() => {
        createSlug('titolo', 'titolo')
    }).toThrowError()
    expect(() => {
        createSlug('titolo', [])
    }).toThrowError()
    expect(() => {
        createSlug('titolo', [12])
    }).toThrowError()
});
