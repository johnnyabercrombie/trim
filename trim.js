const str = "             This                string has           spaces          ";
// => "This                string has           spaces"

const trim = (str) => {
  // Find the index of the first character of the first word
  // Find the index of the last character of the last word
  // Create a substring between the 2 indexes
  const findStartingIndex = (str) => {
    let index = 0;

    for (const letter of str) {
      if (letter === " ") {
        index++;
        continue;
      } else {
        break;
      }
    }

    return index;
  }

  const findEndIndex = (str) => {
    let index = str.length;

    for (let i = str.length - 1; i>=0; i--) {
      const letter = str[i];
      if (letter === " ") {
        index--;
        continue;
      } else {
        break;
      }
    }

    return index;
  }

  const firstIndex = findStartingIndex(str);
  const lastIndex = findEndIndex(str);

  return str.substring(firstIndex, lastIndex);
}

console.log("Trimmed string:", trim(str));
console.log("Length before:", str.length)
console.log("Length after:", trim(str).length)