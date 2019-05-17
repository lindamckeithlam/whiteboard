function valid_parenthesis(str) {
  const queue = [];
  const opens = ["{", "(", "["];
  const closes = ["}", ")", "]"];

  const hash = {
    "{": "}",
    "[": "]",
    "(": ")"
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (opens.includes(char)) {
      queue.push(char);
    } else {
      var newChar = queue.pop();
      if (hash[newChar] !== char) return false;
    }
  }
  return true;
}
