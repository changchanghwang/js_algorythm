/**
 * Solution 1
 * @param {string} num
 * @return {boolean}
 */
const digitCount = function(num) {
    let result = '';
    for(let i=0; i<num.length; i++){
        let count = 0;
        for(let j=0; j<num.length; j++){
            if(num[j] == i){
                count ++
            }
        }
        result += `${count}`
    }
    return result == num
};

console.log(digitCount("1210"))

/**
 * Solution 2
 * @param {string} num
 * @return {boolean}
 */
const digitCount2 = function(num) {
    const map = new Map();

    // Set Map
    for(let i=0; i<num.length; i++){
        map.has(num[i]) ? map.set(num[i],map.get(num[i])+1) : map.set(num[i],1)
    }

    // Check
    for(let i=0; i<num.length; i++){
        const value = map.has(`${i}`) ? map.get(`${i}`) : 0;
        if(value != num[i]){
            return false
        }
    }
    return true
};

console.log(digitCount2("1210"))

