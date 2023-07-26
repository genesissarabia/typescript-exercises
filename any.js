// Any
// There are some places where TypeScript will not try to infer what type something is—generally when a variable is declared without being assigned an initial value. In situations where it isn’t able to infer a type, TypeScript will consider a variable to be of type any.
//
// Variables of type any can be assigned to any value and TypeScript won’t give an error if they’re reassigned to a different type later on.
//
//     let onOrOff;
//
// onOrOff = 1;
// onOrOff = false;
// In the code above, we declared the variable onOrOff without an initial value. TypeScript considers it to be of type any, and, therefore, doesn’t produce an error when we change the variable’s assignment from a number value to a boolean value.
// Instructions
// 1.
// Declare a variable with let named guess, without assigning it a value.
//
// 2.
// We’re thinking of a color… take a guess at what it is. On a new line, assign this color (as a string) to the guess variable.
//
// 3.
// Now we’re thinking of a number… Take a guess at what it is. On a new line, reassign the guess variable to your number guess.
//
// 4.
// Now let’s verify that TypeScript has no problem with the assignments of our guess variable. Run tsc and notice the lack of error messages!
var guess;
guess = 'red';
guess = 1;
