"0" == 0      // true
0 == false     // true
"1" == true    // true

"0" === 0      // false
0 === false     // false
"1" === true    // false

let ticketValue = document.getElementById("ticket").value;

if (Number(ticketValue) > 1000) {
  console.log("통과");
} else {
  console.log("실패");
}


let ticketValue1 = document.getElementById("ticket").value;

if (ticketValue1 > 1000) {
  console.log("통과");
} else {
  console.log("실패");
}