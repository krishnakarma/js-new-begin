let score = undefined

// const {score} = req.body
console.log(typeof score)
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber);
// console.log(score);


//note : "33" =>33
//"3abc" => nan but type is number
// true => 1 , false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean( isLoggedIn )
console.log(booleanIsLoggedIn);
// 1=> true ; 0=>false
//"" => false
//"krishna" => true

let someNumber = 33

let stringNumber  = String(someNumber)

console.log(typeof stringNumber);