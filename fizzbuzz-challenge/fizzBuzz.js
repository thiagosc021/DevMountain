for(i=1;i<=50;i++){
    let divBy3 = i % 3 == 0
    let divBy5 = i % 5 == 0

    if(divBy3 && divBy5){
        console.log('fizzbuzz')
    } else if(divBy3) {
        console.log('fizz')
    } else if(divBy5) {
        console.log('buzz')
    } else {
        console.log(i)
    }
}