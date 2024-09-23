// Type Aliases is like structures in C

type User = {
    name: string,
    email: string,
    isActive: boolean,
}

function createUser(user: User){
    return {name: '', email: '', isActive: ''}
}

createUser({name: '', email: '', isActive: true})

// 

type UserType = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number, // '?' denotes optional field
}

let myUser: UserType = {
    _id: '123400',
    name: 'Sdas',
    email: 'sdas@gmail.com',
    isActive: true,
}

myUser.email = 'new email'
// myUser._id = 'new id' // Will throw error as _id is marked as readonly

// Mix and Match of types

type cardNumber = {
    cardnumber: string,
}

type cardDate = {
    carddate: string,
}

type cardDetails = cardNumber & cardDate & {
    cvv: number,
}

let card: cardDetails = {
    cardnumber: '1234',
    carddate: '23/09/24',
    cvv: 123
}