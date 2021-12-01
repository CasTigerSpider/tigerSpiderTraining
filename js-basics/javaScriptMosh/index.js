// Constants and variables
const interestRate = 0.3;
let firstName = 'Cas';
let lastName = undefined;
let isApproved = true; // Boolean
// null is used to clear the value of a variable
let selectedColour = null;

// Reference types: objects, arrays and functions
// Object literal (key value pairs)
let person = {
    name: 'Mosh',
    age: 30
}

// Access object properties
person.name = 'John';
person['name'] = 'Mary';
let selection = 'name';
person[selection] = 'Jack';

console.log(person.name);

// Arrays
let selectedColours = ['red', 'blue'];
selectedColours[2] = 'green';

// Javascript is a dynamic language, type of variable can change during runtime
// Length of arrays can change at runtime
// Can have multiple variable types in one array
selectedColours[2] = 1.0;
console.log(selectedColours);

// Arrays are objects and therefore have properties
console.log(selectedColours.length);

//Functions (parameters)
function greet(name, lastName) {
    // Concatenation
    console.log('Hello ' + name + ' ' + lastName);
}
greet('Cas','Kent');
// Default value of variables in Javascript is undefined, e.g. lastName in this greet() call
greet('Mary');
// Parameter is at time of declaration (unknown value), argument is actual value supplied for that parameter

// Function return values
function square(number) {
    return number * number
}
output = square(2);
console.log(output);
console.log(square(2));

// Operators (arithmetic, assignment, comparison, logical, bitwise)

// Arithmetic operators
let x = 10;
let y = 3;
// Division is float by default
console.log(x / y);
// Mod
console.log(x % y);
// Power
console.log(x ** y);
// Print value then increment
console.log(x++);
// Increment then print resulting value
console.log(++x);

// Print value then decrement
console.log(y++);
// Decrement then print resulting value
console.log(++y);

// Assignment Operators
x = x + 5;
x += 5;
x = x * 3;
x *= 3;

// Comparison Operators
// Relational
console.log(x >= y);
// Equality
// Strict equality operator (triple equals sign!!!)
// Same value AND TYPE
console.log('Strict equality');
console.log(1 === 1);
console.log('1' === 1);
console.log(true === 1);
console.log(x !== 1);
// Loose equality operator (converts the RHS var to the same type as LHS var)
// Same value
console.log('Loose equality');
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);
console.log(x != 1);

console.log('Ternary Operator');
// If a customer has more than 100 points they are a gold customer
// Otherwise they are a silver customer
let points = 110;
let membership = points > 100 ? 'gold' : 'silver';
console.log(membership);
points = 99;
membership = points > 100 ? 'gold' : 'silver';
console.log(membership);

console.log('Logical Operators');
// Logical AND
console.log(true && false);
// logical OR
let highIncome = false;
let goodCredit = false;
let eligible = highIncome || goodCredit;
console.log('Eligible for loan', eligible);
// NOT (!)
let ineligible = !eligible;
console.log('Application refused', ineligible);

console.log('Logical operators with non-booleans');
// Results of a logical is not necessarily true/false
console.log(false || true);
console.log(false || 'Mosh');
console.log(false || 1);
// Falsey (false)
// undefined
// null
// 0
// false
// '' (empty string)
// NaN
// Anything that is not falsey is truthy
// Logical OR returns the first thruthy argument it finds ("short-circuiting")
console.log(false || 1 || 2);
// Logical OR example
let userColour = undefined;
let defaultColour = 'blue';
let currentColour = userColour || defaultColour;
console.log(currentColour);

console.log('Bitwise operators');
// 1 = 00000001
// 2 = 00000010
// Bitwise OR
1 | 2
// R = 00000011 = 3
// Bitwise AND
1 & 2
// R = 00000000 = 0

console.log('\nSwitch and case');
let role = 'mod';
switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'mod':
        console.log('Moderator');
        break;
    default:
        console.log('Unknown User');
        break;
}

console.log('\nif and else');
if (role === 'guest') console.log('Guest User');
else if (role === 'mod') console.log('Moderator');
else console.log('Unknown User');

console.log('\nfor loops');
for (let i=0; i < 5; i++) console.log(i);

