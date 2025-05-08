# typescript-assignment

#Interview Questions - Blog Task

1. What are some differences between interfaces and types in TypeScript? </br>
   => interface generally use to object and can also be array and tuples , not use on primitive types | type use on primitives, arrays, tuples and other complex structures.</br>
   => interface extend to other interface | type inheritance possible but use on & operator. </br>
   => same name interface added work on one interface | same name type declare on multiple time give error. </br>
   => interface is mutable, but use on add or modify in a new interface | type use on readonly so properties are not change. </br>

2. Explain the difference between any, unknown, and never types in TypeScript?
   #any
   => your can stored any type of value. Type checking is off.
   #unknown
   => type is unknown but must used in a type safe way.
   #never
   =>something that never happens.

3. How does TypeScript help in improving code quality and project maintainability?
   => Typescript checks your code for type error compile time before runs code.with types helps rename, restructure, or refactor code safely. compiler guide to you update all dependent parts correctly.
