function solution(s){
    const arr = s.split("");
    const stack = [];
    while(arr.length){
        const char = arr.pop();
        if(char === ")"){
            stack.push(char);
        }
        else{
            if(stack.length === 0){
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0 ? true : false
} // -> 시간복잡도 때문에 불통

console.log(solution(")()("));

// NOTE: 다른사람의 풀이. 스택문제지만 스택으로 풀면 효율성문제가 난다..
// function solution2(s){
//     var answer = true;
//        let bracket = 0;
//        const length = s.length
   
//        for( let i = 0 ; i < length ; i++ ){
//            if (s[i] == '(') bracket++;
//            else bracket--;
   
//            if(bracket < 0){
//                answer = false;
//                break;
//            }
   
//            if(bracket > length-i){
//                answer = false;
//                break;
//            }
//        }
   
//        if(bracket != 0){
//            answer = false;
//        }
   
//        return answer;
//    }
