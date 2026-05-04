[typelab](../README.md) / [aliases](../aliases.md) / ReadonlyTuple

```ts
type ReadonlyTuple<T> = readonly [...T];
```

Type that represents a read-only tuple, which is a fixed-length, immutable array of elements of type `T`.

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

`T` *extends* [`ReadonlyList`](ReadonlyList.md)

</td>
<td>

[`Any`](Any.md)[]

</td>
<td>

The type of the elements in the read-only tuple, defaults to `any[]`.

</td>
</tr>
</tbody>
</table>

## Example

```ts
// MyReadonlyTuple is readonly [number, string]
type MyReadonlyTuple = ReadonlyTuple<[number, string]>;
```
