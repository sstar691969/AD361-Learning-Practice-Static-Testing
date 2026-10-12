

 // Program requirements:
 // Items can be added to the grocery list.
 // Items can be deleted from the grocery list.
 // The subtotal is calculated without tax.
 // The total is calculated with tax.
 // A receipt can be printed.

const ITEMS: { name: string; price: number }[] = [
  { name: "paper towels", price: 21.99 },
  { name: "sandwich", price: 8.75 },
  { name: "eggs", price: 6.75 },
  { name: "avocado oil", price: 10.00 },
];

export function addItem(name: string, price: number) {
  const newItem = { name, price };
  ITEMS.push(newItem);
}

export function deleteItem(name: string) {
  const idx = ITEMS.findIndex((item) => item.name === name);

  if (idx !== -1) {
    ITEMS.splice(idx, 1);
  }

  return ITEMS;
}

export function subtotal() {
  let sum = 0;

  for (const item of ITEMS) {
    sum += item.price;
  }

  return Number(sum.toFixed(2));
}

export function total() {
  return subtotal();
}

export function tax(taxRate: number) {
  return Number((subtotal() * taxRate).toFixed(2));
}

export function totalWithTax(taxRate: number) {
  return Number((subtotal() + tax(taxRate)).toFixed(2));
}

export function printReceipt(taxRate: number) {
  console.log("************************");

  for (const item of ITEMS) {
    console.log(`${item.name} : $${item.price.toFixed(2)}`);
  }

  console.log("************************");
  console.log(`Subtotal: $${subtotal().toFixed(2)}`);
  console.log(`Tax: $${tax(taxRate).toFixed(2)}`);
  console.log(`Total: $${totalWithTax(taxRate).toFixed(2)}`);
}
