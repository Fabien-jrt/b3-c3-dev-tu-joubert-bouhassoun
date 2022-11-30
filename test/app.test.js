
const Calculator = require('../app/app').Calculator;
const expect = require('chai').expect;

var assert = require('assert');
describe('calculator', function(){
    describe('addition', function(){
        it ('1.Addition is Comutative (a + b = b + a)', function(done){
            let calculator = new Calculator();
            expect(calculator.Add(1,2)).to.equal(calculator.Add(2,1));
            done();
        })
        it ('1.Identity elemnt is 0 (a + 0 =  a)', function(done){
            let calculator = new Calculator();
            expect(calculator.Add(0,2)).to.equal(2);
            done();
        })

    })
})