type InputType = number | string;

function combine(
  input1: InputType,
  input2: number | string,
  resultType: "asNumber" | "asText"
): number | string {
  if (resultType === "asNumber") {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

console.log(combine(30, 26, "asNumber"));
console.log(combine("Max", "Anna", "asText"));
console.log(combine("20", "45", "asNumber"));
console.log(combine("20", "45", "asText"));
