[typelab](../README.md) / [aliases](../aliases.md) / Undefinable

```ts
type Undefinable<T> = T | undefined;
```

Type that allows a value to be `T` or `undefined`.

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

`never`

</td>
<td>

The original type.

</td>
</tr>
</tbody>
</table>

## Returns

Union `T` and `undefined`

## Example

```ts
const example: Undefinable<string> = undefined; // valid
const example2: Undefinable<string> = null; // invalid
```
