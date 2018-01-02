let text = "abbb";
let pattern = "ab*";

function isMatch(text, pattern) {
  // your code goes here
  //   split pattern and text into arrays
  let pattern_array = pattern.split("");
  let text_array = text.split("");

  // wildcard "." logic
  let flag = true;
  // loop through pattern_array
  for (let i = 0; i < text_array.length; i++) {
    // the letter before * will either be repeated following the * or the letter before will be eliminated
    if (
      pattern_array[i] === "*" &&
      text_array[i] - 1 !== text_array[i] &&
      text_array[i] + 1 === text_array[i]
    ) {
      console.log("holla!");
    }
  }
  // loop through text_array
  for (let i = 0; i < text_array.length; i++) {
    if (pattern_array[i] === ".") {
      if (
        pattern_array[i] - 1 === text_array[i] - 1 &&
        pattern_array[i] + 1 !== null &&
        pattern_array[i] + 1 === text_array[i] + 1
      ) 
    } else if (pattern_array[i] !== text_array[i] && pattern_array[i] !== ".") {
        console.log("setting flag to false");
        flag = false;
        return flag;
      }
    }
  }
  return flag;
}
console.log("isMatch:", isMatch(text, pattern));
//false

// if pattern_array.length === text_array.length{
//     // when we get to the * in pattern_array,
//     if pattern_array[p] == "*"{
//         // look at previous position
//         // and see if it matches
//         if (pattern_array[p] - 1 === text_array[t] - 1){
//             // then eliminate previous value in pattern array
//             pattern_array.split(p -1, 1)
//             // and * from pattern-array
//             text_array.split(t, 1)
//         }
//     }

//     if (value[p] === "." ) {
//         value[p] = value[t]
//     }
// }else{

// }