console.log('\nSpeed Limit Exercise');
checkSpeed(130);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    const maxPoints = 12;

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }
    // else
    const points = Math.floor((speed - speedLimit) / kmPerPoint)
    if (points >= maxPoints)
        console.log('Licence suspended');
    else
        console.log('Points: ', points)
}

console.log('\nOdd and even numbers exercise');
showNumbers(7);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'Even' : 'Odd';
        console.log(i, message);
    }
}

console.log('\nCount truthy');
const array = [0, null, undefined, '', '', 2, 3];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    // use for of loop to iterate through arrays
    for (let value of array)
        if (value) count++;
    return count;
}

console.log('\nfor in loops (iterating over object properties)');
// define an object with some properties
const movie = {
    // give properties values with colon and comma, not equals sign
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}; // semicolon after object definition

showStringProperties(movie);

function showStringProperties(obj) {
    // use for in loops to iterate over object properties
    for (let key in obj) {
        // for in loops iterate over the property names, not the property values
        console.log(key);
        // can access property values by indexing object like you would an array
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}

console.log('\nGrades calculation exercise');
const marks = [80, 80, 50];

console.log(calcGrade(marks));

function calcGrade(marks) {

    const wam = calcMean(marks);

    // note return statements allow us to skip else statements
    if (wam < 50) return 'F';
    if (wam < 65) return 'P';
    if (wam < 70) return 'H3';
    if (wam < 75) return 'H2B';
    if (wam < 80) return 'H2A';
    return 'H1';
}

function calcMean(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
        // to access length of an array use array.length
        // arrays are automatically carrying a bunch of properties like length
    return sum / array.length;
}

console.log('\nExtending strings');
printStars(10);

function printStars(numRows) {
    // Start a new row
    for (let row = 1; row <= numRows; row++) {
        // Create an empty string
        let pattern = '';
        for (let i=1; i <= row; i++)
            // concatenate the string
            pattern += '*';
        console.log(pattern);
    }
}

console.log('\nObjects with nested properties and object methods (functions within objects)');
const circle = {
    radius: 1,
    // nested object properties
    location: {
        x: 1,
        y: 1
    },
    visible: true,
    // object methods
    draw: function() {
        console.log('o');
    }
};

// Access object methods
circle.draw();

console.log('\nFactory functions');
// A factory function is any function - which is not a class or constructor - that returns an object.
// In JavaScript, any function can return an object.
// When it does so without the new keyword, it’s a factory function.

// Use factory function to create a new instance of object
const factoryCircle1 = createCircle(1);
console.log(factoryCircle1);
factoryCircle1.draw();

const factoryCircle2 = createCircle(2);
console.log(factoryCircle2);

// Factory
function createCircle(radius) {
    // Define the object inside the factory function
    // A factory function return an object
    return {
        //if key and value have same name at declaration, can just write the key
        //this is equivalent to radius: radius,
        radius,
        // when defining an object method you can just drop the 'function' keyword
        draw() {
            console.log('o');
        }
    };
}

console.log('\nConstructor functions');
// camelNotationLooksLikeThis
// PascalNotationHasCapsAsFirstLetter
// Use Pascal notation for constructors

// 'new' operator does 3 things
// 1. creates an empty object
// 2. sets 'this' to point to the new empty object
// 3. returns the new object from the constructor function ('return this;')
const constructorCircle = new Circle(3);

// Constructor
function Circle(radius) {
    // 'this' is a reference to the object that is executing this piece of code
    this.radius = radius;
    // objects in JavaScript are dynamic - can add new properties/methods after the object is created
    this.draw = function() {
        console.log('o');
    }
}
    
console.log('Objects are dynamic');
const rectangle = {
    width: 1
};
console.log(rectangle);
rectangle.colour = 'yellow';
console.log(rectangle);
rectangle.draw = function() {};
console.log(rectangle);
// Can delete members from objects (properties or methods)
// Can add/remove properties of objects even when they are constant objects (const)
delete rectangle.width;
delete rectangle.draw;
console.log(rectangle);

console.log('\nConstructor property');
// EVery object in JavaScript has a property called constructor
// This property references the function used to create the object
console.log(constructorCircle.constructor);
// Constructor for factory-made objects is the in-built 'Object()' constructor function 
console.log(factoryCircle1.constructor);
// Same applies for objects that are directly declared
let blah = {}; // equivalent to let blah = new Object();
// Other native constructors include String(), Boolean(), Number() etc.

console.log('\nFunctions are objects');
console.log(createCircle.name);
console.log(createCircle.length); // function.length returns number of arguments
console.log(createCircle.constructor);
// Can create a new function by declaring it as an object
const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
    console.log('o');
}`);
// .call method
// {} indicates the emtpy object passed into the constructor (like how 'new' creates an empty object and passes it)
// These two lines are equivalent
Circle1.call({}, 1);
const anotherCircle = new Circle(1);
// If you don't use the 'new' key word, 'this' will point to the global object which is window.
// e.g. these two lines are equivalent
// Circle1.call(window, 1);
// const anotherCircle = new Circle(1);

// .apply method
// Same as .call method but the inputs are passed as an array e.g. blah.apply({}, [1, 2, 3])

console.log('\nValue vs. Reference types')
// Value types: number, string, bool, symbol, undefined, null
// Reference types: Object, Function, Array
// Let's use a reference type (an Object)
let a = { value: 10 };
let b = a;
a.value = 20;
// b was tracking the value of a because a is a reference type!
// in this case, a and b are ADDRESSES
console.log('a: ' + a.value + ', b: ' + b.value);
// Primitives are coped by their VALUE, objects are copied by their REFERENCE

// Another example (primitive doesn't iterate)
let prim = 10;
function increasePrim(prim) {
    prim++;
}
increasePrim(prim);
console.log(prim);
// Reference type (object iterates)
let obj = { value: 10 };
function increase(obj) {
    obj.value++;
}
increase(obj);
console.log(obj.value);

console.log('\nGrabbing properties of an object into an array');
for (let key in circle)
    console.log(key, circle[key]);
// how to use a for of loop for an object
// .keys() method returns an array of the keys of an object
console.log('--- .keys() method ---');
for (let key of Object.keys(circle))
    console.log(key);
    // .entries() method returns an array of the key/value pairs
console.log('--- .entries() method ---');
for (let entry of Object.entries(circle))
    console.log(entry);

// Can check if there is a property with the name you want
if ('radius' in circle) console.log('radius is a property of circle');

console.log('\nCloning an object');
// Can clone an old object into a new empty object {}
// Object.assign(target, source);
const clonedCircle = Object.assign({}, circle);
console.log(clonedCircle);
// Can also use a non-empty object to clone into and keep other parameters
const clonedCirclePlusColour = Object.assign({ colour: 'yellow' }, circle);
console.log(clonedCirclePlusColour);

// '...' operator also clones properties from what comes after it
// this is called 'spread operator'
const anotherClone = { ...circle };

console.log('Template literals are formatted strings');
// Literals: object {}, boolean true/false, string '' or "", template literals ``
const formattedString = 
`     This is a
'formatted' message!
         wow`
console.log(formattedString);
// Can dynamically add expressions to template literals using ${blah}
let username = 'Cas';
const emailString = 
`Hi ${username},

