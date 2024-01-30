function solution(ingredient) {
  let answer = 0;
  const stack = [];
  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (stack.slice(-4).join('') === '1231') {
      answer += 1;
      stack.splice(-4);
    }
  }
  return answer;
}

const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];

console.log(solution(ingredient));

function solution2(ingredient) {
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient.slice(i, i + 4).join('') === '1231') {
      count++;
      ingredient.splice(i, 4);
      i -= 3;
    }
  }

  return count;
}
