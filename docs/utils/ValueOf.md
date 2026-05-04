[typelab](../README.md) / [utils](../utils.md) / ValueOf

```ts
type ValueOf<T> = T[KeyOf<T>];
```

Extracts the values of an `object` type.

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

The `object` type.

</td>
</tr>
</tbody>
</table>

## Returns

The values of the `object`.

## Example

```ts
// Values is string | number
type Values = ValueOf<{ a: string; b: number }>;
```
