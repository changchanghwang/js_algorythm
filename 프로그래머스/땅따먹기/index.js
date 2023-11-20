const land = [
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
];

//오답
// function solution(land) {
//   let answer = 0;
//   let indexArr = [-1];
//   for (let i = 0; i < land.length; i++) {
//     let max = Math.max(...land[i]);
//     let index = land[i].indexOf(max);

//     if (indexArr[indexArr.length - 1] !== index) {
//       answer += max;
//       indexArr.push(index);
//     } else {
//       const arr = land[i].filter((v, i) => i !== index);
//       max = Math.max(...arr);
//       index = land[i].indexOf(max);
//       answer += max;
//       indexArr.push(index);
//     }
//   }
//   return answer;
// }

//DP 활용
function solution(land) {
  var answer = 0;
  var len = land.length;

  for (var i = len - 2; i >= 0; i--) {
    land[i][0] =
      Math.max(land[i + 1][1], land[i + 1][2], land[i + 1][3]) + land[i][0];
    land[i][1] =
      Math.max(land[i + 1][0], land[i + 1][2], land[i + 1][3]) + land[i][1];
    land[i][2] =
      Math.max(land[i + 1][0], land[i + 1][1], land[i + 1][3]) + land[i][2];
    land[i][3] =
      Math.max(land[i + 1][0], land[i + 1][1], land[i + 1][2]) + land[i][3];
  }
  answer = Math.max(...land[0]); /***포인트!!***/

  return answer;
}

//reduce
function solution(land) {
  var answer = 0;

  return Math.max(
    ...land.reduce(
      (a, c) => {
        return [
          c[0] + Math.max(a[1], a[2], a[3]),
          c[1] + Math.max(a[0], a[2], a[3]),
          c[2] + Math.max(a[0], a[1], a[3]),
          c[3] + Math.max(a[0], a[1], a[2]),
        ];
      },
      [0, 0, 0, 0]
    )
  );
}

console.log(solution(land));
