
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
        it ('2.Identity elemnt is 0 (a + 0 =  a)', function(done){
            let calculator = new Calculator();
            expect(calculator.Add(0,2)).to.equal(2);
            done();
        })

    })
    describe('Multiplication', function(){
        it ('1.Multiplication is Comutative (a * b = b * a)', function(done){
            let calculator = new Calculator();
            expect(calculator.Multiplication(1,2)).to.equal(calculator.Multiplication(2,1));
            done();
        })
        it ('2.Multiply by  0 (a * 0 =  0)', function(done){
            let calculator = new Calculator();
            expect(calculator.Multiplication(0,2)).to.equal(0);
            done();
        })
        it ('3.Multiply by  1 (a * 1 = a)', function(done){
            let calculator = new Calculator();
            expect(calculator.Multiplication(1,2)).to.equal(2);
            done();
        })
        it ('4.Multiply by negatif number (a * -b  = -x )', function(done){
            let calculator = new Calculator();
            expect(calculator.Multiplication(1,2)).to.equal(2);
            done();
        })
    })
    describe('substraction ', function(){
        it ('1.Substraction is  not  Comutative (a - b = b - a)', function(done){
            let calculator = new Calculator();
            expect(calculator.Substraction(4,2)).to.equal(2);
            done();
        })
    })
})