class Calculator {
  
    Add (a,b) {
        return a + b ;
    }
    Multiplication(a,b){
        return a * b;
    }
    Substraction(a,b){
        return a - b ;
    }
    Division(a,b){
        if( b === 0){
            return 'can\'t devide by 0' 
        }
        return a / b ;   
    }
}

module.exports = {
    Calculator:Calculator
}