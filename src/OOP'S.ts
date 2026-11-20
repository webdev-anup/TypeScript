// class Chai {
//     flavour: string;
//     price: number

//     // constructor(flavour: string, price: number) {
//     //     this.flavour = flavour
//     //     this.price = price
//     // }
//     constructor(flavour: string) {
//         this.flavour = flavour
//         console.log(this);

//     }

// }

// const masalaChai = new Chai("Ginger", 25)
// masalaChai.flavour = "masala"


// access modifier

class Chai {
    public flavour: string = "Ginger"

    private secretIngredients = "Spices"

    reveal(){
        return this.secretIngredients //ok


    }

}
class Shop {
    protected shopName = "Chai corner"

}
class Branch extends Shop {
    getName(){
        return this.shopName;
    }
}

class Walet {
    #balance = 100

    getBalance() {
        return this.#balance
    }
}

const w = new Walet()
console.log(w.getBalance())

