# Test plan

## BDD

- Operator order is mathematicaly correct (1 + 2 * 3 = 1 + 6 = 7)  
  - On fail: does not return the right result
- The operators must be usable beetwin them ( 1 + 2 - 3 = 0)
- Test int/double overflow
- The user can't input a string, only numbers


## TDD

- Take only the last operation (GUI)
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

