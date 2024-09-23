// Union in TypeScript

let score: number | string | boolean = 33

score = 44
score = '55'
score = true

type NormalUser = {
    username: string,
    id: number,
}

type Admin = {
    username: string,
    id: number,
}

let sdas: NormalUser | Admin = {
    username: "Sdas",
    id: 1234,
}

sdas = {username: 'sd', id: 9098}

function getDbId(id: number | string){
    // making some api calls
    console.log(`DB ID is ${id}`)
    // id.toLowerCase() // will an error as id is now neither just a number nor just a string, it is a combination of both , that's why we have to do type checks to use string or number specific methods
    if (typeof id === 'string'){
        id.toLowerCase() // not throwing any errors
    }
}

getDbId(3)
getDbId('33')



// Array

const numberData: number[] = [1,2,3,4]
const stringData: string[] = ['1', '2', '3', '4']
// const mixData: string[] | number[] = [1,2,3,'4'] // will throw an error cause this defines that the mixData[] array can have either all values as string or all values as number

// To avoid this, and have multiple type of values in the array we can use this similar syntax but with a paranthesis ()

const mixData: (string | number)[] = [1,2,3,'4'] // not throwing any errors


// Literal type of assignment

let pi:3.14 // so value of pi now can not be changed, it is like defining it as a constant

pi = 3.14 // this will not throw any error
// pi = 3.145 this will throw error

let seatAllotment: 'aisle' | 'middle' | 'window'

seatAllotment = 'aisle'
// seatAllotment = 'crew' // will throw error