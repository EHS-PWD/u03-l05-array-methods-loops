/*
=========================================================
INDIVIDUAL CLASSWORK ASSIGNMENT
JavaScript Arrays: Methods + Loops Challenge
=========================================================

Directions:
- Complete all 6 challenges below.
- This is an INDIVIDUAL assignment.
- Read each challenge carefully before coding.
- Use console.log() to test your answers.
- Every challenge uses BOTH array methods and loops.
- Some challenges also use:
  - string methods
  - number methods
  - conditionals
  - functions

Helpful Reminder:
- includes() checks if a value exists
- indexOf() finds the position of a value
- sort() sorts an array
- reverse() flips an array
- push() adds to an array
- spread operator [...] copies an array
- loops help us go through arrays one item at a time

=========================================================
EXAMPLE
Goal: Print each fruit in uppercase
=========================================================
*/

let exampleFruits = ["apple", "banana", "grape"];

for (let i = 0; i < exampleFruits.length; i++) {
  console.log(exampleFruits[i].toUpperCase());
}

/*
=========================================================
CHALLENGE 1
Search + Loop + Conditional
=========================================================

Directions:
Use a for loop to go through the hobbies array.
Check if each hobby includes the letter "i".

If it does:
- print the hobby in UPPERCASE

If it does not:
- print the hobby in lowercase

Use:
- for loop
- includes()
- if / else
- string methods
*/

let hobbies = ["Music", "Drawing", "Soccer", "Gaming", "Reading"];

// Your code here



/*
=========================================================
CHALLENGE 2
Sort + Loop + Function
=========================================================

Directions:
Create a function called showSortedNames.

Inside the function:
- make a copy of the studentNames array
- sort the copied array alphabetically
- use a loop to print each name one at a time

Then call the function.

Use:
- function
- spread operator
- sort()
- loop
*/

let studentNames = ["Zoe", "Carlos", "Mia", "Andre", "Bella"];

// Your code here



/*
=========================================================
CHALLENGE 3
Search + Count + Function
=========================================================

Directions:
Create a function called countPassingScores.

Inside the function:
- go through the scores array
- count how many scores are 70 or higher
- print the total number of passing scores

Use:
- function
- loop
- conditional
- count variable

Bonus:
Also create a new array called passingScores and push the passing
scores into it. Then print the new array.
*/

let scores = [88, 67, 92, 45, 73, 59, 100, 70];

// Your code here



/*
=========================================================
CHALLENGE 4
Search + Loop + String Method + Conditional
=========================================================

Directions:
Make a copy of the words array.

Use a loop to go through each word in the copied array.

If the word has MORE THAN 5 letters:
- print the word in ALL UPPERCASE

If the word has 5 letters or LESS:
- print the word in all lowercase

After the loop:
- print the copied array reversed (use reverse())

Use:
- spread operator
- loop
- if / else
- string methods
- reverse()
*/

let words = ["JAVASCRIPT", "ARRAY", "LOOP", "FUNCTION", "CODE"];

// Your code here



/*
=========================================================
CHALLENGE 5
Number Method + Sort + Loop + Conditional
=========================================================

Directions:
Use a loop to go through the prices array.

For each price:
- round it using Math.round()
- if the rounded number is greater than or equal to 10,
  push it into a new array called higherPrices

After the loop:
- sort higherPrices from least to greatest
- print the final array

Use:
- loop
- Math.round()
- if statement
- push()
- sort((a, b) => a - b)
*/

let prices = [9.2, 15.7, 3.5, 12.1, 10.8, 7.9, 20.4];
let higherPrices = [];

// Your code here



/*
=========================================================
CHALLENGE 6
Everything Mixed Together
=========================================================

Directions:
Create a function called findFavoriteFoods.

Inside the function:
- make a copy of the foods array
- sort the copied array alphabetically
- use a loop to go through the copied array
- if a food includes the letter "a", push it into a new array called favoriteFoods
- print each favorite food in uppercase
- after the loop, print the final favoriteFoods array
- also print the index position of "pasta" in the sorted copied array

Use:
- function
- spread operator
- sort()
- loop
- includes()
- push()
- toUpperCase()
- indexOf()
*/

let foods = ["burger", "pasta", "tacos", "salad", "rice", "pizza"];

// Your code here