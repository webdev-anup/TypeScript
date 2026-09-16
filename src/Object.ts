const chai = {
  name: "masala chai",
  price: 20,
  ishot: true,
};

//  {
//     name : string;
//     price : number;
//     ishot : boolean;
//  }

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Adark  Chai",
  price: 30,
  ingredients: ["ginger", "tea leaves"],
};

type Cup = { size: string; material: string };
let smallCup: Cup = { size: "small", material: "ceramic" };

let bigCup: Cup = { size: "big", material: "steel" };

smallCup = bigCup;

type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffee;

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "chai",
  password: "secret",
};

type Item = [name: string, quantity: number];
type address = [street: string, city: string];

type Order = {
  id: string;
  Items: Item[];
  address: address;
};

// type Chai = {
//   name: string;
//   price: number;
//   isHot: boolean;
// };

// const updateChai = (updates: Partial<Chai>) => {
//   console.timeLog("updating chai with", updates);
// };

// updateChai({ price: 25 });
// updateChai({ isHot: false });
// updateChai({})

type ChaiOrder = {
    name?: string
    quantity?: number
}

const placeHolder = (order: Required<ChaiOrder>) => {
    console.log(order)
}


placeHolder({ name: "Masala Chai", quantity: 2 });

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
}

type BasicChaiInfo = Pick<Chai, "name" | "price">

const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30
}

type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string;
};

type PublicChai = Omit<Chai, "secretIngredients">;