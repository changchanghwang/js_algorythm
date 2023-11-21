function solution(s) {
    let count = 0;
    let zeroCount = 0;
    while(s.length !== 1){
        zeroCount += s.match(/0/g) ? s.match(/0/g).length : 0
        const replacedS = s.replaceAll('0','')
        s = replacedS.length.toString(2)
        count++
    }
    return [count,zeroCount];
}

console.log(solution("110010101001"))

// console.log("10".match(/0/g))