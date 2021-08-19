const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkNumber = document.querySelector("#check-number")

const checkBirthdateIsLucky = () =>{
    const sum = calculateSum(dateOfBirth.value)
    console.log(sum)
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
