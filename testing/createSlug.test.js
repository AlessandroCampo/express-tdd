const { test, expect } = require('@jest/globals');


const createSlug = (string, array = []) => {
    let baseSlug = string.toLowerCase().replaceAll(' ', '-');
    let generatedSlug = '';
    let counter = 1;
    while (array.includes(generatedSlug)) {
        generatedSlug = `${baseSlug}-${counter}`
        counter++
    }
    return generatedSlug
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

test('createSlug should include a counter at the end, which is incremented by one whenever the slug already exists. Therefore the function should return a slug that is not contained in the array passed as seocnd parameter', () => {

    const exampleTitles = ['titolo di prova', 'titolo di prova 2', 'titolo di prova', 'titolo di esempio', 'titolo di prova 2'];
    const hopefullyUniqueTitles = exampleTitles.reduce((acc, title) => {
        return [...acc, createSlug(title)]
    }, [])
    const rI = Math.floor(Math.random() * exampleTitles.length)
    expect(hopefullyUniqueTitles).not.toContain(createSlug(exampleTitles[rI], hopefullyUniqueTitles));
});