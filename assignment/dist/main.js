"use strict";
// one
function formatString(input, toUpper) {
    return toUpper === false
        ? input.toLocaleLowerCase()
        : input.toLocaleUpperCase();
}
// console.log(formatString("Hello"));
// console.log(formatString("Hello", true));
// console.log(formatString("Hello", false));
// two
function filterByRating(items) {
    return items.filter((item) => item.rating >= 4);
}
// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ];
// console.log(filterByRating(books));
// three
function concatenateArrays(...arrays) {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
