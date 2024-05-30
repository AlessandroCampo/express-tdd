const validateTitle = (title) => {
    title = title.replaceAll(' ', '').replaceAll('/', '');
    if (
        !title ||
        typeof title !== 'string' ||
        title.length > 50 ||
        title.length < 2 ||
        title.trim().length === 0
    ) {
        return false
    }
    return true
}

const validateArray = (array) => {
    array = array.filter(el => typeof el === 'string')

    if (
        !array ||
        !Array.isArray(array) ||
        array.length <= 0
    ) {
        return false
    }

    return true
}



const createSlug = (string, array) => {

    if (!validateTitle(string)) {
        throw new Error('Title is missing or his format is not acceptable');
    }

    if (!validateArray(array)) {
        throw new Error('You need to pass a valid array as second parameter');
    }


    let baseSlug = string.toLowerCase().replaceAll(' ', '-').replaceAll('/', '');
    let generatedSlug = '';
    let counter = 1;
    while (array.includes(generatedSlug)) {
        generatedSlug = `${baseSlug}-${counter}`
        counter++
    }
    return generatedSlug
}

module.exports = createSlug;