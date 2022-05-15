let salom = "Assalomu Aleykum"
alert (salom + ' ' + "R'oyxatdan O'ting" + " " + '!')
let name = prompt ("iltimos ismingizni kiriting", "Fotih")
let lastName = prompt ("iltimos familyangizni kiriting", "Yusupov")
let yosh =prompt ("tugilgan yilingiz", "2022")
let year = 2022
let useryear = year - yosh;
alert ( name + '\n' + lastName + '\n' + useryear)

let boradi = 18
if (useryear >= boradi) {
    alert('гoдин');
}else if(useryear < boradi) {
    alert('нигoдин');
}
