function encryptText(text) {
    var word = text.split(" ").map((x) => {
      // return x + " " + x.length;
      if (x.length % 3 === 0) {
        return (x = 0);
      } else {
        return (x = 1);
      }
    });
    return JSON.stringify(word);
  }
  
  console.log(encryptText("How are you?")); // this must print 001
  console.log(encryptText("I'm busy right now")); // this must print 0110
  console.log(encryptText("The quick brown fox jumps over the lazy dog")); // this must print 011011010
  console.log(encryptText("This man and his son are best friends")); // this must print 10000011
  