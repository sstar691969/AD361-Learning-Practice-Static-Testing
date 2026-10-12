

For each issue, include:

- Location: -> 39 |   for (const i of 3 as never) {
         |                   ^
      40 |     total = total + ITEMS[i]["price"];
      41 |   }
- Issue: total() function
- Explanation: for (const i of 3 as never) {
  total = total + ITEMS[i]["price"];
}
- Suggested fix: replace the for loop with let instead 
- Status: failed

- Location: -> receipt.ts tests › returns zero tax when the tax rate is zero

Issue: returns zero tax when the tax rate is zero
- Explanation: the function is not correct. Use let and the for loop 
- Suggested fix: 3 is not iterable
- Status: failed
 
 - Location: -> 44 |       expect(() => printReceipt(0.1)).not.toThrow();

Issue: receipt.ts tests › prints a receipt without throwing an error
- Explanation: line 39 "3 is not iterable"
- Suggested fix:change the entire function use let and then for loop
- Status: failed
 




Also identify at least one example of each of the following:

- Root cause: the function is not correct. change by using a let and a variable then a for and a variable loop
- Error:  TypeError: 3 is not iterable or "3 is not iterable"
- Defect: src/receipt.test.ts:34:15
- Failure: receipt.ts tests › prints a receipt without throwing an error

issues identified by `ESLint` 
eslint: error 'name' is defined but never used and  
 error 'idx' is assigned a value but never used 

fixed: issue is now fixed