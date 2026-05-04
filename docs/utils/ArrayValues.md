[typelab](../README.md) / [utils](../utils.md) / ArrayValues

```ts
type ArrayValues<T> = ArrayElements<T>;
```

Alias for [\`ArrayElements\`](ArrayElements.md).

Extracts the values of an `Array` type`.

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
<td>

The target `Array`.

</td>
</tr>
</tbody>
</table>

## Returns

Values of type `T`.

## Example

```ts
type Values = ArrayValues<[string, number]>; // string | number
type Never = ArrayValues<any>; // never
```
