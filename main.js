// function calculate(num) {
// input_screen.value+=num.value;
// }

// let arrayNumbers=[];
// let ArrayOperators=[];
// let numToCalculate="";
//   for(let i=0; i < input_screen.value.length; i++){
//     numToCalculate+=input_screen[i]
//     switch (numToCalculate) {
//       case dual:
//         arrayNumbers.push(input_screen.value)
//         console.log(arrayNumbers);
//         break;

//       default:
//         break;
//     }

//   }



// let btns = Array.from(document.getElementsByClassName("btn"));
// btns.map((btn) => {
//   btn.addEventListener("click", (event) => {
//     switch (event.target.innerText) {
//       case "AC":
//         input_screen.innerText = "";
//         break;
//       case "→":
//         if (input_screen.innerText) {
//           input_screen.innerText = input_screen.innerText.slice(0, -1);
//         }
//         break;
//         case "=":
//           input_screen.innerText= eval(input_screen.innerText);
//           break;
//       default:
//         input_screen.innerText += event.target.innerText;
//     }
//   });
// });


// eval is dangeros for app with real users!!!!
// ****************do-not-use eval functionn.