Thanks for the update.
Regards`
console.log(emailString);
// Can also call a function inside ${}

console.log('Date objects');
const now = new Date();
console.log(now);

console.log('Address exercise');
let address = {
    street: 'Napoleon St',
    city: 'Melbourne',
    postcode: '3012'
};
function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}
showAddress(address);
// Factory function for address
function createAddress(street, city, postcode) {
    return {
        street,
        city,
        postcode
    };
}
let factoryAddress = createAddress('Keele St', 'Melbourne', '3066');
console.log(factoryAddress);
// Constructor function for address
function Address(street, city, postcode) {
    // remember constructors use 'this' keyword
    this.street = street;
    this.city = city;
    this.postcode = postcode;
}
let constructorAddress = new Address('Boorcan Rd', 'Boorcan', '3265');
console.log(constructorAddress);
function areEqual(obj1, obj2) {
    for (let key in obj1)
        if (obj1[key] !== obj2[key])
            return false;
    return true;
}
function areSameObj(obj1, obj2) {
    // Checks if the referenced memory addresses are same
    return obj1 === obj2;
}

let ninaAddress = createAddress('Keele St', 'Melbourne', '3066');
console.log(areEqual(ninaAddress, factoryAddress));
console.log(areSameObj(ninaAddress, factoryAddress));

console.log('\nObject literal syntax exercise');
let post = {
    title: 'turbulent structures',
    body: 'blah lahlb',
    author: 'Cas Kent',
    views: 10,
    comments: [
        {user: 'cankodf', body: 'Nnice post'},
        {user: 'rios93', body: 'I like this'}
    ],
    isLive: true
};
console.log(post);
// Constructor for post
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    // Can leave parameters as defaults
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}
let constructorPost = new Post('Title of post', 'Hi this is my blog post', 'Cas');
console.log(constructorPost);

console.log('\nArrays - adding elements');
const numbers = [3, 4];
// Add elements to END of array
numbers.push(5, 6);
console.log(numbers);
// Add elements to BEGINNING of array
numbers.unshift(1, 2);
console.log(numbers);
// Add elements to MIDDLE of array
numbers.splice(2, 0, 2.1, 2.5);
console.log(numbers);

console.log('\nArrays - removing elements');
// Remove last element from END of array and return the popped element
const lastElem = numbers.pop();
console.log(numbers, lastElem);
// Remove first element from START of array and return the shifted element
const firstElem = numbers.shift();
console.log(firstElem, numbers);
// Remove elements from MIDDLE of array
numbers.splice(1, 2);
console.log(numbers);

console.log('\n Emptying an array');
let moreNumbers = [1, 2, 3, 4];
// This method only works if you don't have anything pointing to the old array
moreNumbers = [];
// Safer alternatives:
moreNumbers.length = 0;
moreNumbers.splice(0, moreNumbers.length);

console.log('\nFinding primitives in an array');
const numArray = [1, 2, 3, 4, 1];
console.log(numArray.indexOf(1));
console.log(numArray.indexOf('a'));
// Type matters
console.log(numArray.indexOf('1'));
console.log(numArray.lastIndexOf(1));
// Check if an element is in an array
console.log(numArray.includes(5));
// All three functions can pass a starting index for search
console.log(numArray.indexOf(1, 1));
console.log(numArray.includes(2, 3));

console.log('\nFinding reference type elements in an array');
// Searches for objects by address
const courses = [
    { id:1, name: 'EngComp'},
    { id:2, name: 'MechMat'}
];
// returns false because address of the input object isn't same address as object in courses
console.log(courses.includes({ id:1, name: 'EngComp'}));
// For reference types, need to use the .find() method
// .find() returns a reference to the object it found in the array
const course = courses.find(function(course) {
    return course.name === 'EngComp';
});
console.log(course);
const course2 = courses.find(function(course) {
    return course.name === 'SpecMaths';
});
// find() returns undefined if not found
console.log(course2);
// findIndex() method returns the index of the found object in the array
const courseIndex = courses.findIndex(function(course) {
    return course.name === 'EngComp';
});
console.log(courseIndex);
// findIndex() returns -1 if not found
const courseIndex2 = courses.findIndex(function(course) {
    return course.name === 'AdvThermo';
});
console.log(courseIndex2);

console.log('Arrow function');
// Use a fat arrow instead of passing the parameter to function()
// Also remove the curly braces and return keyword and semicolon ;
const courseArrow = courses.find(course => course.name === 'SpecMaths');

console.log('\nCombining and slicing arrays');
const first = [3, 2, 1];
const second = [6, 5, 4];
const combined = first.concat(second);
console.log(combined);
const sliced = combined.slice(2, 5);
console.log(sliced);
// Can also use spread operator '...' to concatenate or clone arrays
const combinedSpread = [...first, 'a', ...second, 'b'];
console.log(combinedSpread);
const copiedArray = [...combined];

console.log('Iterating arrays');
copiedArray.forEach(number => console.log(number));

console.log('Array reduction - reduce method');
// Every time you need to get a single value out of an array of values, think of the .reduce() method
function getMax(array) {
    if (array.length === 0) return undefined;
    // a - previous value (returned from previous call of callback function)
    // b - current value (value  of the current element)
    return array.reduce((a, b) => (a > b) ? a : b);
}
const arrayToReduce = [4, 6, 2, 1];
console.log(getMax(arrayToReduce));

console.log('\nFiltering arrays');
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3.0 },
    { title: 'd', year: 2017, rating: 4.5 }
]
// All the movies in 2018 with rating >4
// Sort by decending rating
// Pick their title only
// Can apply mutliple methods to an array on separate lines
const eligibleTitles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    // sort() needs a comparison function as input
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);
console.log(eligibleTitles);