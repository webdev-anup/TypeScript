const chaiFlavours: string[] = ["Masala", "Ginger", "Green", "White"];
const chaiPrice: number[] = [25, 30, 20, 35];
const rating: Array<number> = [4, 5, 3, 4];

// Object
type chai = {
    name: string;
    price: number
}

// Basic Array
const menu: chai[] =[
    {name: "Masala", price: 25},
    {name: "Ginger", price: 30},
    {name: "Green", price: 20},
    {name: "White", price: 35}
]


// define not modified
const cities: readonly string[] = ["New York", "London", "Tokyo", "Paris"];
// cities.push("Sydney")

// multidimension

const table: number[] [] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// tuple
let chaiTuple: [string, number];
chaiTuple = ["Masala", 25]
chaiTuple = ["Ginger", 30]

let userInfo: [string, number, boolean?]
userInfo = ["Alice", 30, true]

// readonly tuple
const location: readonly [number, number] = [51.50, 0.12]

const chaiItems: [name: string, price: number] = ["Masala", 25]
