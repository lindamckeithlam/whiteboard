function valid_parenthesis(str) {
  let indices = [];
  let hashes = { "{": ["{", "}"], "[": ["[", "]"], "(": ["(", ")"] };

  str.forEach(char => {
    let local = [];
    hashes[char].forEach(char2, i => {
      let current_letters = hashes[char];
      if (
        str.indexOf(current_letters[i]) &&
        str.indexOf(current_letters[i + 1])
      ) {
        indices.push([
          str.indexOf(current_letters[i]),
          str.indexOf(current_letters[i + 1])
        ]);
      } else {
        return false;
      }
    });
  });

  let sorted = indices.sort((a, b) => {
    return a - b;
  });
  return sorted.toString() === indices.toString();
}
