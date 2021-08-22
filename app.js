const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkNumber = document.querySelector("#check-number")
const outputText = document.querySelector("#output-text")

const checkBirthdateIsLucky = () =>{
    const dob = dateOfBirth.value
    const sum = calculateSum(dob)
    // if(dateOfBirth.value == "" || luckyNumber.value ==="" ){
    //     outputText.innerText = 'please provide the details'
    // }
    compareValues(sum, luckyNumber.value)
}

const compareValues = (sum, luckyNumber) =>{
    // console.log(sum,luckyNumber)
    // if(dateOfBirth.value !== '' || luckyNumber.value !== ''){
    if(isEmpty(dateOfBirth.value)){
            
        outputText.innerText = 'please provide the details'
    }else {
        if(sum%luckyNumber === 0){
            outputText.innerText = "you are lucky champ"
        }else{
            outputText.innerText = "Make your own luck!!"
        }
    }
    
}

function isEmpty(str){
    return !str.trim().length
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
