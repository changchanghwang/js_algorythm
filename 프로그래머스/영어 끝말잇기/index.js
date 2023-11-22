function solution(n, words) {

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const p = i % n + 1;
        const turn = Math.ceil((i + 1)/n);
    
        if (i > 0) {
          // 이전 단어 마지막 글자
          const lastWord = words[i - 1].split("").pop();
    
          // 중복이거나 틀린 경우
          if (i > words.indexOf(word) || words[i][0] !== lastWord) {
            return [p, turn];
          }
        }
      }

    return [0,0];
}

console.log(solution(3, ["tank", "kick", "know", "kick"]))