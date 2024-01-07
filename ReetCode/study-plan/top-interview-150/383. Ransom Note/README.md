Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

### 해결방법

내 풀이

- map에 magazine에 알파벳을 카운트를 하고 카운트가 끝나면 ransomNote의 알파벳을 하나씩 빼준다.
- 만약 map에 없다면 만들 수 없는것이기 때문에 false return

solution

- magazine을 반복문을 돌려서 replace로 제거해줌
- 만약 남아있는것이 없다면 true return
