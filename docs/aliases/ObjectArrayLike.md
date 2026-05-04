[typelab](../README.md) / [aliases](../aliases.md) / ObjectArrayLike

```ts
type ObjectArrayLike<T> = Record<number, T>;
```

Extended TypeScript [\`Record\`](#) to define an `object` with `number` as key type.

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

The type of the values in the object, defaults to 'any'.

</td>
</tr>
</tbody>
</table>

## Returns

`Record` type with `number` as a key and `T` as a value

## Example

```ts
// ObjArrayLike is { [x: number]: string; }
type ObjArrayLike = ObjectArrayLike<string>;

const Valid: ObjArrayLike = { 0: 'first', 1: 'second' };
const Invalid: ObjArrayLike = { 0: 'first', a: 'second' }; // a is invalid key
```
