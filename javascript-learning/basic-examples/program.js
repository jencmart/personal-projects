document.writeln("Hello world!");

// Throughout the book, a method "method" is used to define new methods
// Explained in Chapter 4


Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this; 
}; 

// *******************
// ***  CHAPTER 2  *** GRAMMAR
// *******************

// WHITESPACE
/* this is a block comment, came from language PL/I 
   but in JS * and / can occur in regex, so it is not safe
   thus block comments are deprecated 
 */

// NAMES
// statements, variables, parameters, properties, operators, labels
// can be  i,  i3,  i_5
// except reserved words ( while, for, if ....)
// some word should have been reserved but were not (undefined, NaN, Infinity)


// NUMBERS
// JS has single number type 
// internally 64bit float (same as Java double)
// !!! no separate integer type ... 1 and 1.0 are same value
// this is good for avoidance of large amount of numerical errors
// exponent notation possible 3e2 ... 3*10^2 = 300

// NaN ... result of wrong mathematic operation
//     ... not equal to everything (including iself)
//     ... detected using isNaN(number) function

// Infinity ... all values greather than 1.79769313486231570e+308
// Numbers have methods


// STRINGS
// all characters are 16bit (JS released in the time of 16bit Unicode)
// can be singe od double quoted
// double quotes are strongly preffered !!!
// \ is escape character 
// ... \' \" \\ \/ \b \f \n \r \t 
// and \u 4hex digits ... "A" == "\u0041"
// single character types does not exists - only strings
// "seven".length ... 5 

// STRINGS ARE IMMUTABLE - once created, cannot be changed
// but easy to concatenate using +
// 'c' + 'a' + 't' === 'cat' 
// Strings have methods


// STATEMENTS
// each <script> tag deliveres te compilation unit
// it is immediately compiled and executed
// thus JS lack a linker ....
// leads to throwing everything in common global namespace - SHITTY

// variable inside function ... private to the function

// switch, while, for, do ... have optional "label" prefix
// it interacts with the break statement ... 

// !!! blocks -- set of statements wrapped in { }
// unlike other languages JS does not create new scope
// thus variables should be defined at the top of the function
// and not in blocks

// label(name) : expression / conditional / loop / break / return / throw
// if ( expression ) then { } else { }

// falsy values : false, null, undefined, "", '', 0, NaN
// everything else is true 

// for ( ; ; ) { }
// for (variable in object)
// usually necessary to test object.hasOwnProperty(variable) 
// so we ensure it is in object and not in prototype chain
// .. for (myvar in obj ) { 
//  if (obj.hasOwnProperty(myvar))  { ... }
//}

// try {} catch (variable_name) {} // variable_name .. recieves exception object

// throw ... ;
// exception is usually object literal with name & message property


// no return .... returned value will be undefined 
// return and value must be on the same line !!

// break label_name; ... exit from the labeled statement
// again, no posible line break


// EXPRESSIONS
// literal value ( string or number)
// variable
// built in value ( true, false, NaN, Infinity, null, undefined)
// invocation expression preceeded by new
// refinement expression preceeded by delete
// expresion in ()
// expression with prefix operator
// expression infix_op expression
// expression ? expression : expression  // ternary operator
// invocation
// refinement

// pozn. obj or arr is expression
//      obj.o   arr[0] .. refinements
//but I always say .x or [0] is prop or elements, never call it as the refinement.

// operator precedence (highest to lowest)
// . [] ( )     Refinement and invocation (=execution of function value)
//delete new typeof + - !   Unary operators 
// * / %   Multiplication, division, remainder 
// + -Addition/concatenation, subtraction 
// >= <= > <Inequality 
// === !==Equality 
// &&Logical and 
// ||Logical or 
// ?:Ternary 

// The values produced by typeof are
// 'number', 'string', 'boolean', 'undefined', 'function',  'object'

// !!!! If the operand is an array or null
// !!!! then the result is 'object'
// .... that is wrong and it is BULLSHIT

// + adds only when both are numbers ( otherwise concatenates)


// LITERALS ?????????
// object literals .. convenient notation for specifying new objects
// names of properties - names or strings
// names .. literal names , not variable names
// thus names of properties of object must be known at compile time
// values of the properties are expressions

// literal = number / string / object / array / function / regexp    literal
// object literal ... { name-or-string : expression, ... }
// array literal .. [expression , ... ]
// regexp literal .. / regexp choice / g  i m 


// FUNCTIONS
// function literal ... function name (parameters) { body }
// function literals defines a function value
// names is only optional ( for ability of recursive call )



// *******************
// ***  CHAPTER 3  *** OBJECTS
// *******************
