[typelab](../README.md) / [aliases](../aliases.md) / Array

```ts
type Array<T> = T[];
```

Type that represents an array with elements of type `T`.

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

The type of the elements in the array, defaults to `any`.

</td>
</tr>
</tbody>
</table>

## Example

```ts
// MyArray is string[]
type MyArray = Array<string>;
```
