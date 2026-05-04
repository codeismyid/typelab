[typelab](../README.md) / [aliases](../aliases.md) / ObjectGeneric

```ts
type ObjectGeneric<T> = Record<PropertyKey, T>;
```

Extended TypeScript [\`Record\`](#) to define a generic `object` type.

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
<td>

[`Any`](Any.md)

</td>
<td>

The type of the values in the `object`, defaults to 'any'.

</td>
</tr>
</tbody>
</table>

## Returns

`Record` type with `PropertyKey` as a key and `T` as a value

## Example

```ts
// ObjNumber is { [x: string]: number; [x: number]: number; [x: symbol]: number; }
type ObjNumber = ObjectGeneric<number>;

const Valid: ObjNumber = { a: 1, b: 2 };
const Invalid: ObjNumber = { a: '1', b: '2' }; // Type 'string' is not assignable to type 'number'
```
