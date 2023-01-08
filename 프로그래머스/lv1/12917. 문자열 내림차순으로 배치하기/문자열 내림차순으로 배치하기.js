function solution(s) {
  let a = [];
  let b = [];
  function detachAlphabet(alphabet) {
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet[i] === alphabet[i].toUpperCase()) {
        a.push(alphabet[i]);
      } else {
        b.push(alphabet[i]);
      }
    }
  }
  detachAlphabet(s);

  const smallLetter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const largeLetter = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    ,
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  
  const dd = Array.from(b).map((item) => {
    return smallLetter.indexOf(item);
  });
  
  const ddd = Array.from(a).map((item) => {
    return largeLetter.indexOf(item);
  });
  const dsadd = ddd.sort((a, b) => b - a).map((item) => largeLetter[item]);
  return dd
    .sort((a, b) => b - a)
    .map((item) => smallLetter[item])
    .concat(dsadd)
    .join("");
}
