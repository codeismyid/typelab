[typelab](../README.md) / [aliases](../aliases.md) / Tuple

```ts
type Tuple<T> = [...T];
```

Type that represents a tuple, which is a fixed-length array of elements of type `T`.

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

`T` *extends* [`List`](List.md)

</td>
<td>

[`Any`](Any.md)[]

</td>
<td>

The type of the elements in the tuple, defaults to `any[]`.

</td>
</tr>
</tbody>
</table>

## Example

```ts
// MyTuple is [number, string]
type MyTuple = Tuple<[number, string]>;
```
