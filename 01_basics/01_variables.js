const accountId = 235453
let accountEmail =  "aditya@google.com"
var accountPassword  = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "adityachatap123@gmail.com"
accountPassword = "2121212111"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer noot to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])