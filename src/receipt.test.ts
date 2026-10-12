

import {
  addItem,
  deleteItem,
  total,
  tax,
  printReceipt,
} from "./fixed_receipt";

describe("receipt.ts tests", () => {
  // Test tax before other tests change the grocery list.
  test("calculates 10% tax correctly", () => {
    const subtotal = 47.49;
    expect(tax(0.1)).toBeCloseTo(subtotal * 0.1, 2);
  });

  test("returns zero tax when the tax rate is zero", () => {
    expect(tax(0)).toBe(0);
  });

  test("adds a grocery item", () => {
    expect(() => addItem("apples", 3.5)).not.toThrow();
  });

  test("does not remove an item when the name is not found", () => {
    const before = deleteItem("sandwich");
    const after = deleteItem("unknown item");

    expect(after).toHaveLength(before.length);
  });

  test("prints a receipt without throwing an error", () => {
    const consoleSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    try {
      expect(() => printReceipt(0.1)).not.toThrow();
    } finally {
      consoleSpy.mockRestore();
    }
  });
});

