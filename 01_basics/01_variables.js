// name should be easily readable  
const accountId = 144553
let accountEmail = "krishnakarma017@gmail.com"
var accountPassword = "12345"
accountCity = "khargone"
let accountState = "madhyapradesh";
// accountId = 2    this is not allowed if this is present then code will not execute
accountEmail = "krishmalkfkerjrok@gmail.com"

accountPassword = "212121"

accountCity = "delhi"
console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);

console.table([accountEmail,accountId,accountPassword,accountCity, accountState])
 

/*
note: 
prefer not to use var bcz of issue in block scope and functional scope

*/


 