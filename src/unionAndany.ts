let subs: number | string = "1M";

let apirequestStatus: "pending" | "success" | "error" = "pending";

let airlineSeat: "aisle" | "window" | "middle" = "aisle";

airlineSeat = "aisle";

const orders = ["12", "24", "36"];

let currentOrder: string | undefined;

for (let order of orders) {
  if (order === "24") {
    currentOrder = order;
    break;
  }
  currentOrder = "14"
}

console.log(currentOrder);
