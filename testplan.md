# Test plan

## BDD

- Operator order is mathematicaly correct
  - On fail: does not return the right result
- An operator do one and only one operation
  - On fail: does not return the right result
- Test int/double overflow

## TDD

- Operators do the good kind of operation (+, -, \*, \/, %, pow(), sqrt(),())
- Operations return the good result (1 + 1 = 2, 1 - 1 = 0, etc...)
  - On fail: does not return the right result 
- Take only the last operation
  - On fail: cash

- addition (+)
  - addition is comutative (a + b = b + a)
  - identity element is 0 (a + 0 = a)

- multiplication (\*)
  - multiplication is comutative (a * b = b * a)
  -  (a * 0 = 0)
  -  identity element is 1 ( a * 1 = a)
  -  (a * -b = -x)

- substraction (-)
  - substraction is not comutative (a - b != b - a)

- division (/)
  - cant divide by 0
    - on fail: display "can't devide by 0"
  - division is not comutative (a / b != b / a)

