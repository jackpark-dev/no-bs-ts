# no-bs-ts

## ts-basics

```
yarn init -y
yarn add typescript -D
yarn add ts-node -D
npx tsc --init
```

- npx ts-node basics.js
```
true Park
```

## #2 - Typescript Functions

- npx ts-node function-test.ts

- js-function-tests.js
```
npx tsc function.ts
node js-function-tests.js
```

## #3 - Typescript Functions with Functions

- Functions as types
- Returning functions

## #4 - Function Overloading in Typescript

- Function overloading
  - unknown
  - typeof
  - as

## #5 - Optionals in Typescript

- Optional parameter
  - backtick in backtick
- Optional fields
  - ! (exclamation mark) - not be null
- Optional function calls
  - callback?.();

## #6 - Tuples in Typescript

- Defining tuples
- Tuples with different types

## #7 - Generics in Typescript

- Making a generic function
- Overriding inferred generic type
- Example #2 - Ranker


## #8 - Generics with keyof in Typescript

- #1 - Pluck
- #2 - Event Map

## #9 - Typescript Utility Types

- Pick
- Required
- Pick
- Record
- Omit
- Types from fields

## #10 - Readonly And Immutability in Typescript

- readonly
- as const (no as readonly)

## #11 - Enums and Literal Types in Typescript

- Enumerations
- Literal types
- Numeric literals
- String literals

## #12 - Typescript Classes; Member Visibility and Implements

- Implementing interfaces
- Private member variables
- Extending existing classes

## #13 - Generics in Typescript Classes

- Making the value generic
- Making the key generic

## #14 - Mapped Types in Typescript
https://www.typescriptlang.org/docs/handbook/2/mapped-types.html


## #15 - Readonly and Static in Typescript Classes
https://www.youtube.com/watch?v=nkpPOVUHT1k
- Creating The Dog Classes
- Members in Constructors
- Readonly Member Fields
- Singletons
- Static Member Fields
- Static Methods

## #16 - Abstract Classes in Typescript

- Creating StreetFighter
- Abstract Classes
- Abstract Accessors


## #17 - Mixins in Typescript
https://www.typescriptlang.org/docs/handbook/mixins.html

- Introduction
- Mixins **Page**
- Functions creating functions
- Functions creating classes
- Functions creating generic classes
- Creating a mixin
- Review

## #18 - Conditional Types in Typescript

https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

- Introduction
- What are conditional types?
- Importing libraries
- fetchPokemon with conditionals
- fetchPokemon with overloading

## #19 - Utility Types in Typescript - Part 2

- Utility Types in the handbook
- Function setup
- Parameters and ReturnType
- Class setup
- ConstructorParameters and InstanceType

## #20 - Typescript/React - Setup and Properties

- Creating the React App
  ```
  yarn create react-app episode-20 --template typescript
  ```
- Components children
- Components with complex properties
- Event handlers
- useCallback


## #21 - Typescript/React - Hooks

- Cheatsheet
  - https://github.com/typescript-cheatsheets/react
- useState
- useEffect
- useReducer
- useRef
- **useCallback**

## #22 - Typescript/React - Advanced Properties

- Typing useState as props - Prop Drilling useState
- Using ReturnType
- DetailedHTMLProps
  - https://unpkg.com/@types/react@17.0.2/index.d.ts
- Adding custom props

## #23 - Typescript/React - Custom Hooks

- Cleanup
- Creating useTodos
- useCallback
- Using useTodos

## #24 - Typescript/React - Generic Components

- Creating a generic component
- Adding DetailedHTMLProps
- Supporting children
- Generic event handlers
- Outroduction

## #25 - Typescript/React - useContext

- Project review
- createContext
- Creating the Provider
- Using the Provider
- Custom hooks with context
- Consuming context
