
/*


 PSW GENERATOR 

 * 1. chiedere il nome 

 * 2. chiedere il cognome

 * 3. chiedere il colore preferito

 * 4. (OUTPUT) stampare sul doc nomecognomecolore21
 
 
 */

 // 1. NAME

 var userName = prompt ("what's your name?");
console.log(userName);
console.log( typeof(userName));

// 2. LASTNAME

var lastName = prompt ("what's your last name?");
console.log(lastName);
console.log( typeof(lastName));

// 3. COLOR

var color = prompt ("what's your favorite color?");
console.log(color);
console.log( typeof(color));


// 4. OUTPUT
document.getElementById("your-password").innerHTML =  userName + lastName + color + 21;

