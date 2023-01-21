function solution(rsp) {
  return Array.from(rsp)
    .map((item) => {
      if (item === "2") {
        return "0";
      }
      if (item === "0") {
        return "5";
      }
      if (item === "5") {
        return "2";
      }
    })
    .join("");
}
