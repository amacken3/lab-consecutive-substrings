function consecutiveSubstrings(string) {
  // type your code here
    const substrings = [];

    for (let i = 0; i < string.length; i++) {
      for (let j = i + 1; j <= string.length; j++) {
          substrings.push(string.substring(i, j));
      }
    }
    return substrings;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("");

  console.log("Expecting: ['h', 'hi', 'i']");
  console.log("=>", consecutiveSubstrings('hi'));

  console.log("");

  console.log("Expecting: ['d', 'do', 'dog', 'o', 'og', 'g']");
  console.log("=>", consecutiveSubstrings('dog'));

  console.log("");

  console.log("Expecting: ['a', 'aa', 'aaa', 'aaaa', 'a', 'aa', 'aaa', 'a', 'aa', 'a']");
  console.log("=>", consecutiveSubstrings('aaaa'));
}

module.exports = consecutiveSubstrings;


