//object
// const profile={
//     name: "koushika",
//     followers: 500,
//     following : 30,
//     isfollow : true ,
//     posts : 40,

// }
// console.log(profile.posts);

//conditional statements

// let num = prompt("Enter a number:")

// if(num % 5 === 0){
//     console.log(num,"is multiple of 5")
// }else{

// console.log(num , "is not multiple of 5")
// }

// let score=prompt("enter num");
// if(score >= 90 && score <=100){
//     console.log("A")
// }
// else if (score >= 70 && score<=89){
//     console.log("B")
// }
// else if (score >=60 && score<=69){
//     console.log("C")
// }
// else if (score >=50 && score<=59){
//     console.log("D")
// }
// else{
//     console.log("F")
// }

// for(i=0;i<=100;i++){
//     if(i%2===0){
//         console.log(i)
//     }
    
// }

//question one lecture-3
// let count = 0;
// do {
//     console.log(count);
//     count++;
// } while (count < 5);

//question two lecture-3
// let gamenum = 25;
// let usernum = prompt("Guess the game num:");

// while(usernum != gamenum){
//     usernum = prompt("you entered wrong number. guess again : ")
// }
// console.log("congratulations, you entered the right number");


// let fullName = prompt("enter name");
// let start = "@"
// let end = fullName.length 
// let finalusername=start+fullName+end 
// console.log(finalusername)
// output: @koushika8

// let arr=[85,97,44,37,76,60];

// let sum = 0;
// for(let i of arr){
//     sum = sum+i
//     console.log(i)
// }
// let avg = sum / arr.length 
// console.log(avg)
// console.log(sum)


// let items = [250,645,300,900,50]
// for(let i=0;i<items.length;i++){
//     let off = items[i] / 10
//     items[i] = items[i] - off
// }
//     console.log(items)
// 
/* outputs
0: 225
1: 580.5
2: 270
3: 810
4: 45 */

// let companies = ["Bloomberg","microsoft","uber","Google","IBM","Netflix"]
// console.log(companies.shift())
// console.log(companies.splice(2,1,"ola"))

// let a = [1,2,3,4];
// a.forEach((a)=>{
//     console.log(a**2)
// })

// let n = prompt("enter a number :");
// let arr=[];
// for(let i =1;i<=n;i++){
//     arr[i-1]=i;   //1(0),2(1),3(2),4(3)
// }
// console.log(arr)


// lecture-6
// let el=document.querySelector("h2");
// //el.textContent = "from Apna College students"
// //console.log(el.textContent)
// el.innerText = el.innerText + " from Apna College students"
// console.dir(el)


//lecture-7 dom part-2 practice-1
/*let btn = document.createElement("button");
btn.innerText = "Click me!";
btn.style.backgroundColor="red";
btn.style.color = "white";
document.body.appendChild(btn);*/

//practice-2
let para = document.querySelector("p");
para.classList.add("newClass");
