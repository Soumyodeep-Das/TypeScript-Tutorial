const User = {
    username: 'Sdas',
    email: 'sdas@gmail.com',
    isActive: true,
}

// Functions taking objets
function createUser({username: string, isPaid: boolean}){}

createUser({username: 'sdas', isPaid: true})

// Functions returning objects
function createCourse():{name: string, price: number}{
    return {name: 'TS', price: 10}
}