// Functions with input types specified
function addTwo(num: number){
    return num+2;
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name : string, username: string, isAdult: boolean){
    console.log(signUpUser('Soumyodeep', 'sdas', true))
}


addTwo(5)
getUpper("a")

// Functions with both input and output type check
function addThree(num : number) : number {
    // return 'anything' // will throw error
    return num+3;
}

addThree(9);

const getHello = (s: string) : string => {
    return `Hello ${s}`;
}

getHello('SDas');

const heros = ["Thor", "Spidy", "IronMan"]

heros.map((hero: string) => {
    return `Hero is ${hero}`;
})

// Functions where we aren't returning any value
function consoleError(errMsg: string): void{
    console.log(errMsg);
    // return 'something' // will throw error
}

// Functions that never returns a value
function handleError(errMsg: string): never{
    throw new Error(errMsg)
}