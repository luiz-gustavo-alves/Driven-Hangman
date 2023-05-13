/* Replaces special characters into normal characters */
export default function parseSpecialChar(word) {
    return word.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}