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
  - substration : i le premier nobre inférieur que le deuxième : le résultat est négatif 

- division (/)
  - cant divide by 0
    - on fail: display "can't devide by 0"
  - division is not comutative (a / b != b / a)
  - Si le dividende est égal au diviseur alors le quotient est égal à 1: ( a = b => q = 1)
  - La division d'un nombre positif par un nombre négatif : le résultat est un nombre négatif ( a/ -b = -q)
  -  La division d'un nombre negatif par un nombre positif : le résultat est un nombre négatif ( -a/ b = -q)
- Prrcentage (%)
  - How count the percentage of a postif number : ( (100 * Paritiel Value) / total value) 
  - cant count percentage of 0 or negatif number :
     - on fail: display "number is 0 or negatif"
 - Power of number (^) ( a traduire en anglais)
  - Si l'exposant est 0, alors la puissance est toujours égale à 1 (a^0 = 1 )  
  - Si l'exposant est 1, alors la puissance est toujours égale à la base ( a^1 = a)
  - Un exposant pair donne un résultat positif.
  - Un exposant impair donne un résultat négatif.
  - Si l'exposant est sur une parenthèse, la base est l'intérieur de la parenthèse (signe inclus) (-a^n).
  - Si l'exposant est sur un nombre, la base est uniquement le nombre (signe non inclus) ((-a)^n)
 
 - Racine carrée/ square root: 
  - la racine carrée de 0 egal à 0 
  - la racine carrée de 1 egal à 1
  - la racine carrée de 2 egal à 2
  - La racine carrée d'un nombre négatif : n'existe pas :
    - on fail: display "can't count the square root of a negative number"

