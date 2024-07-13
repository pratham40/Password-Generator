const result =document.getElementById("result");
const err=document.getElementById("ShowError");
const generate = document.getElementById("generate");
const clipboard =document.getElementById("clipboard");
const length  = document.getElementById("length");
const uppercase  = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");


const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numericChars = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

generate.addEventListener("click",()=>{

    console.log("clicked");
    result.style.color="black"
    const lower = lowercase.checked;
    // console.log(lower);
    const upper = uppercase.checked;
    const number = numbers.checked;
    const symbol = symbols.checked;

    const len = length.value;
    // console.log(len);

    const pass = generatePassword(len,lower,upper,number,symbol);
    result.innerText=pass
})


getRandomChar=(charSet)=>{
    return charSet.charAt(Math.floor(Math.random()*charSet.length))
}

generatePassword=(len,isLower,isUpper,isNumber,isSymbol)=>{
    if (len<4 || len>20) {
        err.style.display="inline-block"
        err.style.color="red"
        err.innerText="You must choose only length between 4 and 20 for the password.❗❗"
        return ' ';
    }else{
        err.style.display="none"
    }
    let charSet = ''
    if (isLower) {
        charSet+=lowercaseChars
    }
    if(isUpper){
        charSet+=uppercaseChars
    }
    if(isNumber){
        charSet+=numericChars
    }
    if(isSymbol){
        charSet+=specialChars
    }

    let pass=''
    for (let i = 0; i < len; i++) {
        pass+=getRandomChar(charSet);
        
    }
    result.style.background="transparent"
    return pass;
}


clipboard.addEventListener("click",()=>{
    if (result.innerText.trim()==="") {
        return;
    }
    console.log(result.innerText);
    result.style.backgroundColor="#0087ff5c"
    err.innerText="copied ✅"
    err.style.color="green"
    err.style.display="inline-block"
    navigator.clipboard.writeText(result.innerText)
})