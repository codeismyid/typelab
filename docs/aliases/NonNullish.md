[typelab](../README.md) / [aliases](../aliases.md) / NonNullish

```ts
type NonNullish = {
};
```

Type that refers to `any` (non-null/undefined) value with zero or more properties.

See [this link](https://github.com/microsoft/TypeScript/wiki/FAQ#primitives-are---and---doesnt-mean-object).

## Example

```ts
const example: NonNullish = true; // valid
const example2: NonNullish = true as boolean | null; // invalid
const example3: NonNullish = null || undefined; // invalid
```
