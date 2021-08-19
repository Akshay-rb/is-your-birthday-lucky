const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkNumber = document.querySelector("#check-number")
const outputText = document.querySelector("#output-text")

const checkBirthdateIsLucky = () =>{
    const dob = dateOfBirth.value
    const sum = calculateSum(dob)
    if(sum&&dob)
    compareValues(sum, luckyNumber.value)
    outputText.innerText = "Please enter the data "
}

const compareValues = (sum, luckyNumber) =>{
    // console.log(sum,luckyNumber)
    if(sum%luckyNumber === 0){
       outputText.innerText = "your lucky"
    }else{
        outputText.innerText = "Make your own luck!!"
    }
}

const calculateSum = (dob) =>{
    dob = dob.replaceAll("-","")
    let sum = 0
    for(let i =0; i<dob.length; i++){
        sum+= Number(dob.charAt(i))
    }
    return sum
}

checkNumber.addEventListener('click',checkBirthdateIsLucky)
