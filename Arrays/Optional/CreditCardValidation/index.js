const invalidCard = [5,2,4,2,9,4,7,2,7,3,6,1,3]

const validCard = [7,2,4,2,7,0,1,0,2,0,6,5,4,2,1,2]

function isCreditCardVal(creditCard) {
    for(let i = 0; i < creditCard.length -1; i++) {
        if(i%2 ===1) {
            creditCard[i]*=1;
            creditCard[i]>9?creditCard[i]-=9:false;
        }
        else if(i%2 === 0) {
            creditCard[i]*=2;
            creditCard[i]>9?creditCard[i]-=9:false;
        }
    }

    let sum = 0;
    for(let j = 0; j < creditCard.length; j++) {
        sum+=creditCard[j]
    }
    console.log(sum)
    return sum%10===0?true:false
}
console.log(isCreditCardVal(validCard))
console.log(isCreditCardVal(invalidCard))