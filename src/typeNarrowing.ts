function getchai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `chai order: ${kind}`;
}

function serverChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala chai`;
}

function orderchai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small cutting chai...`;
  }
  if (size === "medium" || size === "large") {
    return `make extra chai`;
  }
  return `chai order: #${size}`;
}
class kulhadChai {
  serve() {
    return `Serving kulhad chai`;
  }
}
class CuttingChai {
  serve() {
    return `Serving cutting chai`;
  }
}

function serve(chai: kulhadChai | CuttingChai) {
  if (chai instanceof kulhadChai) {
    return chai.serve();
  }
}

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj != null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} with ${item.sugar}
        sugar.`;
  }
  return `Serving custom chai: ${item}`;
}

type masalaChai = { type: "masala"; spicelevel: number };
type gingerChai = { type: "ginger"; amount: number };
type cardamomChai = { type: "cardamom"; aroma: number };

type Chai = masalaChai | gingerChai | cardamomChai;

function makeChai(order: Chai) {
  // Fixed: Capitalized 'Chai'
  switch (order.type) {
    case "masala": // Fixed: Matches the string literal in masalaChai
      return `masala chai`;
    case "ginger": // Fixed: Matches the string literal in gingerChai
      return `ginger chai`; // Fixed: Changed return string
    case "cardamom": // Added: Exhaustive check for the union type
      return `cardamom chai`;
    default:
  }
}


function brew(order: masalaChai | gingerChai) {
    if("spicelevel" in order) {
    }
}

