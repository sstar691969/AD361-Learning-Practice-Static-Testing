
// Program requirements:
// Items can be added to the grocery list.
// Items can be deleted from the grocery list.
// The subtotal is calculated without tax.
// The total is calculated with tax.
// A receipt can be printed.


 // Program requirements:
 // Items can be added to the grocery list.
 // Items can be deleted from the grocery list.
 // The subtotal is calculated without tax.
 // The total is calculated with tax.
 // A receipt can be printed.

const ITEMS = [
  { name: "paper towels", price: 21.99 },
  { name: "sandwich", price: 8.75 },
  { name: "eggs", price: 6.75 },
  { name: "avocado oil", price: 10.0 },
];

export function addItem(name: string, price: number) {
  const newItem = { name: name, price: price };
  ITEMS.push(newItem);
}

export function deleteItem(name: string) {
  const idx = ITEMS.indexOf("name" as never);
  ITEMS.pop();
  return ITEMS;
}

export function total() {
  let total = 0;

  // Original logic bug retained: 3 is not iterable.
  for (const i of 3 as never) {
    total = total + ITEMS[i]["price"];
  }

  return total;
}


export function tax(taxRate: number) {
  return Number((total() * taxRate).toFixed(2));
}



export function printReceipt(taxRate: number) {
  console.log("************************");

  for (const i of ITEMS) {
    console.log(`${(i as { name: string; price: number }).name} : $${(i as { name: string; price: number }).price}`);
  }

  console.log("************************");
  console.log(`Subtotal: $${String(total())}`);
  console.log(`Tax: $${String(taxRate)}`);
  console.log(`Total: $${String(tax(taxRate))}`);
}