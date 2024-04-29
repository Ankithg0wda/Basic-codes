var findWordsContaining = function(words, x) {

    let array = []

    for(let i=0;i<words.length;i++)
    {
       if(words[i].includes(x))
       {
       array.push(i)
       }
    }
      
      return array
};

console.log(findWordsContaining(words = ["leet","code"], x = "e"))
console.log(findWordsContaining(words = ["abc","bcd","aaaa","cbc"], x = "a"))
console.log(findWordsContaining(words = ["abc","bcd","aaaa","cbc"], x = "z"))