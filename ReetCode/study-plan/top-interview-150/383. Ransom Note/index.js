/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    const map = new Map();
    magazine.split('').forEach((char) => {
      map.set(char, map.get(char) ? map.get(char) +1 : 1)
    })
    
    for(let i = 0; i<ransomNote.length; i++){
      if(map.get(ransomNote[i]) > 0){
        map.set(ransomNote[i], map.get(ransomNote[i]) -1)
      } else {
        return false
      }
    }

    return true
};

const ransomNote = "a"
const magazine = "b"

console.log(canConstruct(ransomNote, magazine))

const canConstruct2 = function (ransomNote, magazine) {
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, "");
  }
  
  if (!ransomNote) return true;
  else return false;
};