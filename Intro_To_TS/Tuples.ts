// Though we can have multiple type of values in an array using union like this
let unionUser: (string | number | boolean)[] = ['sd', 12, 'rd', true, true, false]
// But here the problem is we can not have an order upon it like first we have to assign the string value then number and thereafter the boolean value.

// So, to achive this ordered typed values in an array, we use //? Tuples in TypeScript

// The syntax is 
let tupleUser: [string, number, boolean] = ['sd', 123, true]
//or
type tupleuser = [number, string]

const newUser: tupleuser = [123, 'email.com']

// but there is a bug, that as the tuple is a special type of array so we can perform array operations on it like push(), pop(), unshift() etc. this don't give us error while writing the code, but causes errors in runtime because we can't just push random values into one tuple.
// bug example
newUser.push('mail')