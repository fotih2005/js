let salom = "Assalomu Aleykum"
alert (salom + ' ' + "R'oyxatdan O'ting" + " " + '!')
let name = prompt ("iltimos ismingizni kiriting", "Fotih")
let lastName = prompt ("iltimos familyangizni kiriting", "Yusupov")
let yosh =prompt ("tugilgan yilingiz", "2022")
let year = 2022
let useryear = year - yosh;
alert ( name + '\n' + lastName + '\n' + useryear)

let teng = 18
if (useryear >= teng) {
    alert('гoдин');
}else if(useryear < teng) {
    alert('нигoдин');
}
