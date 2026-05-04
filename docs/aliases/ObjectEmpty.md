[typelab](../README.md) / [aliases](../aliases.md) / ObjectEmpty

```ts
type ObjectEmpty = Record<PropertyKey, never>;
```

Extended TypeScript [\`Record\`](#) to define a empty `object` type.

## Returns

`Record` type with `PropertyKey` as a key and `never` as a value

## Example

```ts
// ObjEmpty is { [x: string]: never; [x: number]: never; [x: symbol]: never; }
type ObjEmpty = ObjectEmpty;

const Valid: ObjEmpty = {};
const Invalid: ObjEmpty = { a: 1 } // Type 'number' is not assignable to type 'never'
```
