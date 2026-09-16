type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}


type TeaRecipe = {
    water: number;
    milk: number
}

// class MasalaChai implements TeaRecipe {
//     water = 100;
//     milk = 50;
// }

interface CupSize {
    size: "small" | "large"
}
class Chai implements CupSize {
    size: "small" | "large" = "large";
}

// type Response = {ok: true} | {ok: false}
// class myRes implements Response {
//     ok: boolean =  true;
// }


type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t: TeaType) {
    console.log(t);
}

type BaseChai = {teaLeaves: number} 
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra
const cup: MasalaChai = {
    teaLeaves: 10,
    masala: 5
}

type User = {
    username: string;
    bio?: string

}

const u1: User = {username: "anup"}
const u2: User = {username: "hello", bio: "Hello, I'm learning TypeScript!"}

type Config = {
    readonly appName: string
    readonly version: number
}

const cfg: Config = {
    appName : "My App",
    version: 1.0
}

// cfg.appName = "chaiCode"

