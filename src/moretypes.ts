let response:any = "42"

let numericLength:number = (response as string).length


type Book = {
    name: string
}

// Define it as an actual JSON string
let bookString: string = '{ "name": "The Great Gatsby" }'; 

// Now JSON.parse will work correctly
let bookObject = JSON.parse(bookString) as Book; 

console.log(bookObject);


const inputElement = document.getElementById("username") as HTMLInputElement


let value:any
value = "chai"
value = [1,2,3]
value = 2.5
value.toUpperCase()


let newValue: unknown

newValue = "chai"
newValue = [1,2,3]
newValue = 2.5

if(typeof newValue === "string") {
    newValue.toUpperCase()
}

try {
    
} catch (error:any) {
    if(error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error)
}


const data:unknown = "chai aud code"
const strData: string = data as string


type Role = "admin" | "user" | "superadmin"

function redirectBasedOnRole(role:Role): void{
    if(role === "admin") {
        console.log("Redirecting to admin panel");
        return

    }
    if(role === "user") {
        console.log("Redirecting to user panel");
        return

    }
    role;
}

function neverReturn(): never {
    while(true) {

    }
}


