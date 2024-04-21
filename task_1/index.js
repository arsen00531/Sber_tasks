import { encoded, translations } from './data.js'

const ignore = ['groupId', 'service', 'formatSize', 'ca']

export function translate(encoded, translations) {
    const result = []

    encoded.forEach((encod) => {
        const object = {}

        for (let encodedKey of Object.keys(encod)) {
            object[encodedKey] = encod[encodedKey]

            if (!ignore.includes(encodedKey) && !isNaN(encod[encodedKey]) && encod[encodedKey] !== null) {
                object[encodedKey] = translations[encod[encodedKey]] || ""
            }
        }
        
        result.push(object)
    })

    return result
}

console.log(translate(encoded, translations))