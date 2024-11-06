// let firstNum = prompt("Birinchi son") - 0
// let secondNum = prompt("Ikkinchi son") - 0
// function addition(a, b) {
//     alert(a + b);
// }
// addition(firstNum, secondNum)


// let total = 0;
// function arrTotal(arr) {
//     for(let i = 0; i< arr.length; i++) {
//         total += arr[i]
//         console.log(total);
//     }
// }
// arrTotal([1,2,3,4,5,6,7,8,9])



// 3.
// function arrValue(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = Math.abs(arr[i]);
//     }
//     console.log(arr);
// }

// arrValue([1, -2, 3, 4, -5, 6, -7]);



// 4.
// function arrValue(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if(isNaN(arr[i])){
//             console.log(0);
//         }
//         else {
//             console.log(Number(arr[i]));
//         }
//     }
// }

// arrValue(["9","2","hola","hello","4","salom"]);



// 5.
// const personArr = [
//     {
//         name: "Abdulloh",
//         age: 19,
//         status: false
//     },
//     {
//         name: "Ibrohim",
//         age: 20,
//         status: true
//     },
//     {
//         name: "Shodiyor",
//         age: 18,
//         status: false
//     }
// ]
// for (let i = 0; i < personArr.length; i++) {
//     if (personArr[i].status === false) {
//         console.log(personArr[i]);
//     }
// }



// 6.
// function middleValue(a, b, c) {
//     console.log((a + b + c) / 3);
// }
// middleValue(4, 9, 7)



// 7.
// function arrChange(arr) {
//     if (arr[0] % 2 == 0) { 
//         arr[0] += 1;
//     } else { 
//         arr[0] -= 1;
//     }
//     console.log(arr[0]);
// }

// arrChange([4, 2, 2, 5, 235, 32, 5235]);



// 8.
// let arr1 = ["Salom","hshas","dasdq","eqeq"]
// let arr2 = ["Salom","dasdad","dasd","das","dassds"]
// let resArr = []

// for(let num1 of arr1) {
//     for(let num2 of arr2) {
//         if(num1 == num2) {
//             resArr.push(num1)
//         }
//     }
// }
// console.log(resArr);


//----------------------------------------2---2----2---2---2---2--2--2--2---2-------------------------------------------\\

// 1.
// const object = {
//     name: "Abdulloh",
//     age: 19,
//     job: "Logistic Company",
//     interest: "game",
//     hobby: "sleep",
//     number: "+998944683325",
//     username: "AU"
// };

// const entries = Object.entries(object);

// console.log(entries);



// 2.
// const person1 = {
//     name: "Abdulloh",
//     age: 19
// }
// const person2 = {
//     hobby: "Volleybool",
//     interest: "sleep"
// }
// const connectObj = Object.assign(person1, person2)
// console.log(connectObj);



// 3.
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr[arr.length - 1] += 1;
// console.log(arr);



// 4.
//uyogini qila olmadim