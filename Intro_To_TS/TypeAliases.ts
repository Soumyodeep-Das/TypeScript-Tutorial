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