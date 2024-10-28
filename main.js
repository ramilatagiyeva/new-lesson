// bunlar 2-ci taska aid suallardir
  // 1. sual
for (let i = 1; i <= 5; i++) {
    console.log('*'.repeat(i));
}

 // 2. sual
for (let i = 5; i >= 1; i--) {
    console.log('*'.repeat(i));
}

 // 3. ?

  // 4. sual
 for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
// 5. sual
const correctUsername = "username";
const correctPassword = "password";

const username = prompt("İstifadeci adinizi daxil edin:");
const password = prompt("sifrenizi daxil edin:");

if (username === correctUsername && password === correctPassword) {
    console.log("Xos gelmisiniz!");
} else {
    console.log("İstifadeci adi ve sifre sehvdir.");
}

// bunlar 1-ci taska aid suallardir
 // 1. sual
let eded = prompt("Bir eded daxil edin:");

if (eded > 0) {
    console.log("Musbet");
} else if (eded < 0) {
    console.log("Menfi");
} else {
    console.log("Sifir");
}

// 2. sual
let rol = prompt("İstifadeci rolunu daxil edin (admin, istifadeci, qonaq):");

switch (rol) {
    case "admin":
        console.log("Xos gelmisiniz, admin! İdareetme paneline daxil ola bilersiniz.");
        break;
    case "istifadeci":
        console.log("Xos gelmisiniz, istifadeci! Hesabiniza daxil oldunuz.");
        break;
    case "qonaq":
        console.log("Xos gelmisiniz, qonaq! Melumatlari nezerden kecire bilersiniz.");
        break;
    default:
        console.log("Duzgun bir rol daxil edin.");
}
// 3. sual
let reqem = prompt("Bir eded daxil edin:");

if (reqem % 2 === 0) {
    console.log("Cüt");
} else {
    console.log("Tək");
}
// 4. sual
 // == - iki deyeri muqayise edir tipini nezere almir
 // === - iki deyeri muqayise edir hem tipini hemde deyeri nezere alir
 // !== - iki deyeri muqayise edir tipini nezere alir
 // <= -  kiçik ve ya beraber Sol terefdeki deyerin sag terefdeki deyerden kicik ve ya ona beraber oldugunu yoxlayır. 
 // => - boyuk ve ya beraber Sol terefdeki deyerin sag terefdeki deyerden boyuk ve ya ona beraber oldugunu yoxlayır.

 // 5. sual
 let a = '5';
let b = 5;
console.log(a == b); 
console.log(a === b); 
// 6. sual
let number = 5;
if (number !== 10) {
    console.log("Ədəd 10-a bərabər deyil.");
} else {
    console.log("Ədəd 10-a bərabərdir.");
}
// 7. sual
let num = 7;
if (num > 5 && num < 10) {
    console.log("Ədəd 5-dən böyük və 10-dan kiçikdir.");
} else {
    console.log("Şərtlərə uyğun deyil.");
}
// 8. sual--?
// 9. sual
let value = true; 

let oppositeValue = !value;

console.log(oppositeValue); 
// 10.sual
let condition1 = true;
let condition2 = false;

if (condition1 && condition2) {
    console.log("Her iki shert dogrudur.");
} else {
    console.log("sertlerden biri ve ya ikisi yanlisdir.");
}
// 11. sual
let condition3 = false;
let condition4 = true;

if (condition1 || condition2) {
    console.log("en azi bir sert dogrudur.");
} else {
    console.log("Her iki sert yanlisdir.");
}
// 12. sual
let num1 = 8;

if (num1 > 0 && num1 % 2 === 0) {
    console.log("eded musbet və cutdur.");
} else {
    console.log("eded musbet deyil ve ya cut deyil.");
}
// 13.sual
let username1 = "user123";
let password1 = "pass456";

if (username1 && password1) {
    console.log("İstifadeci adi və parol etibarlidir.");
} else {
    console.log("İstifadeci adi və ya parol etibarsizdir.");
}
// 14.sual
let number1 = -3;

switch (true) {
    case (number1 < 0):
        console.log("eded menfidir.");
        break;
    case (number1 === 0):
        console.log("eded sifirdir.");
        break;
    default:
        console.log("eded musbetdir.");
}