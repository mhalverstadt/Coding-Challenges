// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";



function ransomNote(note){
    let magMap = {}
    for(word of magazine.split(' ')){
        magMap[word] = magMap[word] +1 || 1
    }
    for(w of note.split(' ')){
       if(!magMap[w]){
        return false
       }else{
        magMap[w]--
       }
    }
    return true
}

console.log(ransomNote("sit ad est sint"))
console.log(ransomNote("sit ad est love"))


describe("Ransom Note", () => {
 it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint", magazine), true);
 });

it("Should return false", () => {
  assert.equal(ransomNote("sit ad est love", magazine), false);
 });

it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint in in", magazine), true);
 });

it("Should return false", () => {
  assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
 });
});