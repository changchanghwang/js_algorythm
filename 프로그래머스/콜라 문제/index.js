function solution(a, b, n) {
  let have = n;
  let answer = 0;
  while (a <= have) {
    const count = Math.floor(have / a) * b;
    const rest = (have % a) + count;

    answer += count;
    have = rest;
  }

  return answer;
}

const a = 3;
const b = 1;
const n = 20;

console.log(solution(a, b, n));
