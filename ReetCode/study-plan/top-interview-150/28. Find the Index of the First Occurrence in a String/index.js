/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

const haystack = "sadbutsad"
const needle = "sad"

console.log(strStr(haystack, needle))